import { PortfolioItemT } from "../../Types/PortfolioItemT"

interface ProjectInfoProps {
  project: PortfolioItemT
}

export default function ProjectInfo({project}: ProjectInfoProps) {
  return (
    <div>{project.name}</div>
  )
}
