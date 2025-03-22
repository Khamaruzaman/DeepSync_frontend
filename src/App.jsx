import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import ResultPage from "./ResultPage";
import "./App.css";
import AboutPage from "./About";
import Navbar from "./Navbar";

const Home = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);  // 🔹 Added this line
  const navigate = useNavigate();

  const server_ip = "127.0.0.1:5000"

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) return;
  
    const formData = new FormData();
    formData.append("file", file);


    setLoading(true);
    setResult(null);

    try {
      const response = await axios.post("http://" + server_ip, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setResult(response.data);
      navigate("/result", { state: { result: response.data } });

    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main">
      <h1>Deepfake Detection</h1>
      <form onSubmit={handleSubmit} id="submit_form">
        <input
          id="video_input"
          type="file"
          onChange={handleFileChange}
          accept="video/*"
          required
        />
        <button id="submit_button" type="submit" disabled={loading}>
          {loading ? "Detecting..." : "Detect Deepfake"}
        </button>
      </form>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
