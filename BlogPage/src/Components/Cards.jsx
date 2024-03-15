import React, { useState } from "react";
import { Link } from "react-router-dom";

function Cards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const [startIndex, setStartIndex] = useState(0); 

  const handleNext = () => {
    setStartIndex(prevIndex => Math.min(prevIndex + 5, data.length - 5)); 
  };

  const handlePrev = () => {
    setStartIndex(prevIndex => Math.max(prevIndex - 5, 0)); 
  };



  const data = [

    
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
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhc2hpb24lMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
      alt: "Card Image 1",                                                                                                                      
      details: "UV protected sunglass for your eye protection",
      title: "UV SUNGLASS",
    },{
      imgSrc:
        "https://media.istockphoto.com/id/1080057124/photo/stylish-sunglasses-shot-using-pink-and-blue-abstract-colored-lighting-with-copy-space.webp?b=1&s=170667a&w=0&k=20&c=b69kYOwZ9t-K02Cq05eKRHW3uglXdfci-S_1uC08ygA=",
      alt: "Card Image 1",                                                                                                                      
      details: "Stylish sunglass for women",
      title: "SUNGLASS FOR STYLE",
    },
   
  ];

  

  return (
    <div style={{ position: 'relative', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <button class = 'ml-5' onClick={handlePrev} disabled={startIndex === 0} style={{ position: 'absolute', left: '0' }}> {"<"}</button>

  <section style={{ width: '90%', display: 'flex', flexDirection: 'row', marginLeft: '100px' }} className="pl-5">
    {data.slice(startIndex, startIndex + 5).map((card, index) => (
      <div className="card" key={index} style={{ marginRight: '1rem', width: '180px' }}>
        <img src={card.imgSrc} className='mt-2 ml-2' alt={card.alt} style={{ height: '150px', width: '150px' }} />
        <div className="card-body">
          <h5 className="card-title">{card.title}</h5>
        
          <hr></hr>
          <span>{card.details}</span>
        </div>
      </div>
    ))}
  </section>
  
  <button class='mr-5' onClick={handleNext} disabled={startIndex + 4 >= data.length} style={{ position: 'absolute', right: '0' }}> {">"}</button>
</div>
  )}
  
export default Cards;





