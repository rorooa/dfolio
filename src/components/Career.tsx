import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>Prodigy InfoTech</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built full-stack web applications using Python, Flask, JavaScript, and MongoDB. 
              Developed REST APIs, implemented backend logic, and integrated databases.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & ML Student</h4>
                <h5>Alliance University</h5>
              </div>
              <h3>2022-26</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology in Artificial Intelligence and Machine Learning. 
              Focusing on computer vision, real-time AI, and high-performance architectures.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Developer</h4>
                <h5>Focusing on Intelligent Systems</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Specializing in computer vision and real-time AI applications. 
              Building intelligent solutions with high-performance architectures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
