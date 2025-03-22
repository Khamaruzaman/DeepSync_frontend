import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import "./ResultPage.css"; // Import CSS file

ChartJS.register(ArcElement, Tooltip);

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const result = location.state?.result || {
    video_name: "sample_video.mp4",
    final_prediction: 0.35, // Example probability (85%)
  };

  const deepfakeProbability = result.final_prediction * 100;
  const humanProbability = 100 - deepfakeProbability;
  const isDeepFake = deepfakeProbability >= 50; // Condition for color/message
  const chartColor = isDeepFake ? "#F7C744" : "#4CAF50"; // Yellow if deepfake, Green if real

  const pieData = {
    datasets: [
      {
        data: [deepfakeProbability, humanProbability], // First slice is AI probability
        backgroundColor: [chartColor, "#E0E0E0"], // Dynamic color, grey for remaining part
        borderWidth: 0,
        cutout: "75%", // Makes it a hollow donut chart
      },
    ],
  };

  return (
    <div className="result-container">
      <div className="result-card">
        {/* Donut Chart */}
        <div className="chart-container">
          <Doughnut data={pieData} options={{ responsive: true, plugins: { tooltip: { enabled: false } } }} />
          <div className="chart-text">{isDeepFake ? "Fake" : "Real"}</div>
        </div>

        {/* Title */}
        <h2 className="title">Deepfake Detection</h2>

        {/* Confidence Message */}
        <p className="confidence-text">
          We are <span className="highlight" style={{ color: isDeepFake ? "#F7C744" : "#4CAF50" }}>{isDeepFake ? "highly confident" : "fairly confident"}</span> that this video is
          <span className="highlight " style={{ color: isDeepFake ? "#F7C744" : "#4CAF50" }}> {isDeepFake ? "Deep Faked" : "Real"}</span>.
        </p>

        {/* Probability Breakdown Section */}
        <div className="probability-section">
          <h3 className="prob-title">Probability Breakdown</h3>

          <div className="probability-bar">
            <span>Fake</span>
            <span className="percent">{deepfakeProbability.toFixed(2)}%</span>
          </div>
          <div className="bar ai-bar" style={{ width: `${deepfakeProbability}%`, backgroundColor: "#F7C744" }}></div>

          <div className="probability-bar">
            <span>Real</span>
            <span className="percent">{humanProbability.toFixed(2)}%</span>
          </div>
          <div className="bar human-bar" style={{ width: `${humanProbability}%`, backgroundColor: "#4CAF50" }}></div>
        </div>

        {/* Detect Again Button */}
        <button className="detect-again" onClick={() => navigate("/")}>
          Detect Another Video
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
