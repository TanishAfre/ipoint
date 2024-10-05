import React from 'react';
import './Header.css';
const Header = () => {
    const handleScrollDown = () => {
        // Scroll to the next section smoothly
        // You may need to adjust this based on your page structure
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };
    return (
        <>
        <div className='header'>
            <div className='header-contents'>
                <h2>Your One-Stop Tech & Vape Shop</h2>
                <p>Discover a world of cutting-edge smartphones, stylish accessories, and premium vaping products all in one place. From the latest devices to expert repairs, we've got you covered. Browse our extensive collection of phone cases, chargers, and gadgets, or explore our curated selection of vapes and e-liquids. Our mission is to enhance your tech life and satisfy your vaping needs with top-quality products and unmatched service.</p>
                <button onClick={handleScrollDown} >View Menu</button>
            </div>
            </div>   
        </>
    );
}

export default Header;