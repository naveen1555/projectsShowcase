import {
  ProjectCardContainer,
  ProjectCardImage,
  ProjectCardName,
} from './styledComponents'

const ProjectCard = props => {
  const {projectDetails} = props
  const {name, imageUrl} = projectDetails

  return (
    <ProjectCardContainer>
      <ProjectCardImage src={imageUrl} alt={name} />
      <ProjectCardName>{name}</ProjectCardName>
    </ProjectCardContainer>
  )
}

export default ProjectCard
