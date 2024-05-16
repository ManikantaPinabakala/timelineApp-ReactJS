import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {timelineItemDetails} = props
  const {courseTitle, description, duration, tagsList} = timelineItemDetails

  return (
    <div className="card-container">
      <div className="text-top-container">
        <h1 className="card-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="tags-container">
        {tagsList.map(eachTag => (
          <p key={eachTag.id} className="tag">
            {eachTag.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
