import React from 'react';
import './assets/styles/Footer.css'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className="row justify-content-between align-items-center mt-auto p-3 border-top">

        <div className="col-md-12"></div>

        <div className="col-sm-12 col-md-3 text-center justify-content-around">
          <a
            className="text-info"
            href="tel:919-495-2272">919-495-2272
          </a>
        </div>
        <div className="col-sm-12 col-md-3 text-center justify-content-around">
          <a
            className="text-info"
            href="mailto:mattholtmoore@gmail.com">mattholtmoore@gmail.com
          </a>
        </div>
        <div className="col-sm-12 col-md-3 text-center justify-content-around">
          <a
            className="text-info"
            href="https://github.com/mattholtmoore"
            target="_blank">GitHub <FaGithub />
          </a>
        </div>
        <div className="col-sm-12 col-md-3 text-center justify-content-around">
          <a
            className="text-info"
            href="https://www.linkedin.com/in/mattholtmoore/"
            target="_blank">LinkedIn <FaLinkedin />
          </a>
        </div>

      </footer >

    </div >
  );
}