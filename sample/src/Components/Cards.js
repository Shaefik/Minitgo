import React from "react";
import './Cards.css'

function Cards(){
    const images = [
        {img : "https://media.istockphoto.com/id/1362495625/photo/augmented-reality-shopping-with-garment-visualization-simulation-technologies.webp?b=1&s=170667a&w=0&k=20&c=Y88csB0Zyj9X2QcCUVq_KGtaK-hbQN_WwjdaNjSgUQ8="},
        {img :"https://media.istockphoto.com/id/1337214807/photo/collage-with-female-and-male-legs-in-colored-sneakers-trainers-isolated-over-bright.webp?b=1&s=170667a&w=0&k=20&c=sucmCIl49tAr54Fz1BEg_P49Hzj2qmWfFGWq71YDAS8="},
        {img :"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"},
        {img : "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"}
    ]
    return(
        <div className="sec">
            <section className="cards">
                {images.map((im, index)=>(
                    <img src={im.img} key={index} alt={`Image ${index}`} />
                ))}
            </section>
        </div>
    )
}
export default Cards;
