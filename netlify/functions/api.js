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

router.post("/yes", async (req, res) => {
  const count = await redis.incr("yes_count");
  res.json({ count });
});

router.post("/no", async (req, res) => {
  const count = await redis.incr("no_count");
  res.json({ count });
});

router.get("/counts", async (req, res) => {
  const yes_count = (await redis.get("yes_count")) || 0;
  const no_count = (await redis.get("no_count")) || 0;
  res.json({ yes_count, no_count });
});

app.use("/api/", router);

module.exports.handler = serverless(app);
