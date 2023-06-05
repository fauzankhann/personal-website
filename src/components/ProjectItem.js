import React from 'react'

function ProjectItem({ image, name, skill }) {
  return (
    <div className='projectItem'>
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
      <p> {skill} </p>
    </div>
  );
}

export default ProjectItem