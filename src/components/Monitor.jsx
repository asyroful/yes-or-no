import { useState, useEffect } from "react";

const Monitor = () => {
  const [counts, setCounts] = useState({ yes_count: 0, no_count: 0 });

  const fetchCounts = async () => {
    try {
      const response = await fetch("/api/counts");
      const data = await response.json();
      setCounts(data);
    } catch (error) {
      console.error("Error fetching counts:", error);
    }
  };

  useEffect(() => {
    fetchCounts();
  }, []);

  return (
    <div className="monitor-container">
      <h1>Click Monitor</h1>
      <div className="counts">
        <h2>Yes Clicks: {counts.yes_count}</h2>
        <h2>No Clicks: {counts.no_count}</h2>
      </div>
      <button className="btn btn-yes" onClick={fetchCounts} style={{ marginTop: '20px', width: 'auto' }}>
        Refresh
      </button>
    </div>
  );
};

export default Monitor;
