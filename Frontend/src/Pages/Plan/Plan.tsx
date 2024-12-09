import React, { useState } from 'react';
import './Plan.css'; 

export default function Plan() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="pageContainer">
      <header className="header">
        <h1 className="heading">Plan Your Dream Trip</h1>
        <p className="subheading">Create unforgettable memories with a perfect travel plan.</p>
      </header>

      <section className="section">
        <h2 className="sectionTitle">Destination</h2>
        <div className="contentWrapper">
          <img
            src="https://media.istockphoto.com/id/1363398400/photo/woman-traveler-in-europa-alhambra-in-spain.jpg?s=612x612&w=0&k=20&c=Z14eQ_IJywp7COkEQvAhxhiOagmqupQaO_RuRg5kEzM="
            alt="Destination"
            className="image"
          />
          <div className="textContent">
            <p className="paragraph">
              Discover breathtaking places that match your travel desires. Whether it's a tropical paradise or an urban adventure, our recommendations will guide you to the perfect destination.
            </p>
            <button
              className={isHovered ? "buttonHover" : "button"}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Explore Destinations
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Travel Dates</h2>
        <div className="contentWrapper">
          <img
            src="https://www.redpixels.in/wp-content/uploads/2024/05/A3-Wall-Calendar_900x600px.jpg"
            alt="Calendar"
            className="image"
          />
          <div className="textContent">
            <p className="paragraph">
              Pick dates that work for you, and we’ll help you plan the best activities based on the season and events happening at your destination.
            </p>
            <button
              className={isHovered ? "buttonHover" : "button"}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Set Dates
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Activities</h2>
        <div className="contentWrapper">
          <img
            src="https://www.scouting.org/wp-content/uploads/elementor/thumbs/Cycling_MB-overview-qjjk7p7hna8gu2g4gwa37lt659yld7x6cqjjjfvq34.jpg"
            alt="Activities"
            className="image"
          />
          <div className="textContent">
            <p className="paragraph">
              From cultural tours to thrilling adventures, choose activities that make your trip truly special. Filter by your preferences and budget.
            </p>
            <button
              className={isHovered ? "buttonHover" : "button"}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Browse Activities
            </button>
          </div>
        </div>
      </section>

      <section className="inspirationSection">
        <h2 className="sectionTitle">Get Inspired</h2>
        <p className="inspirationText">"The world is a book, and those who do not travel read only one page."</p>
      </section>
    </div>
  );
}
