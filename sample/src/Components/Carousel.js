import React, { useState } from "react";
import "./Carousel.css";
import {Link} from 'react-router-dom'

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };
 
  const toggleDetails = (index, event) => {
    event.preventDefault();
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };
  const cards = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Card Image 1",
      details: "Stylish shoes for women",
      title: "SHOES FOR HER",


    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1521330784804-5f69f8a17b1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhc2hpb24lMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
      alt: "Card Image 2",
      details: "The best outfit for your next show",
      title: "OUTFIT",
    },
    {
        imgSrc:
          "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbiUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
        alt: "Card Image 1",
        details: "Best bag out of choice",
        title: "LEATHER BAG",
      },
      {
        imgSrc:
          "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Card Image 2",
        title: "NIKE -993",
        details: "Mens running shoes for perfect fitness journey.",
      },
      {
        imgSrc:
          "https://images.unsplash.com/photo-1560155136-ca9fd0b25a4c?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Card Image 1",
        title: "HANDBAG",
        details: "Amazing hand crafted bag for daily use..",

      },
   
  ];

  const shiftedCards = [...cards.slice(currentIndex), ...cards.slice(0, currentIndex)];

  return (
    <div className="carousel-container">
     
      <section className="card-section">
        {shiftedCards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.imgSrc} className="card-img-top" alt={card.alt} />
            <div className="card-body">
            <h5 className="card-title">{card.title }</h5>
              <a
                href="#"
                className="btn btn-primary"
                onClick={(event) => toggleDetails(index,event)}
              >
                {expandedIndex === index ? "Show Less" : "Show More"}
              </a>
              {expandedIndex === index && <p>{card.details}</p>}
            </div>
          </div>
        ))}
      </section>
      <div className="btn-sec">
      <button onClick={handlePrevClick}>{"<"}</button>
      <button onClick={handleNextClick}>{">"}</button>
      <Link to='/all' className='links' >All</Link>

      </div>
     
    </div>
  );
}

export default Carousel;
