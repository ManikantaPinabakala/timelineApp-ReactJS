import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {timelineItemDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = timelineItemDetails

  return (
    <div className="card-container">
      <img src={imageUrl} alt="project" className="project-image" />
      <div>
        <div className="text-top-container">
          <h1 className="card-title">{projectTitle}</h1>
          <div className="duration-container">
            <AiFillCalendar />
            <p className="duration">{duration}</p>
          </div>
        </div>
        <p className="description">{description}</p>
        <a href={projectUrl} className="visit-link">
          Visit
        </a>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
