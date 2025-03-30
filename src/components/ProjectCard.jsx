import { Card, Badge, Button } from "react-bootstrap";
import "./ProjectCard.css"; // Import the CSS for styling

const ProjectCard = ({ project }) => {
  return (
    <Card className="project-card h-100 shadow-sm">
      <div className="project-image-container">
        <Card.Img
          variant="top"
          src={project.imageUrl}
          alt={project.title}
          className="project-image"
        />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold text-primary">
          {project.title}
        </Card.Title>
        <Card.Text className="text-muted">{project.description}</Card.Text>

        <div className="mb-3">
          {project.technologies.map((tech, index) => (
            <Badge key={index} bg="dark" className="me-1 mb-1 tech-badge">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-auto d-flex justify-content-between">
          <Button
            variant="primary"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="custom-button"
          >
            Live Demo
          </Button>
          <Button
            variant="outline-secondary"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="custom-button-outline"
          >
            GitHub
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
