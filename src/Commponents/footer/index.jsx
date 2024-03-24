import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div className='fMain'>
      <div className="container">
        <div className='content'>
          <h2>Where speed meets antenna!</h2>
          <p>Place Your Wagers on the Fastest Roaches in the Race! Experience the thrill as these champion crawlers dash for glory. It's not just a race; it's the ultimate test of speed and survival. Who will you back in the ultimate showdown?</p>
        </div>
        <div className='image-div'>
          <img src='\images\Purp Roach.png' alt='Purple Roach'/>
          <img src='\images\Black Roach.png' alt='Black'/>
          <img src='\images\Green Roach.png' alt='Green'/>
          <img src='\images\White Roach.png' alt='White'/>
        </div>
        <div className='btn-div'>
        <a href="https://roachrallyraces.xyz"><button >START BETTING</button></a>
        </div>
      </div>      
    </div>
  );
}

export default Footer;
