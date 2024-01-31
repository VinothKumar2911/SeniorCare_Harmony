import bg9 from '../assets/images/img10.jpg';
import bg10 from '../assets/images/img12.jpg';
import bg11 from '../assets/images/img13.jpg';
import bg12 from '../assets/images/img14.jpg';
import bg13 from '../assets/images/img15.jpg';
import bg15 from '../assets/images/img17.png';
import bg14 from '../assets/images/img16.jpg';
import bg19 from '../assets/images/img20.jpg';
import bg20 from '../assets/images/img21.jpg';
import bg21 from '../assets/images/img22.jpg';
import bg22 from '../assets/images/img23.jpg';
import bg23 from '../assets/images/img24.jpg';
import bg24 from '../assets/images/img25.jpg';
import bg25 from '../assets/images/img26.jpg';
import bg26 from '../assets/images/img27.jpg';
import bg27 from '../assets/images/img28.jpg';
import bg28 from '../assets/images/img29.jpg';
import bg16 from '../assets/images/img18.png';
import bg17 from '../assets/images/img19.png';
import b1 from '../assets/images/img11.png';
import vid2 from '../assets/videos/Soap.gif';
import vid3 from '../assets/videos/health.gif';
import vid4 from '../assets/videos/frnd.gif';
import vid5 from '../assets/videos/food.gif';
import vid6 from '../assets/videos/mop.gif';
import vid7 from '../assets/videos/car.gif';
import '../assets/CSS/Service.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const Service = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const handleOnChange = (index) => {
    setSlideIndex(index);
  };

  const imageStyles = {
    width: '100%',
    height: 'auto',
    display: 'block',
  };
    const [formData, setFormData] = useState({
      service: '',
      date: '',
      time: '',
      gender: '',
      numPersons: '',
      ageGroup: '',
      address: '',
      phone: ''
    });
  
    const [confirmation, setConfirmation] = useState(false);
    const [errors, setErrors] = useState({});
  
    const validateForm = (data) => {
        const errors = {};
      
        if (!data.service) errors.service = 'Service is required';
      
        if (!data.date) errors.date = 'Date is required';
      
        if (!data.time) errors.time = 'Time is required';
      
        if (!data.gender) errors.gender = 'Gender is required';
      
        if (!data.numPersons) errors.numPersons = 'Number of persons is required';
        else if (isNaN(data.numPersons) || data.numPersons <= 0) {
          errors.numPersons = 'Number of persons must be a positive number';
        }
      
        if (!data.ageGroup) errors.ageGroup = 'Age group is required';
      
        if (!data.address) errors.address = 'Address is required';
      
        if (!data.phone) errors.phone = 'Phone number is required';
        else if (!/^\d{10}$/.test(data.phone)) errors.phone = 'Invalid phone number';
      
        return errors;
      };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const formErrors = validateForm(formData);
      if (Object.keys(formErrors).length === 0) {
        setConfirmation(true);
        // Reset form after submission
        setFormData({
          service: '',
          date: '',
          time: '',
          gender: '',
          numPersons: '',
          ageGroup: '',
          address: '',
          phone: ''
        });
        setErrors({});
        setConfirmation(true);
        history.push('/user-dashboard');
      } else {
        const errorMessage = Object.values(formErrors).join('\n');
        alert(errorMessage);
        setErrors(formErrors);
      }
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const hrStyle = {
        border: '1px solid #4F6F52',  
        margin: '10px 500px 10px',
        width:'50%',
        
        
      };
  return (
    <div>
       {/* <hr style={hrStyle} /> */}
       

       <div className="slider-container">
  <img src={bg9} alt="Image 1" style={imageStyles} />
  <div className="slider-content">
    <Carousel
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={2000} 
      showBullets={true}
      selectedItem={slideIndex}
      onChange={handleOnChange}
      emulateTouch={true}
      infiniteLoop={true} 
    >
      <div className="text-slide">
        <h2>Caring Beyond Boundaries: Your Trusted Partner in Home Services</h2>
      </div>
      <div className="text-slide">
        <h2>Empathy in Every Service: Enhancing Lives Through Compassionate Care.</h2>
      </div>
      <div className="text-slide">
        <h2>Service Excellence, Heartfelt Care: Where Your Comfort is Our Priority</h2>
      </div>
    </Carousel>
  </div>
</div>





       <div className='a1'>
       <h2 className='head11'>Our Home Care Service</h2>
       <p className='head12'>"Our home care service center is dedicated to providing exceptional care and support to individuals in need.<br></br> 
       With a team of compassionate professionals, we offer personalized assistance, ensuring comfort and well-being for our clients."</p>
       </div>
       <div className="grid-container">
  <div className="image-row">
    <div className="image-wrapper">
      <img src={bg19} alt="Image 1" className="image" />
      <div className="image-text">Personal Care</div>
    </div>
    <div className="image-wrapper">
      <img src={bg20} alt="Image 2" className="image" />
      <div className="image-text">Medication</div>
    </div>
    <div className="image-wrapper">
      <img src={bg21} alt="Image 3" className="image" />
      <div className="image-text">Travel</div>
    </div>
  </div>
  <div className="image-row">
    <div className="image-wrapper">
      <img src={bg22} alt="Image 4" className="image" />
      <div className="image-text">Light Housekeeping</div>
    </div>
    <div className="image-wrapper">
      <img src={bg23} alt="Image 5" className="image" />
      <div className="image-text">food/Meal</div>
    </div>
    <div className="image-wrapper">
      <img src={bg24} alt="Image 6" className="image" />
      <div className="image-text">Comapnionship</div>
    </div>
  </div>
</div>


<div class="grid-container1">
  <div class="custom-list-item">
    <div class="custom-image-container">
    <img src={vid2} alt="Icon" class="custom-icon" />
    </div>
    <div class="custom-text-container">
      <h3>Personal Care</h3>
      <p>Providing compassionate and professional personal care services to enhance your loved one's well-being.</p>
    </div>
  </div>
  <div class="custom-list-item">
    <div class="custom-image-container">
    <img src={vid3} alt="Icon" class="custom-icon" />
    </div>
    <div class="custom-text-container">
      <h3>Medication</h3>
<p>Administering prescribed medications promptly and accurately to ensure proper health management and recovery</p>    </div>
  </div>
  <div class="custom-list-item">
    <div class="custom-image-container">
    <img src={vid4} alt="Icon" class="custom-icon" />
    </div>
    <div class="custom-text-container">
      <h3>Comapanionship</h3>
<p>Professional companionship services offering emotional support, engagement, and meaningful interactions for enhanced well-being</p>    </div>
  </div>
  <div class="custom-list-item">
    <div class="custom-image-container">
    <img src={vid5} alt="Icon" class="custom-icon" />
    </div>
    <div class="custom-text-container">
      <h3>Meal</h3>
<p>Offering nutritious and customized meal preparation services to support optimal health and wellness.</p>    </div>
  </div>
  <div class="custom-list-item">
    <div class="custom-image-container">
    <img src={vid7} alt="Icon" class="custom-icon" />
    </div>
    <div class="custom-text-container">
      <h3>Transportation</h3>
<p>Reliable transportation assistance for medical appointments, errands, and social outings, ensuring comfort and safety</p>    </div>
  </div>
  <div class="custom-list-item">
    <div class="custom-image-container">
    <img src={vid6} alt="Icon" class="custom-icon" />
    </div>
    <div class="custom-text-container">
      <h3>Housekeeping</h3>
<p>Efficient housekeeping services ensuring a clean, organized, and comfortable living environment for clients' satisfaction</p>    </div>
  </div>
  </div>


  <div className="container">
  <div className="booking-form-container">
  <div className="booking-form-box">
      <h3 className='hh'><b>Book Your Service !! Now</b></h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="service-select">Select Service:</label>
          <select id="service-select" name="service" value={formData.service} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="personal-care">Personal Care</option>
            <option value="meal-preparation">Meal Preparation</option>
            <option value="medication">Medication</option>
            <option value="transportation">Transportation</option>
            <option value="companionship">Companionship</option>
            <option value="housekeeping">Housekeeping</option>
          </select>
          {errors.service && <span className="error">{errors.service}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="gender-select">Gender:</label>
          <select id="gender-select" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="num-person">Number of Persons:</label>
          <input type="number" id="num-person" name="numPersons" value={formData.numPersons} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="age-group">Age Group:</label>
          <select id="age-group" name="ageGroup" value={formData.ageGroup} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="old-age">Old Age Person</option>
            <option value="caretaker">Caretaker</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea id="address" name="address" value={formData.address} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <button type="submit" className="book-button">Book</button>
      </form>
      {confirmation && <div className="confirm-booking-box">Your service has been booked successfully!</div>}
 
      </div>
    </div>
    </div>

    <div className="parallax-container">
      <img src={bg10} alt="Example" className="parallax-bg" />
      <div className="parallax-text">
        <h1>We Provide Quality Home Care & Private Nursing Service</h1>
        <p>
         
"Book Appointments Now for Professional Care and Services!"
        </p>
      </div>
    </div>

   <div className="consultation-container">
  <div className="consultation-text">
    <h2 className='head111'>We Are Available For Home Care Consultation</h2>
    <p className='head122'>
     
We provide thorough home care consultation services tailored to your needs.<br></br> Contact us now for expert guidance 
and customized care solutions to meet<br></br> your unique requirements and preferences.
    </p>
  </div>
  <div className="consultation-image">
  <img src={bg11} alt="Example" className="parallax-bgg" />

  </div>
</div>

<img src={bg12} alt="Example" className="" width="1900px" height="500px"/>


<h2 className='z'>Explore diverse care options tailored to individual needs.</h2>
<div class="image-grid1">
  <div class="image-wrapper1">
    <img src={bg13} alt="Example" class="circle-image1" />
    <div class="image-text1">Comprehensive</div>
  </div>
  <div class="image-wrapper1">
    <img src={bg14} alt="Example" class="circle-image1" />
    <div class="image-text1">Personalized</div>
  </div>
  <div class="image-wrapper1">
    <img src={bg15} alt="Example" class="circle-image1" />
    <div class="image-text1">Professional</div>
  </div>
  <div class="image-wrapper1">
    <img src={bg16} alt="Example" class="circle-image1" />
    <div class="image-text1">Reliable</div>
  </div>
</div>
<div className="circle1">
  <img src={bg17} alt="Example" className="circle1-image" />
</div>

<h2 className='head11'>Elevating Lives Through Compassionate Care</h2>
       <p className='head12'>
       At our core, we're committed to enhancing lives through tailored home care solutions. With a focus on compassion and expertise, <br>
       </br>our team offers comprehensive services designed to meet your unique needs. From personalized support to attentive care, we're dedicated<br>
       </br> to providing comfort, dignity, and peace of mind to every individual we serve. Experience the difference with us today
       </p>





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


    </div>
  );
};

export default Service;
