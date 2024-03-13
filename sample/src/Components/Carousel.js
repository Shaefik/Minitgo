
import React, { useState } from "react";
import "/home/use/Desktop/new_project/sample/src/Style/Carousel.css";
import { Link } from "react-router-dom";

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
        "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
      alt: "Card Image 1",                                                                                                                      
      details: "Unisex shoes for outer wear",
      title: "UNISEX SHOE",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbiUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
      alt: "Card Image 1",                                                                                                                      
      details: "Running Shoes for fitness journey",
      title: "MENS SHOES",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhc2hpb24lMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
      alt: "Card Image 1",                                                                                                                      
      details: "UV protected sunglass for your eye protection",
      title: "UV SUNGLASS",
    },
    {
      imgSrc:
        "https://media.istockphoto.com/id/1083464924/photo/casual-fashion-clothes-and-accessory-set-on-white-background-jean-jacket-sneakers-sunglasses.webp?s=1024x1024&w=is&k=20&c=HA6D2wt4FLeBBPQuKRYsp6xhCnKoLpycnNAraBdkAe4=",
      alt: "Card Image 1",                                                                                                                      
      details: "Stylish outfit for men  ",
      title: "MENS JACK",
    },{
      imgSrc:
        "https://media.istockphoto.com/id/1249579132/photo/beauty-products-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=us2uPmX3veUiyB1qkVhoeEyP9FV1d-oyK2TRqexLhLw=",
      alt: "Card Image 1",                                                                                                                      
      details: "Cosmetics",
      title: "COSMETICS",
    },{
      imgSrc:
        "https://media.istockphoto.com/id/638385938/photo/mens-accessories-organized-on-table-in-knolling-arrangement.webp?b=1&s=170667a&w=0&k=20&c=zSWP2GqD5SctYEFkuR_bJcVUXrFauZaeOmomFcsRTc4=",
      alt: "Card Image 1",                                                                                                                      
      details: "Accessories for office use",
      title: "MENS FORMAL COMPO",
    },{
      imgSrc:
        "https://media.istockphoto.com/id/1080057124/photo/stylish-sunglasses-shot-using-pink-and-blue-abstract-colored-lighting-with-copy-space.webp?b=1&s=170667a&w=0&k=20&c=b69kYOwZ9t-K02Cq05eKRHW3uglXdfci-S_1uC08ygA=",
      alt: "Card Image 1",                                                                                                                      
      details: "Stylish sunglass for women",
      title: "SUNGLASS FOR STYLE",
    },
   
  ];

  const getCurrentCards = () => {
    let startIndex = currentIndex;
    let endIndex = startIndex + 6;
    if (endIndex > cards.length) {
      if (cards.length < 6) {
        startIndex = 0;
        endIndex = cards.length;
      } else {
        startIndex = cards.length - 6;
        endIndex = cards.length;
      }
    }
    return cards.slice(startIndex, endIndex);
  };

  return (
    <div className="carousel-container">
      <section className="card-section">
        {getCurrentCards().map((card, index) => (
          <div className="card" key={index}>
            <img src={card.imgSrc} className="card-img-top" alt={card.alt} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <a
                href="#"
               
                id="button-show-more"
                onClick={(event) => toggleDetails(index, event)}
              >
                {expandedIndex === index ? "Show Less" : "Show More"}
              </a>
              {expandedIndex === index && <p>{card.details}</p>}
            </div>
          </div>
        ))}
      </section>
      <div className="btn-sec">
        <button onClick={handlePrevClick} className="arrow-button">
          {"<"}
        </button>
        <button onClick={handleNextClick} className="arrow-button">
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Carousel;
