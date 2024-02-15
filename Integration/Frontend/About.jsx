import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';

import '../assets/CSS/About.css';
import backgroundImage from '../assets/images/img20.jpg';
import bg1 from '../assets/images/img21.jpg';
import bg2 from '../assets/images/img22.jpg';
import bg3 from '../assets/images/img23.jpg';
import bg4 from '../assets/images/img20.jpg';
import bg5 from '../assets/images/img31.jpg';
import bg6 from '../assets/images/img32.jpg';
import vd1 from '../assets/videos/vid2.mp4';
import React, { useState, useEffect } from 'react';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion';
import{fadeIn} from '../variants';


function About() {
    const hrStyle = {
        border: '1px solid #4F6F52',  
        margin: '10px 500px 10px',
        width:'50%',
      };
    
        const [progressData, setProgressData] = useState([
          { color: 'progress-blue', progress: 99.9 },
          { color: 'progress-green', progress:99 },
        ]);
      
        useEffect(() => {
          const animateProgress = () => {
            const progressElements = document.querySelectorAll('.animated-progress span');
      
            progressElements.forEach((element, index) => {
              const progress = progressData[index].progress;
              element.style.width = `${progress}%`;
              element.innerText = `${progress}%`;
            });
          };
      
          animateProgress();
        }, [progressData]);
    return (
        <>

        <div className="about-container">
            <img src={backgroundImage} alt="About Background" className="about-background" />
            <div
           
            className="about-text">
<motion.p
  variants={fadeIn("down",0.4)}
  initial="hidden"
  whileInView={"show"}
  viewport={{once:false,amount:0.7}} 
>
"Explore our history, mission, team, and values through engaging content and captivating visuals on our About page."
    </motion.p>            </div>
        </div>
        <motion.h2

variants={fadeIn("left",0.5)}
initial="hidden"
whileInView={"show"}
viewport={{once:false,amount:0.7}} 
         className='head11'>Insights into Our Journey, Team, and Mission</motion.h2>
       <motion.p 
       
       variants={fadeIn("right",0.4)}
initial="hidden"
whileInView={"show"}
viewport={{once:false,amount:0.7}} 
       
       className='head12'>"Explore Our Journey offers an in-depth look at our dedicated team, mission-driven approach,<br>
       </br> core values, and unwavering commitment to providing excellent care and service to our clients."</motion.p>
       <div className='apple'>
      <div className='content'>
        <motion.h2
        
        variants={fadeIn("right",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.7}} 
        
        >20 Years of Experience in Home Care & Private Nursing</motion.h2>
        <p>
        With two decades of expertise in home care and private nursing, we bring unparalleled experience, compassion, and quality <br></br>services to enhance the well-being of individuals in the comfort of their homes.</p>
      </div>
      <motion.div 
      
      variants={fadeIn("left",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.7}} 
      
      className='image-containerz'>
        <img src={bg1} alt='Your Image' />
      </motion.div>
    </div>

    <div className='container'>
      <div className='left-side'>
        <div className='header'>
          <motion.h2
           variants={fadeIn("left",0.4)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false,amount:0.5}} 
          >We're Take Care of Your Problems Carefully</motion.h2>
        </div>
        <div className='animated-progress-container'>
          {progressData.map((item, index) => (
            <div key={index} className={`animated-progress ${item.color}`}>
              <span data-progress={item.progress}></span>
            </div>
          ))}
        </div>
        <motion.p

variants={fadeIn("right",0.4)}
initial="hidden"
whileInView={"show"}
viewport={{once:false,amount:0.5}} 
        >We meticulously handle your concerns, ensuring every detail is addressed with precision and care. From start to finish, we prioritize your needs, providing thorough solutions tailored to your requirements. With us, rest assured, your problems are in capable hands, managed with utmost attention and expertise.</motion.p>
      </div>
      <div className='right-side'>
        <div className='grid-container'>
          <motion.img 
          
          variants={fadeIn("up",0.4)}
initial="hidden"
whileInView={"show"}
viewport={{once:false,amount:0.5}} 
          
          src={bg2} alt='Image 1' />
          <motion.img 
          variants={fadeIn("down",0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false,amount:0.5}} 
          
          
          src={bg3} alt='Image 2' />
        </div>
     
      </div>
    </div>
    <div class="video-container">
    <div class="video-text">
      <p>
      Our home care website offers unparalleled service quality, distinguished by our commitment to excellence. Our team comprises skilled professionals dedicated to meeting your needs with compassion and expertise. We prioritize personalized care, ensuring each client receives tailored support. With meticulous attention to detail and a focus on customer satisfaction, we strive to exceed expectations, delivering exceptional service every step of the way.
      </p>
    </div>
    <video className='video'autoPlay loop>
            <source src={vd1} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  <div className='orange'>
    <motion.h1 
    variants={fadeIn("left",0.4)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false,amount:0.5}} 
    
    
    >Easy Steps To Get Our Sevices</motion.h1>
    <motion.p
    
    variants={fadeIn("right",0.4)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false,amount:0.5}} 
    >
Experience seamless access to our services in just a few easy steps. Visit our website, select your desired service, complete a straightforward registration,<br></br> 
and begin enjoying our exceptional offerings without any hassle. Our user-friendly process ensures a smooth and efficient experience for all.</motion.p>
  </div>
  <div class="grid-container1">
  <motion.div 
  
  variants={fadeIn("up",0.4)}
  initial="hidden"
  whileInView={"show"}
  viewport={{once:false,amount:0.5}} 
  class="pine">
    <h2>Make an Appointment</h2>
    <p>Booking appointments with us is effortless and convenient. Simply navigate to our website or mobile app, select your preferred date and time, and complete a straightforward booking.</p>
  </motion.div>
  
  <motion.div 
   variants={fadeIn("up",0.5)}
   initial="hidden"
   whileInView={"show"}
   viewport={{once:false,amount:0.5}} 
  
  
  class="pine">
    <h2>Nurse Comes to Your Home</h2>
    <p>Experience the convenience of nursing care in the comfort of your own home. Our dedicated nurses bring expertise and compassion right to your doorstep.</p>
  </motion.div>
  
  <motion.div
   variants={fadeIn("up",0.6)}
   initial="hidden"
   whileInView={"show"}
   viewport={{once:false,amount:0.5}} 
  
  class="pine">
    <h2>Enjoy Our Home Care</h2>
    <p>Indulge in the comfort and peace of mind that comes with our home care services. With a focus on personalized attention and skilled professionals.</p>
  </motion.div>
</div>


<div className="achievements-container">
  <motion.h2
     variants={fadeIn("left",0.4)}
     initial="hidden"
     whileInView={"show"}
     viewport={{once:false,amount:0.5}} 
  
  >Our Achievements</motion.h2>

  <div className="imag-grid">
    <img src={bg4} alt="Achievement 1" />
    <img src={bg5} alt="Achievement 2" />
    <img src={bg6} alt="Achievement 3" />
  </div>

  <div className="text-gri">
    <motion.div 
     variants={fadeIn("left",0.4)}
     initial="hidden"
     whileInView={"show"}
     viewport={{once:false,amount:0.5}} 
    
    
    className="grid-ite">
    <span className="icon">~ Life-Saving Support<FontAwesomeIcon icon={faTrophy} /></span>
      <p>
      "I can't thank the team at [Home Care Service] enough for their life-saving support. After my surgery, I was worried about how I would manage at home, but their caregivers were like guardian angels. From helping with medications to providing companionship during recovery, they went above and beyond to ensure my comfort and well-being. I highly recommend their services to anyone in need."
      </p>
    </motion.div>
    <motion.div 
       variants={fadeIn("right",0.4)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once:false,amount:0.5}} 
    
    
    className="grid-ite">
      <span className="icon">~ A Trusted Partner<FontAwesomeIcon icon={faTrophy} /></span>
      <p>
      "As a busy professional, I needed someone I could trust to take care of my aging father when I couldn't be there. [Home Care Service] became that trusted partner for our family. Their caregivers became like an extension of our family, providing personalized care and support that exceeded our expectations. Knowing that my father was in good hands gave me peace of mind, and I'm incredibly thankful for their dedication and commitment."
      </p>
    </motion.div>
    <motion.div 
     variants={fadeIn("left",0.4)}
     initial="hidden"
     whileInView={"show"}
     viewport={{once:false,amount:0.5}} 
    
    className="grid-ite">
      <span className="icon">~ Exceptional Care, Exceptional Results<FontAwesomeIcon icon={faTrophy} /></span>
      <p>
      "After my father's stroke, our family faced numerous challenges in providing him with the care he needed. That's when we turned to [Home Care Service], and it was a game-changer. Their team of skilled professionals developed a comprehensive care plan tailored to my father's specific needs, and the results were nothing short of exceptional. Thanks to their unwavering dedication and expertise, my father made remarkable progress in his recovery journey. We are forever grateful for the impact they've had on our lives."
      </p>
    </motion.div>
    <motion.div
    
    variants={fadeIn("right",0.4)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once:false,amount:0.5}} 
    className="grid-ite">
      <span className="icon">~ Empowering Independence<FontAwesomeIcon icon={faTrophy}/></span>
      <p>
      "My grandmother was determined to maintain her independence despite her advancing age and declining health. [Home Care Service] played a crucial role in making that possible. Their caregivers didn't just provide assistance with daily tasks; they empowered my grandmother to live life on her own terms. From helping her with mobility to encouraging her hobbies and interests, they fostered a sense of dignity and autonomy that was truly inspiring. We couldn't have asked for a better support system."
      </p>
    </motion.div>
  </div>
</div>



  <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@seniorcareharmony.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>Stay connected on social media:</p>
          <div className="social-icons">
      <a href="#" className="icon-link">
        <FontAwesomeIcon icon={faFacebook} /> Facebook
      </a>
      <a href="#" className="icon-link">
        <FontAwesomeIcon icon={faTwitter} /> Twitter
      </a>
      <a href="#" className="icon-link">
        <FontAwesomeIcon icon={faInstagram} /> Instagram
      </a>
    </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 SeniorCare Harmony. All rights reserved.</p>
      </div>
    </footer>
  
        </>
    );
}

export default About;
