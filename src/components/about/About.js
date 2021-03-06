// about.js

import React, { Component } from 'react';
import profile from '../../assets/images/about-pic.jpg';
import Fade from 'react-reveal/Fade';
import './About.css';
import '../home/Home.css';
import pdf from '../../Resume-5-2020.pdf';
import ReactImageAppear from 'react-image-appear';

class About extends Component {
  render() {
    return (
      
        <div className="about-txt">
          <Fade down distance={"0.5em"}> 
            <h2>about me</h2>
          </Fade>
          
            <div className="flex-container">
              <div className="description">
                <Fade down delay={300} distance={"0.5em"}>
                  <p>
                    Hey there! I'm Jen, a senior studying Computer Science at <a className="blue-link" href="https://www.ucsc.edu/">UC Santa Cruz</a>. 
                    <br></br><br></br>
                    My passion lies in exploring the intersection between software engineering and design. 
                    I strive to deliver amazing user experiences by leveraging both my technical skills and UI/UX design background. 
                    <br></br><br></br>
                    This past summer, I interned on the <a className="blue-link" href="https://www.microsoft.com/en-us/">Microsoft</a> Word team, and I'm excited to return to Microsoft in 2021 as a full-time software engineer!
                    In 2020, I had the amazing opportunity to run the <a className="blue-link" href="https://www.cruzhacks.com/">CruzHacks</a> organization, which plans UCSC's annual hackathon.
                    <br></br><br></br>
                    In my free time I love to do <a className="blue-link" href="https://www.flickr.com/people/jenniferdutra/">portrait photography</a>, go bouldering, visit the beach, try new cuisines, and grab milk tea with friends.
                  </p>
                </Fade>
                <Fade down delay={600} distance={"0.5em"}>
                  <a href={pdf}><button type="button" className="blue-button">resume</button></a>
                </Fade>
              </div>
              <Fade down delay={300} distance={"0.5em"}>
                <img className="profile-pic" src={profile} />
              </Fade>
            </div>
          
        </div>
       
    );
  }
}

export default About;