import React from 'react';
import './articlestyles.css'; 
import './discoverstyles.css';

export default function Discover() {
    return (
        <div className='discoverContainer'>
          <div className='iconContainer'>
        <p>
        <img src='./Medium.SVG' alt="Medium" /> 
      <img src='./Twitter.SVG' alt="Twitter" />
      </p>
      </div>
        <div className='discoverText'><p>
        Discover Medium writers you already follow on Twitter.
        </p></div>
        <a href="twitter.com" className='connectButton'>
        <span className='twitterIcon'>
          <img src='./Twitter.SVG' alt="Twitter" />
        </span>
        Connect to Twitter
      </a>
        <p>
        <a href='#' className='maybeAnchor'>Maybe Later</a>
        </p>
        </div>
    );
}