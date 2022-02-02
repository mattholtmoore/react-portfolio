import React, { useState } from 'react';
import ScrollButton from '../components/Scroll';
import Navigation from './Navigation';
import About from './About/';
import Contact from './Contact';
import Projects from './Projects';
import Footer from './Footer';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}

      <ScrollButton />

      <Footer />
    </div>
  );
}
