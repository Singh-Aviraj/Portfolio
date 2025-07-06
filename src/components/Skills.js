import React from 'react';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const skills = [
    { icon: meter1, title: "Java & Spring Boot", aosDelay: 0 },
    { icon: meter2, title: "React.js", aosDelay: 100 },
    { icon: meter3, title: "MongoDB", aosDelay: 200 },
    { icon: meter2, title: "Git & GitHub", aosDelay: 300 },
    { icon: meter1, title: "JWT & Auth", aosDelay: 400 },
    { icon: meter3, title: "DevOps Basics", aosDelay: 500 },
    { icon: meter3, title: "MySQL", aosDelay: 600 },
    { icon: meter2, title: "Tailwind CSS", aosDelay: 700 },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx" data-aos="zoom-in">
              <h2 data-aos="fade-up">Skills</h2>
              <p data-aos="fade-up" data-aos-delay="100">
                Here are the technologies and tools I work with:
              </p>
              <div className="row text-center mt-4">
                {skills.map((skill, idx) => (
                  <div
                    className="col-md-3 col-sm-6 mb-4"
                    key={idx}
                    data-aos="fade-up"
                    data-aos-delay={skill.aosDelay}
                  >
                    <img src={skill.icon} alt="Skill" style={{ height: '100px' }} />
                    <h5>{skill.title}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="BG" />
    </section>
  );
};
