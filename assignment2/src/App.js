import React, { useRef, useEffect } from "react";
import ScrollHighlightNabbar from "./ScrollHighlightNabbar";
import "./App.css";
import logo from "./logo4.png";
import Hamburger from "./Hamburger";

export default function App() {
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();

  const navHeader = [
    {
      headerTitle: "F",
      headerRef: section1Ref,
      headerID: "section1",
    },
    {
      headerTitle: "I",
      headerRef: section2Ref,
      headerID: "section2",
    },
    {
      headerTitle: "E",
      headerRef: section3Ref,
      headerID: "section3",
    },
    {
      headerTitle: "G",
      headerRef: section4Ref,
      headerID: "section4",
    },
  ];

  return (
    <div className="App">
      <div className="right-top">
        <Hamburger/>
      </div>
      <div className="top-cont">
        <img src={logo} alt="BigCo Inc. logo" />
        
      </div>
      <div className="Scroller">
          <ScrollHighlightNabbar
            section3Ref={section3Ref}
            navHeader={navHeader}
          />
        </div>
      
         <div className="main-cont">
          <div className="section" ref={section1Ref} id="section1">
            <div><h4>Spotify for Artists</h4>
            <h1>Fan Study</h1>
            <p>Data-driven insightto help artists connect with fans the world.</p></div>
            <div>
            <button type="button"><div className="right"></div><div className='circle' id="c1"></div></button>
            </div>
          </div>
          <div className="section" ref={section2Ref} id="section2">
           <div><h4>IKon Pass</h4>
            <h1>IKon Pass </h1><h1>Destinations</h1>
            <p>Explore the worldwide destinations on the IKon Pass with a new web-based</p><p> experience.</p></div>
            <div>
            <button type="button"><div className="right"></div><div className='circle' id="c2"></div></button>
            </div>
          </div>
          <div className="section" ref={section3Ref} id="section3">
          
          <div><h4>Toyoto Connected</h4>
            <h1>Experience Center</h1>
            <p>Proposed concepts for an installation in Toyoto North America's</p><p> headquarters in Plano Texas.</p></div>
            <div>
            <button type="button"><div className="right"></div><div className='circle' id="c4"></div></button>
            </div>

          </div>
          <div className="section" ref={section4Ref} id="section4">
          <div><h1>GlobeKit</h1>
            <p>GlobeKit brings beautiful , interactive globes to the web , and </p><p>it needed a unique site to show off what it's capable of .</p></div>
            <div>
            <button type="button"><div className="right"></div><div className='circle' id="c3"></div></button>
            </div>
          </div>
          </div>
        </div> 
      
    
  );
}

