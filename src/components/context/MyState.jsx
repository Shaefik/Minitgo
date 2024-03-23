import React, { useState, useEffect } from 'react'
import myContext from '/home/use/Desktop/Clone/MGo/MGo/src/components/context/MyContext.js'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 
const Mystate = (props) => {
     const navigate = useNavigate()
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedPrice, setselectedPrice] = useState('');
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [cartItems,setCartItems] = useState([])
 
    useEffect(() => {
        axios.get('https://minitgo.com/api/fetch_products.php')
            .then(response => {
                setProducts(response.data.data);
            })
            .catch(error => {
                setError(error);
            });
    }, []);
    useEffect(() => {
        console.log('Cart items:', cartItems);
    }, [cartItems]);
 
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
 
    };
    const addToCart = (productId) => { // Modify addToCart to accept productId
        setCartItems([...cartItems, productId]); // Add productId to cartItems array
        navigate('./cart'); 
        console.log('cart is' , cartItems)
    };
 
    const handlePriceChange = (event) => {
        setselectedPrice(event.target.value);
 
    };
 
    // Handle search input change
    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };
 
   
  console.log("searchQuery",searchQuery)
    return (
        <div>
 
            <myContext.Provider value={{ selectedCategory, setSelectedCategory, handleCategoryChange, products, handlePriceChange, setselectedPrice, selectedPrice, searchQuery, setSearchQuery, handleSearchInputChange ,
            cartItems,setCartItems,addToCart
            }}>
                {props.children}
            </myContext.Provider>
 
        </div>
    )
}
export default Mystate
 