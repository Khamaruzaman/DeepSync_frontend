import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About DeepSync</h1>
      <p>
        With the rise of deepfake technology, the creation of manipulated video content has become a serious societal concern. DeepSync tackles this issue using a hybrid deepfake detection approach, combining Convolutional Neural Networks (CNNs) with Vision Transformers (ViTs). This architecture integrates the spatial feature extraction strengths of EfficientNet B0 with the global pattern recognition of ViTs, enhancing the detection of both subtle and broad anomalies in video frames.
      </p>
      <p>
        DeepSync leverages CNNs to process facial patches and generate detailed embeddings, while ViTs analyze these embeddings in a broader context. This combined analysis improves detection accuracy by examining multiple frames for consistent signs of manipulation. The software’s robust, multi-frame strategy ensures reliable results, even on challenging datasets.
      </p>
      <p>
        The project builds on past research, addressing limitations in traditional deepfake detection methods, and aims to push forward advancements in digital forensics and media integrity.
      </p>

      <h2>Contributors</h2>
      <ul className="contributors-list">
        <li>Khamaruzaman KM - 4th Year Computer Science, NSS College of Engineering</li>
        <li>Akhil M Nair - 4th Year Computer Science, NSS College of Engineering</li>
        <li>Avani Prajosh CT - 4th Year Computer Science, NSS College of Engineering</li>
        <li>Yadukrishnan K - 4th Year Computer Science, NSS College of Engineering</li>
      </ul>
    </div>
  );
};

export default About;
