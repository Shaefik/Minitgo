import React, { useState } from "react";
import '/home/use/Desktop/new_project/sample/src/Style/Feed.css'


function Feed() {
    const [showDetails, setShowDetails] = useState({
        0: false, 
        1: false, 
        2: false, 
    });

    const toggleDetails = (index) => {
        setShowDetails(prevState => ({
            ...prevState,
            [index]: !prevState[index] 
        }));
    };

    return (
        <div className="feed-structure">
            <div className="section-left">
                <div className="image-container">
                    <img src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXMlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" alt="Lifestyle" />
                </div>
                <div className="details">
                    <p>Lifestyle</p>
                    <h3>NIKE LIFESTYLE SHOES</h3>
                    <button className="btn" onClick={() => toggleDetails(0)}>
                        {showDetails[0] ? "Show Less" : "Show More"}
                    </button>
                    {showDetails[0] && (
                        <div>
                            <p>Stylish and comfortable lifestyle shoes for everyday wear.</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="section-right">
                <div>
                    <img src="https://plus.unsplash.com/premium_photo-1664297521832-0ea5ea948a67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXMlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" alt="Fashion" />
                    <p>Fashion</p>
                    <h3>TRENDY FASHION ACCESSORIES</h3>
                    <button className="btn" onClick={() => toggleDetails(1)}>
                        {showDetails[1] ? "Show Less" : "Show More"}
                    </button>
                    {showDetails[1] && (
                        <div>
                            <p>Discover the latest trends in fashion accessories.</p>
                        </div>
                    )}
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/2ac672c4-1fcb-4b81-b5fb-31cc0a3e9160._CR0,0,1200,628_SX430_QL70_.jpg" alt="Electronics" />
                    <p>Outfits</p>
                    <h3>COMFORT OUTFITS</h3>
                    <button className="btn" onClick={() => toggleDetails(2)}>
                        {showDetails[2] ? "Show Less" : "Show More"}
                    </button>
                    {showDetails[2] && (
                        <div>
                            <p>Immerse yourself in your favorite outfits with these premium brands.</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="section-rightt">
                <div>
                    <h3>Discover the most stylish outfits and accessories to elevate your wardrobe this season. From chic dresses to trendy accessories, stay ahead of the fashion curve with our curated collection. Whether you're looking for casual everyday wear or glamorous evening attire, we have everything you need to express your unique style. Shop now and unleash your inner fashionista!</h3>
                </div>
            </div>
            
        </div>
    );
}

export default Feed;
