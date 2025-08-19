import React from 'react';
import AboutHeader from './AboutHeader';
import ApplicationDetails from './ApplicationDetails';
import Resources from './Resources';
import Acknowledgements from './Acknowledgements';
import Team from './Team';
import Changelog from './Changelog';
import './AboutPage.css';

const AboutPage = () => (
  <div className="about-page">
    <div className="about-header-container">
      <AboutHeader />
    </div>
    <div className="about-content">
      <div className="about-left-column">
        <ApplicationDetails />
        <Resources />
        <Acknowledgements />
      </div>
      <div className="about-right-column">
        <Team />
        <Changelog />
      </div>
    </div>
  </div>
);

export default AboutPage;