require("dotenv").config();
const express = require("express");
const serverless = require("serverless-http");
const { Redis } = require("@upstash/redis");

const app = express();
const router = express.Router();

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

// Endpoint untuk menambah klik "yes"
router.post("/yes", async (req, res) => {
  const count = await redis.incr("current_yes_count");
  res.json({ count });
});

// Endpoint untuk menambah klik "no"
router.post("/no", async (req, res) => {
  const count = await redis.incr("current_no_count");
  res.json({ count });
});

// Endpoint untuk mendapatkan SEMUA log sesi
router.get("/logs", async (req, res) => {
  // LGETALL mengambil semua item dari list 'session_logs'
  const logs = await redis.lrange("session_logs", 0, -1);
  res.json({ logs });
});

// Endpoint untuk mereset hitungan dan mencatat sesi terakhir
router.post("/reset", async (req, res) => {
  // Ambil hitungan terakhir sebelum direset
  const last_yes_count = (await redis.get("current_yes_count")) || 0;
  const last_no_count = (await redis.get("current_no_count")) || 0;

  // Hanya catat jika ada aktivitas
  if (last_yes_count > 0 || last_no_count > 0) {
    const sessionLog = {
      timestamp: new Date().toISOString(),
      yes_count: last_yes_count,
      no_count: last_no_count,
    };
    // LPUSH menambahkan log baru ke awal list 'session_logs'
    await redis.lpush("session_logs", JSON.stringify(sessionLog));
  }

  // Reset hitungan saat ini kembali ke 0
  await redis.set("current_yes_count", 0);
  await redis.set("current_no_count", 0);

  res.status(200).json({ message: "Counts reset and session logged." });
});


app.use("/api/", router);

module.exports.handler = serverless(app);

