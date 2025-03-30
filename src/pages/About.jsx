import { Container, Row, Col, ProgressBar, Card } from "react-bootstrap";
import SkillBadge from "../components/SkillBadge";

const About = () => {
  const skills = [
    { name: "JavaScript", level: "Expert" },
    { name: "React.js", level: "Expert" },
    { name: "Node.js", level: "Beginner" },
    { name: "Express.js", level: "Beginner" },
    { name: "MongoDB", level: "Beginner" },
    { name: "HTML5", level: "Intermediate" },
    { name: "CSS3", level: "Intermediate" },
    { name: "Bootstrap", level: "Expert" },
    { name: "TypeScript", level: "Expert" },
  ];

  const education = [
    {
      degree:
        "Bachelor Of Engineering In Electronics and Communication Engineering",
      institution: "University Institute Of Engineering",
      year: "2020 - 2024",
      description: "Graduated with honours, CGPA 8.26/10",
    },
  ];

  const experience = [
    {
      position: "React Frontend Development",
      company: "Ejobindia",
      year: "7 months",
      description:
        "Worked on a team to develop a responsive web application using React.js and Bootstrap.",
    },
  ];

  return (
    <Container className="py-5">
      <Row className="mb-5 text-center">
        <Col lg={8} className="mx-auto bg-light p-4 rounded shadow-sm">
          <h2 className="mb-4 text-primary fw-bold">About Me</h2>
          <p className="lead text-dark">
            I'm <span className="fw-bold text-primary">Sk Sahir Box</span>, a
            Full Stack Developer with a passion for creating elegant solutions.
          </p>
          <p className="text-muted fs-5">
            With hands-on experience in web development, I have worked on
            various projects that have strengthened my skills in building
            responsive and efficient applications. I am proficient in modern
            technologies and passionate about writing clean, maintainable code.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2 className="mb-4 text-primary fw-bold text-center">Skills</h2>
          <div className="d-flex flex-wrap justify-content-center mb-4 gap-2">
            {skills.map((skill, index) => (
              <SkillBadge key={index} skill={skill.name} level={skill.level} />
            ))}
          </div>

          <Row>
            <Col md={6} className="mb-4">
              <h5 className="fw-bold">Frontend Development</h5>
              <SkillProgress title="JavaScript/React" level={95} />
              <SkillProgress title="HTML/CSS" level={90} />
              <SkillProgress title="Responsive Design" level={85} />
            </Col>
            <Col md={6} className="mb-4">
              <h5 className="fw-bold">Backend Development</h5>
              <SkillProgress
                title="Node.js/Express"
                level={80}
                variant="success"
              />
              <SkillProgress
                title="MongoDB/Mongoose"
                level={80}
                variant="success"
              />
              <SkillProgress
                title="RESTful APIs"
                level={85}
                variant="success"
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6} className="mb-4 mb-md-0">
          <h2 className="mb-4 text-primary fw-bold text-center">Education</h2>
          {education.map((edu, index) => (
            <Card key={index} className="shadow-sm border-0 mb-3 p-3">
              <h5 className="fw-bold">{edu.degree}</h5>
              <h6 className="text-muted">{edu.institution}</h6>
              <p className="text-muted">{edu.year}</p>
              <p>{edu.description}</p>
            </Card>
          ))}
        </Col>
        <Col md={6}>
          <h2 className="mb-4 text-primary fw-bold text-center">Experience</h2>
          {experience.map((exp, index) => (
            <Card key={index} className="shadow-sm border-0 mb-3 p-3">
              <h5 className="fw-bold">{exp.position}</h5>
              <h6 className="text-muted">{exp.company}</h6>
              <p className="text-muted">{exp.year}</p>
              <p>{exp.description}</p>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

const SkillProgress = ({ title, level, variant = "primary" }) => (
  <div className="mb-3">
    <div className="d-flex justify-content-between">
      <span className="fw-semibold">{title}</span>
      <span className="text-muted">{level}%</span>
    </div>
    <ProgressBar now={level} variant={variant} className="mb-2" />
  </div>
);

export default About;
