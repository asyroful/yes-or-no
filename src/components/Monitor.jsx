import { useState, useEffect } from "react";

// Helper untuk memformat tanggal
const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  });
};

const Monitor = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLogs = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/logs");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // Upstash SDK sudah otomatis mem-parsing string JSON menjadi objek
      setLogs(data.logs || []);
    } catch (e) {
      console.error("Error fetching logs:", e);
      setError("Gagal memuat data. Coba refresh halaman.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div className="monitor-dashboard">
      <header className="monitor-header">
        <h1>Session Activity Monitor</h1>
        <button className="btn-refresh" onClick={fetchLogs} disabled={loading}>
          {loading ? "Loading..." : "Refresh"}
        </button>
      </header>
      
      <main className="monitor-content">
        {error && <p className="error-message">{error}</p>}
        {!loading && logs.length === 0 && !error && (
          <p className="empty-state">Belum ada aktivitas yang tercatat.</p>
        )}
        <div className="log-list">
          {logs.map((log, index) => (
            <div key={index} className="log-card">
              <div className="log-card-header">
                <span>Sesi Login</span>
                <span className="log-timestamp">{formatDate(log.timestamp)}</span>
              </div>
              <div className="log-card-body">
                <div className="log-metric">
                  <span className="metric-value">{log.yes_count}</span>
                  <span className="metric-label">"Yes" Clicks</span>
                </div>
                <div className="log-metric">
                  <span className="metric-value">{log.no_count}</span>
                  <span className="metric-label">"No" Clicks</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Monitor;
