import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-info text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Sk Sahir Box</h5>
            <p>Full Stack Developer</p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="social-icons">
              <a
                href="https://github.com/sahir999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sk-sahir-box-3b611a228/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/sahir_box"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
            <p className="mt-2">
              © {new Date().getFullYear()} Sk Sahir Box. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
