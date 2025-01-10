import React from 'react';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="page-container">
      <div className="about-section">
        <div className="about-container">
          <div className="main-about animate">
            <div className="name-container">
              <img 
                src="https://i.postimg.cc/prWMVQww/picrames.jpg" 
                alt="Rameshh Kumaar Sura" 
                className="profile-image" 
              />
              <h2 className="name">RAMESH SURA</h2>
            </div>
            <p className="description">
              I am a motivated web developer seeking job opportunities to utilize my skills in creating responsive web applications. Proficient in HTML, CSS, JavaScript, and frameworks like React and Bootstrap, I also understand back-end technologies such as Node.js. I am passionate about continuous learning and delivering high-quality, user-centric designs.
            </p>
          </div>
          
          {/* Updated Animation Section */}
          <div className="ppppp-anim-animation-container">
            <div className="ppppp-anim-cube-container">
              <div className="ppppp-anim-cube">
                <div className="face front"><span>Hello</span></div>
                <div className="face back">you'll never see...</div>
                <div className="face right">World</div>
                <div className="face left">...this anyway :)</div>
                <div className="face top">Ramesh Sura</div>
                <div className="face bottom">I'm</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="details-section">
        <h2>Programming Skills</h2>
        <div className="details-container">
          {/* Part 1: Skills Section */}
          <div className="skills-part">
            <h3>Skill Part 1</h3>
            <div className="skill">
              <div className="skill-name html">HTML</div>
              <div className="skill-level">
                <div style={{ width: '90%' }} className="skill-percent"></div>
              </div>
              <div className="skill-percent-number">90%</div>
            </div>
            <div className="skill">
              <div className="skill-name css">CSS</div>
              <div className="skill-level">
                <div style={{ width: '80%' }} className="skill-percent"></div>
              </div>
              <div className="skill-percent-number">80%</div>
            </div>
            <div className="skill">
              <div className="skill-name js">JavaScript</div>
              <div className="skill-level">
                <div style={{ width: '89%' }} className="skill-percent"></div>
              </div>
              <div className="skill-percent-number">89%</div>
            </div>
            <div className="skill">
              <div className="skill-name react">React</div>
              <div className="skill-level">
                <div style={{ width: '70%' }} className="skill-percent"></div>
              </div>
              <div className="skill-percent-number">90%</div>
            </div>
            <div className="skill">
              <div className="skill-name python">Python</div>
              <div className="skill-level">
                <div style={{ width: '65%' }} className="skill-percent"></div>
              </div>
              <div className="skill-percent-number">85%</div>
            </div>
          </div>

          {/* Part 2: Skills Section */}
          <div className="skills-part">
            <h3>Skills Part 2</h3>
            <div className="skill">
              <div className="skill-name sql">SQL</div>
              <div className="skill-level">
                <div style={{ width: '70%' }} className="skill-percent"></div>
              </div>
              <div className="skill-percent-number">70%</div>
            </div>
            <div className="skill">
              <div className="skill-name java">Java</div>
              <div className="skill-level">
                <div style={{ width: '60%' }} className="skill-percent"></div>
              </div>
              <div className="skill-percent-number">60%</div>
            </div>
            <div className="skill">
              <div className="skill-name nodejs">Node.js</div>
              <div className="skill-level">
                <div style={{ width: '75%' }} className="skill-percent"></div>
              </div>
              <div className="skill-percent-number">75%</div>
            </div>
            <div className="skill">
              <div className="skill-name expressjs">Express.js</div>
              <div className="skill-level">
                <div style={{ width: '70%' }} className="skill-percent"></div>
              </div>
              <div className="skill-percent-number">70%</div>
            </div>
            <div className="skill">
              <div className="skill-name git">Git</div>
              <div className="skill-level">
                <div style={{ width: '80%' }} className="skill-percent"></div>
              </div>
              <div className="skill-percent-number">80%</div>
            </div>
            <div className="skill">
              <div className="skill-name bootstrap">Bootstrap</div>
              <div className="skill-level">
                <div style={{ width: '75%' }} className="skill-percent"></div>
              </div>
              <div className="skill-percent-number">75%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
