import { Badge } from "react-bootstrap"

const SkillBadge = ({ skill, level }) => {
  // Determine badge color based on skill level
  const getBadgeColor = () => {
    switch (level) {
      case "Expert":
        return "primary"
      case "Advanced":
        return "success"
      case "Intermediate":
        return "info"
      case "Beginner":
        return "secondary"
      default:
        return "light"
    }
  }

  return (
    <Badge bg={getBadgeColor()} className="skill-badge">
      {skill}
    </Badge>
  )
}

export default SkillBadge

