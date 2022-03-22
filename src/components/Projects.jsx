import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className={`mainRow`}>
      <span id="projectScroller"></span>
      <h2 className="sectionHeader">Projects</h2>
      <div>
        <ProjectCard
          url="splash.PNG"
          alttext="pop"
          title="My Portfolio Site"
          repository="https://github.com/YTyler/personal-site"
        >
          <p>
            The website you're on right now! Hosted through github pages. Built
            as a single page app using React and taking advantage of CSS
            modules. Used in addition to my resume which you can find in the
            sidebar to the left, along with my contact information and links to
            several of the technologies I use. I often use this space to test
            interesting new features and design choices that I find. I hope
            you're enjoying your time here, and thanks for coming by!
          </p>
        </ProjectCard>
        <ProjectCard
          url="MainBatchScreen.png"
          alttext="fighting mongooses"
          title="P3: Perfect Personnel Placement"
          repository="https://github.com/Perfect-Personnel-Placement/frontend"
        >
          <p>
            A serverless mobile app used to view client demands and batch output
            for the company. Designed for Revature Managers to place an order of
            associates to a demand from a client. I helped to build the AWS API,
            Lambda handlers and the Relational Database to manipulate and store
            demand and batch information. I also filled the role of git master;
            managing branch security/access as well as reviewing and approving
            pull requests from the other teams. Designed with a team of about 15
            developers.
          </p>
        </ProjectCard>
      </div>
    </section>
  );
}
