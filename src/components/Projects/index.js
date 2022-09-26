import {Component} from 'react'
import Loader from 'react-loader-spinner'
import ProjectCard from '../ProjectCard'
import './index.css'

import {
  Container,
  NavBar,
  NavBarImage,
  ProjectsContainer,
  SelectInput,
  Option,
  ProjectsList,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './styledComponents'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Projects extends Component {
  state = {
    activeCategory: categoriesList[0].id,
    projectsList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getProjectsList()
  }

  getProjectsList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const {activeCategory} = this.state

    const projectsUrl = `https://apis.ccbp.in/ps/projects?category=${activeCategory}`

    console.log(projectsUrl)

    const options = {
      method: 'GET',
    }

    const response = await fetch(projectsUrl, options)

    if (response.ok) {
      const data = await response.json()
      console.log(data)

      const updatedData = data.projects.map(eachProject => ({
        id: eachProject.id,
        imageUrl: eachProject.image_url,
        name: eachProject.name,
      }))

      this.setState({
        projectsList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onChangeCategory = event => {
    this.setState(
      {
        activeCategory: event.target.value,
      },
      this.getProjectsList,
    )
  }

  onClickRetryButton = () => {
    this.getProjectsList()
  }

  renderProjectsCardList = () => {
    const {projectsList} = this.state

    return (
      <ProjectsList>
        {projectsList.map(eachProject => (
          <ProjectCard key={eachProject.id} projectDetails={eachProject} />
        ))}
      </ProjectsList>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="#328af2" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <FailureViewContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>
        We cannot seem to find the page you are looking for.
      </FailureDescription>
      <RetryButton type="button" onClick={this.onClickRetryButton}>
        Retry
      </RetryButton>
    </FailureViewContainer>
  )

  renderPageDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProjectsCardList()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {activeCategory} = this.state
    return (
      <Container>
        <NavBar>
          <NavBarImage
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
            alt="website logo"
          />
        </NavBar>
        <ProjectsContainer>
          <SelectInput value={activeCategory} onChange={this.onChangeCategory}>
            {categoriesList.map(eachCategory => (
              <Option key={eachCategory.id} value={eachCategory.id}>
                {eachCategory.displayText}
              </Option>
            ))}
          </SelectInput>
          {this.renderPageDetails()}
        </ProjectsContainer>
      </Container>
    )
  }
}

export default Projects
