import React from 'react';
import './assets/styles/Projects.css'

export default function Projects() {
  return (
    <div className="container py-4 card shadow-lg p-3 mb-5" id="projects">
      <div className="border-bottom pb-2 mb-3">
        <h3 className="title fs-4 text-muted">Projects</h3>
      </div>

      <div className="text-light rounded-3 text-center p-5 mb-3" id="one">
        <div className="container-fluid py-5">
          <h1 className="fw-bold">Weather DashBored</h1>
          <a className="btn btn-dark btn-md mb-2 border border-info"
            href="https://jacobotaylor.github.io/band-weather-app/"
            target="_blank">Check The Weather</a>
          <br />
          <a className="btn btn-dark btn-md border border-info"
            href="https://github.com/jacobotaylor/band-weather-app"
            target="_blank">Go To Github</a>
        </div>
      </div>

      <div className="row align-items-md-stretch">
        <div className="col-md-6 mb-2">
          <div className="text-light rounded-3 text-center h-100 p-5" id="two">
            <h2 className="fw-bold">Code Quiz Challenge</h2>
            <a className="btn btn-dark btn-md mb-2 border border-info"
              href="https://mattholtmoore.github.io/code-quiz-project/"
              target="_blank">Take A Quiz</a>
            <br />
            <a className="btn btn-dark btn-md border border-info"
              href="https://github.com/mattholtmoore/code-quiz-project"
              target="_blank">Go To Github</a>
          </div>
        </div>

        <div className="col-md-6 mb-2">
          <div className="text-light rounded-3 text-center h-100 p-5" id="three">
            <h2 className="fw-bold">Work Day Scheduler</h2>
            <a className="btn btn-dark btn-md mb-2 border border-info"
              href="https://mattholtmoore.github.io/day-planner-project/"
              target="_blank">Plan Your Work Day</a>
            <br />
            <a className="btn btn-dark btn-md border border-info"
              href="https://github.com/mattholtmoore/day-planner-project"
              target="_blank">Go To Github</a>
          </div>
        </div>
      </div>
    </div >
  );
}
