"use client";

import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Card,
} from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    image: null,
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null },
    });

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key]) data.append(key, formData[key]);
      });

      await axios.post("http://localhost:5000/api/contact", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Message sent successfully!" },
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        image: null,
      });
      document.getElementById("formFile").value = "";
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: {
          error: true,
          msg: "An error occurred. Please try again later.",
        },
      });
    }
  };

  return (
    <Container className="py-5 contact-container">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card className="shadow-lg p-4 border-0 rounded">
            <h2 className="text-center mb-4 text-primary">Get In Touch</h2>
            {status.info.msg && (
              <Alert
                variant={status.info.error ? "danger" : "success"}
                dismissible
              >
                {status.info.msg}
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Group controlId="formName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Enter subject"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter your message"
                  rows={5}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formFile">
                <Form.Label>Attach Image (Optional)</Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="w-100 py-2"
                disabled={status.submitting}
              >
                {status.submitting ? "Sending..." : "Send Message"}
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5 text-center">
        <Col md={4}>
          <Card className="shadow-sm border-0 p-4">
            <i className="fas fa-map-marker-alt fa-2x text-primary mb-3"></i>
            <h5>Location</h5>
            <p>Kolkata, West Bengal</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm border-0 p-4">
            <i className="fas fa-envelope fa-2x text-primary mb-3"></i>
            <h5>Email</h5>
            <p>sksahirbox4@gmail.com</p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm border-0 p-4">
            <i className="fas fa-phone fa-2x text-primary mb-3"></i>
            <h5>Phone</h5>
            <p>+91 9800179809</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
