import React from 'react';
import './assets/styles/Hero.css';

function Nav({ currentPage, handlePageChange }) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand active m-3 fs-3 text-info">PORTFOLIO</div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="nav color fs-5 m-1 p-2">
              <li className="nav-item active">
                <a
                  href="#about"
                  onClick={() => handlePageChange('About')}

                  className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                  About
                </a>
              </li>
              <li className="nav-item active">
                <a
                  href="#projects"
                  onClick={() => handlePageChange('Projects')}

                  className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item active">
                <a
                  href="#contact"
                  onClick={() => handlePageChange('Contact')}
                  className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                  Contact
                </a>
              </li>
              <li className="nav-item active">
                <a
                  href="https://drive.google.com/file/d/1nXVcg15h1yAiVHt2IB30w5wdNqW25o7Z/view?usp=sharing" target="_blank" tabIndex="-1" aria-disabled="true"
                  onClick={() => handlePageChange('Resume')}
                  className="nav-link"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="position-relative overflow-hidden p-3 p-md-5 text-start" id="hero">
        <div className="col-md-5 p-lg-5">
          <h1 className="text-light text-left">Matt Holt Moore</h1>
        </div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
    </header>
  );
}

export default Nav;
