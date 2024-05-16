import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const getTimeLineItem = timelineItem => {
    if (timelineItem.categoryId === 'PROJECT') {
      return (
        <ProjectTimelineCard
          key={timelineItem.id}
          timelineItemDetails={timelineItem}
        />
      )
    }
    return (
      <CourseTimelineCard
        key={timelineItem.id}
        timelineItemDetails={timelineItem}
      />
    )
  }

  return (
    <div className="timeline-view-container">
      <h1 className="main-heading">
        MY JOURNEY OF <span>CCBP 4.0</span>
      </h1>
      <Chrono
        theme={{secondary: 'white'}}
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList}
      >
        {timelineItemsList.map(eachTimelineItem =>
          getTimeLineItem(eachTimelineItem),
        )}
      </Chrono>
    </div>
  )
}

export default TimelineView
