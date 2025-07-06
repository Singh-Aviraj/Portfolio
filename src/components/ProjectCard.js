import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link, aosDelay = 0 }) => {
  return (
    <Col size={12} sm={6} md={4} data-aos="flip-left" data-aos-delay={aosDelay}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br />
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              style={{
                display: "inline-block",
                marginTop: "10px",
                color: "#00bfff",
                textDecoration: "none"
              }}
            >
              🔗 View Repo
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};
