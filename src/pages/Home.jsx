import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./AnimatedText.css"; // Import the animation CSS

const Home = () => {
  const text = "Sk Sahir Box"; // Name to animate

  return (
    <>
      <section className="hero-section text-center bg-info">
        <Container>
          {/* Animated Name */}
          <h1 className="display-4 fw-bold animated-text">
            {text.split("").map((char, index) => (
              <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <h2 className="mb-4">Full Stack Developer</h2>
          <p className="lead mb-5">
            Building beautiful, functional, and user-friendly web applications
          </p>
          <div>
            <Button
              as={Link}
              to="/projects"
              variant="primary"
              size="lg"
              className="me-3"
            >
              View My Work
            </Button>
            <Button as={Link} to="/contact" variant="outline-light" size="lg">
              Contact Me
            </Button>
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="mb-4">About Me</h2>
              <p className="lead">
                I'm a passionate Full Stack Developer with expertise in modern
                web technologies.
              </p>
              <p>
                With hands-on experience in web development, I have worked on
                various projects that have strengthened my skills in building
                responsive and efficient applications. I am proficient in modern
                technologies and passionate about writing clean, maintainable
                code. Eager to apply my expertise in a professional setting, I
                am constantly learning and staying up to date with the latest
                advancements in web development.
              </p>
              <Button as={Link} to="/about" variant="primary" className="mt-3">
                Learn More <FaArrowRight className="ms-2" />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-padding bg-light">
        <Container>
          <h2 className="text-center mb-5">What I Do</h2>
          <Row>
            <Col md={4} className="mb-4">
              <div className="card h-100 text-center p-4">
                <div className="mb-3">
                  <i className="fas fa-code fa-2x text-primary"></i>
                </div>
                <h3>Web Development</h3>
                <p>
                  I specialize in creating responsive and dynamic websites using
                  modern frameworks and technologies. By leveraging the latest
                  tools and best practices, I develop user-friendly, scalable,
                  and high-performance web applications. My focus is on writing
                  clean, maintainable code while ensuring seamless functionality
                  across different devices and screen sizes.
                </p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="card h-100 text-center p-4">
                <div className="mb-3">
                  <i className="fas fa-mobile-alt fa-2x text-primary"></i>
                </div>
                <h3>App Development</h3>
                <p>
                  I am passionate about building high-quality mobile
                  applications using React Native and its core components. With
                  a strong understanding of React Native’s architecture, I
                  leverage the power of StyleSheet for optimized styling,
                  ensuring a smooth and responsive user experience across
                  different devices.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
