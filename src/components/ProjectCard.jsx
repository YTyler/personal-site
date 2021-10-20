import React from "react";

export default function ProjectCard(props) {
  return (
    <div>
      <img src={props.url} alt={props.alttext} />
      <h3>Project Title</h3>
      <p>
        <strong>Project Description</strong> Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quaerat placeat illo culpa? Et sint
        repellat, exercitationem aperiam quas illum pariatur inventore, magnam
        soluta enim consectetur sed non amet porro rerum!
      </p>
    </div>
  );
}
