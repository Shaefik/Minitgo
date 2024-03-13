// import React, { useState } from "react";
// import '/home/use/Desktop/new_project/sample/src/Style/Carousel.css'
// import { Link } from 'react-router-dom'
// import data from '/home/use/Desktop/new_project/sample/src/Components/data.js'

// function Cards() {
//   const [expandedIndex, setExpandedIndex] = useState(-1);

//   const toggleDetails = (index) => {
//     setExpandedIndex(prevIndex => prevIndex === index ? -1 : index);
//   };

//   return (
//     <div>
//       <section className="card-section">
//         {data.map((card, index) => (
//           <div className="card" key={index}>
//             <img src={card.imgSrc} className="card-img-top" alt={card.alt} />
//             <div className="card-body">
//               <h5 className="card-title">{card.title}</h5>
//               <button className="btn btn-primary" onClick={() => toggleDetails(index)}>
//                 {expandedIndex === index ? "Hide Details" : "View Detail"}
//               </button>
//               {expandedIndex === index && <p>{card.details}</p>}
//             </div>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }

// export default Cards;
import React, { useState } from "react";
import '/home/use/Desktop/new_project/sample/src/Style/Cards.css'
import { Link } from 'react-router-dom'
import data from '/home/use/Desktop/new_project/sample/src/Components/data.js'

function Cards() {
  const [startIndex, setStartIndex] = useState(0); 

  const handleNext = () => {
    setStartIndex(prevIndex => Math.min(prevIndex + 4, data.length - 4)); 
  };

  const handlePrev = () => {
    setStartIndex(prevIndex => Math.max(prevIndex - 4, 0)); 
  };

  return (
    <div className="card-div">
              <button className="btn-left" onClick={handlePrev} disabled={startIndex === 0}> {"<"}</button>

      <div className="button-section">
      </div>
      <section className="card-section">
        {data.slice(startIndex, startIndex + 4).map((card, index) => (
          <div className="card" key={index}>
            <img src={card.imgSrc} className="card-img-top" alt={card.alt} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p>{card.details}</p>
            </div>
          </div>
        ))}
      </section>
      <div className="button-section">
        <button className="btn-right" onClick={handleNext} disabled={startIndex + 4 >= data.length}>  {">"}</button>
      </div>
    </div>
  );
}

export default Cards;
