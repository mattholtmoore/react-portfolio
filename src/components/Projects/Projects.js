import React from 'react';
import './assets/styles/Projects.css'

export default function Projects() {
  return (
    <div className="container py-4 card shadow-lg p-3 mb-5 projects" id="projects">
      <div className="border-bottom pb-2 mb-3">
        <h3 className="title fs-4 text-muted">My Projects</h3>
      </div>

      <div className="text-light rounded-3 text-center p-5 mb-3" id="one">
        <div className="container-fluid py-5">
          <h2 className="fs-1 fw-bold m-5">Presidential Gallery</h2>
          <a
            className="btn btn-info btn-lg mb-2 border border-dark fw-bold"
            href="https://floating-chamber-62136.herokuapp.com/"
            target="_blank">Merica'</a>
          <br />
          <a
            className="btn btn-dark btn-lg border border-info fw-bold"
            href="https://github.com/mattholtmoore/presendential-gallery"
            target="_blank">Go To Github</a>
        </div>
      </div>

      <div className="row align-items-md-stretch">
        <div className="col-md-6 mb-2">
          <div className="text-light rounded-3 text-center h-100 p-5" id="two">
            <h2 className="fw-bold mb-5">Weather DashBored</h2>
            <a
              className="btn btn-info btn-md mb-2 border border-dark fw-bold"
              href="https://jacobotaylor.github.io/band-weather-app/"
              target="_blank">Check The Weather</a>
            <br />
            <a className="btn btn-dark btn-md border border-info fw-bold"
              href="https://github.com/jacobotaylor/band-weather-app"
              target="_blank">Go To Github</a>
          </div>
        </div>

        <div className="col-md-6 mb-2">
          <div className="text-light rounded-3 text-center h-100 p-5" id="three">
            <h2
              className="fw-bold mb-5">
              Work Day Scheduler
            </h2>
            <a
              className="btn btn-info btn-md mb-2 border border-dark fw-bold"
              href="https://mattholtmoore.github.io/day-planner-project/"
              target="_blank">Plan Your Work Day</a>
            <br />
            <a
              className="btn btn-dark btn-md border border-info fw-bold"
              href="https://github.com/mattholtmoore/day-planner-project"
              target="_blank">Go To Github</a>
          </div>
        </div>
      </div>

      <div className="row align-items-md-stretch">
        <div className="col-md-6 mb-2">
          <div className="text-light rounded-3 text-center h-100 p-5" id="four">
            <h2
              className="fw-bold mb-5">
              Code Quiz Challenge
            </h2>
            <a
              className="btn btn-info btn-md mb-2 border border-dark fw-bold"
              href="https://mattholtmoore.github.io/code-quiz-project/"
              target="_blank">Take A Quiz</a>
            <br />
            <a className="btn btn-dark btn-md border border-info fw-bold"
              href="https://github.com/mattholtmoore/code-quiz-project"
              target="_blank">Go To Github</a>
          </div>
        </div>

        <div className="col-md-6 mb-2">
          <div className="text-light rounded-3 text-center h-100 p-5" id="five">
            <h2
              className="fw-bold mb-5">
              Password Generator
            </h2>
            <a
              className="btn btn-info btn-md mb-2 border border-dark fw-bold"
              href="https://mattholtmoore.github.io/password-generator-project/"
              target="_blank">Keep It Secret</a>
            <br />
            <a
              className="btn btn-dark btn-md border border-info fw-bold"
              href="https://github.com/mattholtmoore/password-generator-project"
              target="_blank">Go To Github</a>
          </div>
        </div>
      </div>

      <div className="text-light rounded-3 text-center p-5 mt-3" id="six">
        <div className="container-fluid py-5">
          <h2
            className="fs-1 fw-bold m-5">
            Team Profile Generator
          </h2>
          <a
            className="btn btn-info btn- mb-2 border border-dark fw-bold"
            href="https://mattholtmoore.github.io/team-profile-generator-project/"
            target="_blank">Build A Team</a>
          <br />
          <a
            className="btn btn-dark btn-md border border-info fw-bold"
            href="https://github.com/mattholtmoore/team-profile-generator-project"
            target="_blank">Go To Github</a>
        </div>
      </div>

    </div >
  );
}
