import React, { useState } from 'react';  
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
import bg11 from '../assets/images/img199.jpg';
import vd1 from '../assets/videos/vid1.mp4';
import SimpleImageSlider from 'react-simple-image-slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';



const Home = () => {
  
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleJoinButtonClick = () => {
    alert(`Subscribed ${email}`);
  };
  const Home = () => <div>Home Page</div>;
  
  const [imageNum, setImageNum] = useState(1);
  const sliderImages = [
    {
     url:bg2,
    },
    {
       url:bg3,
    },
    {
       url:bg4,
    },
   
 ];
  const hrStyle = {
    border: '1px solid #4F6F52',  
    margin: '5px 500px 10px',
    width:'50%',
    
    
  };

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



  
  return (
    <>
 {/* <hr style={hrStyle} /> */}
    <div className='head1'>
      <h1>WELCOME TO SENIOR<br></br> CARE HARMONY</h1>
    </div>
    <div className='head2'>
      <p>Compassionate Care, Comforting Home: Where Your Well-Being Takes Center Stage</p>
    </div>
   
    <SimpleImageSlider
            width={1990}
            height={800}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
            onStartSlide = {(index, length) => {
               setImageNum(index);
            }}
               autoPlayDelay = {2}
         />
    
   
    <div className='head3'>
      <h2>
        We provide a warm and welcoming environment <br></br>for our residents to live life at its fullest.
      </h2><br></br>
      <p>
      ​SeniorCare Harmoney is the most reliable and trustworthy Home Health Care Service service in the greater San Francisco area — providing excellent home care solutions 
      to patients who are dealing with injury or illness.<br></br> We are committed to meeting all of your health needs, and go above and beyond to ensure you get the best care available.
      </p>
    </div>
    
   

<div className="image-container4">
  <div className="text-overlay">
  <div className='head4'>
  <h2>Do You Know?</h2><br></br>
  <p>
    "Step into our home care center, where a complete family environment is not just<br></br> a promise but a daily reality. We understand that family is at the heart of every 
    individual<br></br> and that's why we've cultivated a warm and welcoming atmosphere for our residents. <br></br>From compassionate caregivers 
   to engaging activities, we prioritize creating an<br></br> environment that feels like an extension of your own home."
  </p>
</div>
  </div>
  <img src={bg5} alt="Example" className="zoom-image1" />
</div>

<p className='hello'>Join US</p>
<p className='hello1'>
"Your Home, Our Heart: Care Tailored Just for You"</p>

<div className="image-container2">
  <div className="image-wrapper">
    <img src={bg6} alt="Image 1" className="image" />
  </div>
  <div className="image-wrapper">
    <img src={bg8} alt="Image 2" className="image" />
  </div>
  <div className="image-wrapper">
    <img src={bg7} alt="Image 3" className="image" />
  </div>
</div>

<div className="faq-container">
    <div className="faq-title">FAQ- Frequenty Asked Question</div>

      {faqData.map(item => (
        <div key={item.id}>
          <div className="question" onClick={() => toggleAnswer(item.id)}>
            {/* <img src="question.png" alt="Question Image" /> */}
            {item.question}
          </div>
          <div className={item.isOpen ? "answer open" : "answer"}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>


  {/* <div className="join-box1">
    <input
      type="text"
      placeholder="Enter your email"
      value={email}
      onChange={handleInputChange}
    />
    <button onClick={handleJoinButtonClick}>Join</button>
  </div> */}
  
  <div className="video-container">
  <video autoPlay muted loop>
    <source src={vd1} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="overlay">
    <p className="overlay-text">
    Join us on a journey of care, where your comfort and happiness are at the heart of everything we do. Welcome to a place where exceptional service meets compassionate 
    care, ensuring that each day is enriched with warmth and fulfillment
    </p>
    <button className="hover-button">View More</button>
  </div>
</div>
<div className="conta">
      <div className="tit">Testimonial</div>
      <div className="left-sec">
        <div className="sec-text">
        <img src={bg11} alt="Image 3" className="image" />
        <p></p>
        "After my father's stroke, our family faced numerous challenges in providing him with the care he needed. That's when we turned to [Home Care Service], and it was a game-changer. Their team of skilled professionals developed a comprehensive care plan tailored to my father's specific needs, and the results were nothing short of exceptional. Thanks to their unwavering dedication and expertise, my father made remarkable progress in his recovery journey."

        </div>
        <div className="sec-text">
        <img src={bg11} alt="Image 3" className="image" />
        <p></p>
        "My grandmother was determined to maintain her independence despite her advancing age and declining health. [Home Care Service] played a crucial role in making that possible. Their caregivers didn't just provide assistance with daily tasks; they empowered my grandmother to live life on her own terms. From helping her with mobility to encouraging her hobbies and interests, they fostered a sense of dignity and autonomy that was truly inspiring. We couldn't have asked for a better "
        </div>
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
};

export default Home;
