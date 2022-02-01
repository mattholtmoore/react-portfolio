import React, { useState } from 'react';
import ScrollButton from '../components/Scroll/ScrollButton';
import Navigation from './Navigation/Navigation';
import About from './About/About';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';

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
