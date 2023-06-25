import React from 'react';
import './Hamburger.css';

const Hamburger = () => {
  
  return (
    <>

      <a className='hire' href='#'>Hire us</a>

    <div className='menu'>

    <label class="hamburger-menu">
      <input type="checkbox" />
    </label>
    <aside class="sidebar">
      <nav>
        <ul>
          <li><a className="links" href="#" >Work </a></li>
          <li><a className="links" href="#" >The Studio</a></li>
          <li><a className="links" href="#" >job</a></li>
          <li><a className="links" href="#" >Contact</a></li>
          <li></li>
        </ul>
      </nav>
    </aside>
    </div>
    </>
  );
};




export default Hamburger;
