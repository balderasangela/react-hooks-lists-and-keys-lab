import React from "react";

function ProjectItem({ name, about, technologies }) {
  let techSpans = technologies.map((technology)=> <span key = {technology}>{technology}</span>)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techSpans}
      </div>
    </div>
  );
}

export default ProjectItem;
