import React from 'react';
import './assets/styles/Footer.css'
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <div>

      <footer

        className="row justify-content-between align-items-center mt-auto p-3 border-top fs-1">

        <div
          className="col-md-12">
        </div>
        <div
          className="col-sm-12 col-md-3 text-center justify-content-around">
          <a
            className="text-info"
            href="mailto:mattholtmoore@gmail.com"><FaEnvelope />
          </a>
        </div>
        <div
          className="col-sm-12 col-md-3 text-center justify-content-around">
          <a
            className="text-info"
            href="https://github.com/mattholtmoore"
            target="_blank"><FaGithub />
          </a>
        </div>
        <div
          className="col-sm-12 col-md-3 text-center justify-content-around">
          <a
            className="text-info"
            href="https://www.linkedin.com/in/mattholtmoore/"
            target="_blank"><FaLinkedin />
          </a>
        </div>
        <div
          className="col-sm-12 col-md-3 text-center justify-content-around">
          <a
            className="text-info"
            href="tel:919-495-2272"><FaPhone />
          </a>
        </div>

      </footer >

    </div >
  );
}