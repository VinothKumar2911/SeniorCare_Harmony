import React, { useState,useEffect,Suspense} from 'react';  
import { Link } from 'react-router-dom';
import '../assets/CSS/Home.css'; 
import bg from '../assets/images/img1.jpg';
import bg2 from '../assets/images/img3.jpg';
import bg3 from '../assets/images/img4.jpg';
import bg4 from '../assets/images/img5.jpg';
import bg5 from '../assets/images/img6.jpg';
import bg6 from '../assets/images/img7.jpg';
import bg7 from '../assets/images/img8.jpg';
import bg8 from '../assets/images/img9.jpg';
import bg111 from '../assets/images/img33.jpg';
import bg112 from '../assets/images/img34.png';
import bg113 from '../assets/images/img35.png';
import bg11 from '../assets/images/img199.jpg';
import vd1 from '../assets/videos/vid1.mp4';
import SimpleImageSlider from 'react-simple-image-slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useParallax } from 'react-parallax';
import axios from 'axios';
import {motion} from 'framer-motion';
import{fadeIn} from '../variants';

const Home = () => {



  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  
  const [email, setEmail] = useState('');


  const Home = () => <div>Home Page</div>;
  
  const [imageNum, setImageNum] = useState(1);
  const sliderImages = [
    {
     url:bg2,
    },
    {
       url:bg2,
    },
    {
       url:bg4,
    },
   
 ];


  const [faqData, setFaqData] = useState([
    { id: 1, question: 'Can I choose my caregiver?',
     answer: 'Many home care agencies allow clients to participate in the caregiver selection process. You may have the opportunity to meet with potential caregivers and choose the one who best meets your needs and preferences.' },

    { id: 2, question: 'What is home care?', 
    answer: 'Home care refers to a range of supportive services provided in a persons home to assist with activities of daily living, health care needs, and overall well-being. These services are typically delivered by trained caregivers or healthcare professionals.' },
    
    { id: 3, question: 'Who can benefit from home care services?', 
    answer: 'Home care services are beneficial for individuals of all ages who require assistance with activities of daily living due to age, illness, disability, or injury. This includes seniors, people with chronic conditions, individuals recovering from surgery, and those with disabilities.' },
    
    { id: 4, question: 'What types of services are offered in home care?', 
    answer: 'Home care services can include personal care assistance (such as bathing, grooming, and dressing), medication management, meal preparation, companionship, light housekeeping, transportation, and skilled nursing care.' },
    
    { id: 5, question: 'What qualifications do caregivers have?', 
    answer: 'Caregivers employed by home care agencies typically undergo training to provide quality care and may have certifications in areas such as CPR, first aid, and specialized caregiving skills. Its important to inquire about caregiver qualifications and background checks when selecting a home care agency'},
    
  ]);

  const toggleAnswer = (id) => {
    setFaqData(prevData => (
      prevData.map(item => (
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      ))
    ));
  };


  const parallax = useParallax<HTMLDivElement>({
    easing: 'easeOutQuad',
    translateX: [0, 100],
  });


  const [counters, setCounters] = useState({
    totalServices: 0,
    totalMissions: 0,
    totalRegistered: 0,
  });
  
  const handleIncrement = (counterType) => {
    setCounters((prevCounters) => {
      const newValue = prevCounters[counterType] + 1;
      const stoppingValue =
        counterType === 'totalServices' ? 4574 : counterType === 'totalMissions' ? 4546 : 4550;
  
      return {
        ...prevCounters,
        [counterType]: newValue >= stoppingValue ? stoppingValue : newValue,
      };
    });
  };
  
  useEffect(() => {
    const serviceInterval = setInterval(() => {
      handleIncrement('totalServices');
    }, 2);
  
    const missionInterval = setInterval(() => {
      handleIncrement('totalMissions');
    }, 6);
  
    const registeredInterval = setInterval(() => {
      handleIncrement('totalRegistered');
    }, 8);
  
    return () => {
      clearInterval(serviceInterval);
      clearInterval(missionInterval);
      clearInterval(registeredInterval);
    };
  }, []);
  

  const Fallback = () => (
    <div className="fallback">
      <LoadingSpinner />
    </div>
  );


  const LoadingSpinner = () => (
    <div className="loading-spinner">
      <div className="spinner"></div>
      Loading...
    </div>
  );
  
  const simulateAsyncOperation = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 100); 
    });
  };

  const AsyncComponent = React.lazy(() => simulateAsyncOperation().then(() => import('../pages/AsyncComponent')));



  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // const fetchTestimonials = async () => {
      try {
        const response =  axios.get('http://localhost:8080/api/testimonials').then((response)=>{console.log(response.data),setTestimonials(response.data)});
        
        // console.log(response.data)
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    // };

    // fetchTestimonials();
  }, []);

  
  return (
    <Suspense fallback={<Fallback />}>
    <>

    <motion.div
    variants={fadeIn("left",0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false,amount:0.9}} 
    
    className='head1' >
      <h1>WELCOME TO SENIOR<br></br> CARE HARMONY</h1>
    </motion.div>
    <motion.div 
    variants={fadeIn("right",0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false,amount:0.2}} 
    
    
    className='head2'>
      <p>Compassionate Care, Comforting Home: Where Your Well-Being Takes Center Stage</p>
    </motion.div>
   
    {/* <SimpleImageSlider
            width={1990}
            height={800}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
            onStartSlide = {(index, length) => {
               setImageNum(index);
            }}
               autoPlayDelay = {3}
         /> */}
    <img src={bg2} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
   
    < motion.div
    
    variants={fadeIn("right",0.3)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false,amount:0.7}} 
    
    className='head3'>
      <h2>
        We provide a warm and welcoming environment <br></br>for our residents to live life at its fullest.
      </h2><br></br>
      <p>
      ​SeniorCare Harmoney is the most reliable and trustworthy Home Health Care Service service in the greater San Francisco area — providing excellent home care solutions 
      to patients who are dealing with injury or illness.<br></br> We are committed to meeting all of your health needs, and go above and beyond to ensure you get the best care available.
      </p>
    </motion.div>
    
    {/* <AsyncComponent /> */}

<motion.div 
 variants={fadeIn("up",0.3)}
 initial="hidden"
 whileInView={"show"}
 viewport={{once:false,amount:0.2}} 

className="image-container4">
  <div className="text-overlay">
  <motion.div
   variants={fadeIn("left",0.3)}
   initial="hidden"
   whileInView={"show"}
   viewport={{once:false,amount:0.2}} 
  
  
  className='head4'>
  <h2>Do You Know?</h2><br></br>
  <p>
    "Step into our home care center, where a complete family environment is not just<br></br> a promise but a daily reality. We understand that family is at the heart of every 
    individual<br></br> and that's why we've cultivated a warm and welcoming atmosphere for our residents. <br></br>From compassionate caregivers 
   to engaging activities, we prioritize creating an<br></br> environment that feels like an extension of your own home."
  </p>
</motion.div>
  </div>
  <img src={bg5} alt="Example" className="zoom-image1" />
</ motion.div>


<div className="counter-grid">
      <motion.div 
      variants={fadeIn("up",0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false,amount:0.2}} 
      
      className="counter-item">
 <img
      src={bg111} 
      alt="Total Services Icon"
      className="counter-image"
    />       
     <div className="counter-value">{counters.totalServices}</div>
        <div className="counter-label">Total Services</div>
      </motion.div>

      <motion.div 
       variants={fadeIn("up",0.3)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once:false,amount:0.2}} 
      
      className="counter-item">
        <img
      src={bg112} 
      alt="Total Services Icon"
      className="counter-image"
    />   
        <div className="counter-value">{counters.totalMissions}</div>
        <div className="counter-label">Total Successful Missions</div>
      </motion.div>

      <motion.div 
       variants={fadeIn("up",0.3)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once:false,amount:0.2}} 
      
      
      
      className="counter-item">
<img
      src={bg113} 
      alt="Total Services Icon"
      className="counter-image"
    />           <div className="counter-value">{counters.totalRegistered}</div>
        <div className="counter-label">Total Registered People</div>
      </motion.div>
    </div>




<motion.p
  variants={fadeIn("down",0.2)}
  initial="hidden"
  whileInView={"show"}
  viewport={{once:false,amount:0.2}} 


className='hello'>Join US</motion.p>
<motion.p
 variants={fadeIn("up",0.2)}
 initial="hidden"
 whileInView={"show"}
 viewport={{once:false,amount:0.2}} 

className='hello1'>
"Your Home, Our Heart: Care Tailored Just for You"</motion.p>

<div className="image-container2">
  <motion.div
  variants={fadeIn("left",0.3)}
  initial="hidden"
  whileInView={"show"}
  viewport={{once:false,amount:0.5}} 
  
  className="image-wrapper">
    <img src={bg6} alt="Image 1" className="image" />
  </motion.div>
  <motion.div 
  variants={fadeIn("left",0.3)}
  initial="hidden"
  whileInView={"show"}
  viewport={{once:false,amount:0.5}} 
  className="image-wrapper">
    <img src={bg8} alt="Image 2" className="image" />
  </motion.div>
  <motion.div
   variants={fadeIn("left",0.3)}
   initial="hidden"
   whileInView={"show"}
   viewport={{once:false,amount:0.5}} 
  className="image-wrapper">
    <img src={bg7} alt="Image 3" className="image" />
  </motion.div>
</div>

<div className="faq-container">
    <motion.div
     variants={fadeIn("down",0.4)}
     initial="hidden"
     whileInView={"show"}
     viewport={{once:false,amount:0.7}} 
    
    className="faq-title">FAQ- Frequenty Asked Question</motion.div>

      {faqData.map(item => (
        <motion.div 
        variants={fadeIn("right",0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.5}} 
        
        
        
        key={item.id}>
          <div className="question" onClick={() => toggleAnswer(item.id)}>
            {item.question}
          </div>
          <motion.div
           variants={fadeIn("right",0.3)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false,amount:0.5}} 
          
          className={item.isOpen ? "answer open" : "answer"}>
            {item.answer}
          </motion.div>
        </motion.div>
      ))}
    </div>



  
  <div className="video-container">
  <video autoPlay muted loop>
    <source src={vd1} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="overlay">
    <motion.p 
    
    variants={fadeIn("right",0.3)}
           initial="hidden"
           whileInView={"show"}
           viewport={{once:false,amount:0.7}} 
    
    className="overlay-text">
    Join us on a journey of care, where your comfort and happiness are at the heart of everything we do. Welcome to a place where exceptional service meets compassionate 
    care, ensuring that each day is enriched with warmth and fulfillment
    </motion.p>
    <motion.button 
     variants={fadeIn("left",0.3)}
     initial="hidden"
     whileInView={"show"}
     viewport={{once:false,amount:0.7}} 
    
    className="hover-button">View More</motion.button>
  </div>
</div>
{/* <div className="conta">
      <motion.div 
       variants={fadeIn("down",0.3)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once:false,amount:0.7}} 
      
      
      className="tit">Testimonial</motion.div>
      <div className="left-sec">
        <motion.div 
        
        variants={fadeIn("left",0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.7}} 
        
        className="sec-text">
        <img src={bg11} alt="Image 3" className="image" />
        <p>
        "After my father's stroke, our family faced numerous challenges in providing him with the care he needed. That's when we turned to [Home Care Service], and it was a game-changer. Their team of skilled professionals developed a comprehensive care plan tailored to my father's specific needs, and the results were nothing short of exceptional. Thanks to their unwavering dedication and expertise, my father made remarkable progress in his recovery journey."
        </p>
        </motion.div>
        <motion.div
        
        variants={fadeIn("right",0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.7}} 
        
        
        className="sec-text">
        <img src={bg11} alt="Image 3" className="image" />
        <p>
        
        "My grandmother was determined to maintain her independence despite her advancing age and declining health. [Home Care Service] played a crucial role in making that possible. Their caregivers didn't just provide assistance with daily tasks; they empowered my grandmother to live life on her own terms. From helping her with mobility to encouraging her hobbies and interests, they fostered a sense of dignity and autonomy that was truly inspiring. We couldn't have asked for a better "
        </p>
        </motion.div>
      </div>
     
    </div> */}
   
   <div className="conta">
      <motion.div 
       className="tit"
       variants={{hidden: { opacity: 0, y: -100 }, show: { opacity: 1, y: 0 }}}
       initial="hidden"
       animate="show"
      >
        Testimonial
      </motion.div>
      <div className="left-sec">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="sec-text"
            variants={{hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 }, show: { opacity: 1, x: 0 }}}
            initial="hidden"
            animate="show"
          >
            <img src={bg11} alt={`Image ${index + 1}`} className="image" />
            <p>{testimonial.message}</p>
          </motion.div>
        ))}
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
    </Suspense>
  );
};

export default Home;






