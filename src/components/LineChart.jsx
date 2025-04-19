import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
} from "recharts";

// Codeforces API endpoint for rating history
const GET_RATING_GRAPH = (username) =>
  `https://codeforces.com/api/user.rating?handle=${username}`;

// Map rating thresholds to colors
const ratingColor = (rating) => {
  if (rating < 1200) return "#bbbbbb";
  if (rating < 1400) return "#77ff77";
  if (rating < 1600) return "#77ddbb";
  if (rating < 1900) return "#9eb1ff";
  if (rating < 2100) return "#e97ee9";
  if (rating < 2300) return "#e9ac50";
  if (rating < 2400) return "#f7963c";
  if (rating < 2600) return "#e96e6e";
  if (rating < 3000) return "#ff3333";
  return "#b22323";
};

const getTitle = (rating) => {
  if (rating < 1200) return "Newbie";
  if (rating < 1400) return "Pupil";
  if (rating < 1600) return "Specialist";
  if (rating < 1900) return "Expert";
  if (rating < 2100) return "Candidate Master";
  if (rating < 2300) return "Master";
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div style={{ backgroundColor: '#222', border: '1px solid #555', padding: '10px', color: '#fff' }}>
        <p style={{ margin: 0 }}><strong>{data.fullDate}</strong></p>
        <p style={{ margin: 0 }}>Rating: {data.rating}, {getTitle(data.rating)}</p>
        <p style={{ margin: 0 }}>Rank: {data.rank}</p>
        {/* <p style={{ margin: 0 }}>{data.contestName}</p> */}
      </div>
    );
  }
  return null;
};

const ShreyChart = () => {
  const username = "shrey71";
  const [ratingData, setRatingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRating = async () => {
      try {
        const response = await fetch(GET_RATING_GRAPH(username));
        if (!response.ok) throw new Error(`Error ${response.status}`);
        const json = await response.json();
        setRatingData(json.result || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRating();
  }, []);

  if (loading) return <div className="p-4 bg-black text-white">Loading...</div>;
  if (error) return <div className="p-4 bg-black text-red-500">Error: {error}</div>;
  if (!ratingData.length)
    return <div className="p-4 bg-black text-white">No rating history available.</div>;

  const chartData = ratingData.map((entry) => {
    const fullDateObj = new Date(entry.ratingUpdateTimeSeconds * 1000);
    return {
      date: fullDateObj.toLocaleDateString("en-US", { year: "numeric", month: "short" }),
      fullDate: fullDateObj.toLocaleDateString("en-GB"), // DD/MM/YYYY
      rating: entry.newRating,
      rank: entry.rank,
      contestName: entry.contestName,
    };
  });

  return (
    <div className="p-4 bg-black" style={{ flex: 1, minWidth: "300px" }}>
      {/* <h2 className="font-spaceMono font-medium mb-2 text-white"># Rating vs Date</h2> */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          {[0, 1200, 1400, 1600, 1900, 2100].map((y, i, arr) => (
            <ReferenceArea
              key={i}
              y1={y}
              y2={arr[i + 1] || y + 1}
              fill={ratingColor(y)}
              fillOpacity={0.2}
              strokeOpacity={0}
            />
          ))}

          <CartesianGrid stroke="#444444" strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tick={{ fill: '#fff', fontSize: 12 }}
            axisLine={{ stroke: '#fff' }}
            tickLine={{ stroke: '#fff' }}
          />
          <YAxis
            domain={[1200, 1900]}
            ticks={[1200, 1400, 1600, 1900]}
            tick={{ fill: '#fff' }}
            axisLine={{ stroke: '#fff' }}
            tickLine={{ stroke: '#fff' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="rating"
            stroke="#ecbe3f"
            strokeWidth={2}
            dot={{
              r: 2.5,
              fill: (entry) => ratingColor(entry.payload.rating),
              stroke: '#fff',
              strokeWidth: 1,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ShreyChart;