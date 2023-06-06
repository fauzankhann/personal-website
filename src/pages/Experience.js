import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import School from '@mui/icons-material/School';
import Work from '@mui/icons-material/Work';
import '../styles/Experience.css'

function Experience() {
  return (

    <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement 
        className="vertical-timeline-element--education" 
        date='2018 - 2022' 
        iconStyle={{background: '#3d497a', color: "#fff" }}
        icon={<School/>}
        >
          <h3 className='vertical-timeline-element-title'> 
          St. Francis Xavier, Milton, ON
          </h3>

          <h4 className='vertical-timeline-element-subtitle'>
            Honor Roll
          </h4>

          <p>High School Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--education" 
        date='2022 - Present' 
        iconStyle={{background: '#3d497a', color: "#fff" }}
        icon={<School/>}
        >
          <h3 className='vertical-timeline-element-title'> 
          University of Toronto, Mississauga, ON
          </h3>

          <h4 className='vertical-timeline-element-subtitle'>
          Honours Bachelors of Science
          </h4>

          <p>Computer Science, Minors in Mathematics</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--education" 
        date='August, 2021' 
        iconStyle={{background: '#3d497a', color: "#fff" }}
        icon={<Work/>}
        >
          <h3 className='vertical-timeline-element-title'> 
          Technician | BMO Harris Bank
          </h3>

          <h4 className='vertical-timeline-element-subtitle'>
          Downtown Toronto
          </h4>

          <p>Install branch computers and troubleshoot problems.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--education" 
        date='May 2023 - Sept 2023' 
        iconStyle={{background: '#3d497a', color: "#fff" }}
        icon={<Work/>}
        >
          <h3 className='vertical-timeline-element-title'> 
          Data Science Intern | AKHNY Solutions Inc.
          </h3>

          <h4 className='vertical-timeline-element-subtitle'>
          Mississauga, ON
          </h4>

          <p>Developed a full-stack platform application</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <h3 className='bottom'><br/>Many more accomplishments underway...</h3>
    </div>
  )
}

export default Experience