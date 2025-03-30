"use client";

import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/projects");
        setProjects(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch projects. Please try again later.");
        setLoading(false);
        console.error("Error fetching projects:", err);
      }
    };

    fetchProjects();
  }, []);

  // Fallback data in case API is not available
  useEffect(() => {
    if (error) {
      setProjects([
        {
          _id: "1",
          title: "ThinkFast",
          description:
            "Developed an Online Exam Portal using React, TypeScript, and API integration.Allows users to take tests in various categories like Science, Technology, Computers, and Video Games and more. Integrated APIs to fetch and display questions dynamically.Implemented a scorecard at the end to show results and determine if the user passed or failed.",
          imageUrl: "/images/project1.png",
          technologies: ["React", "Javascript", "TypeScript", "API"],
          category: "frontend",
          liveUrl: "https://think-fast-psi.vercel.app/",
          githubUrl: "https://github.com/sahir999/ThinkFast",
        },
      ]);
      setLoading(false);
    }
  }, [error]);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading projects...</p>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h2 className="text-center mb-5">My Projects</h2>

      <div className="text-center mb-4">
        <Button
          variant={filter === "all" ? "primary" : "outline-primary"}
          className="mx-2 mb-2"
          onClick={() => setFilter("all")}
        >
          All Projects
        </Button>
        <Button
          variant={filter === "frontend" ? "primary" : "outline-primary"}
          className="mx-2 mb-2"
          onClick={() => setFilter("frontend")}
        >
          Frontend
        </Button>
        <Button
          variant={filter === "backend" ? "primary" : "outline-primary"}
          className="mx-2 mb-2"
          onClick={() => setFilter("backend")}
        >
          Backend
        </Button>
        <Button
          variant={filter === "fullstack" ? "primary" : "outline-primary"}
          className="mx-2 mb-2"
          onClick={() => setFilter("fullstack")}
        >
          Full Stack
        </Button>
      </div>

      <Row>
        {filteredProjects.map((project) => (
          <Col key={project._id} md={6} lg={4}>
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
