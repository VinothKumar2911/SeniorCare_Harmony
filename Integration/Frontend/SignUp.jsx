// import React, { useState } from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import { NavLink } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';
//   import '../assets/CSS/signup.css';

// const SignUP = () => {

//     const history = useNavigate();

//     const [inpval, setInpval] = useState({
//         name: "",
//         email: "",
//         date: "",
//         password: ""
//     })

   

//     const [data,setData] = useState([]);
//     console.log(inpval);

//     const getdata = (e) => {


//         const { value, name } = e.target;


//         setInpval(() => {
//             return {
//                 ...inpval,
//                 [name]: value
//             }
//         })

//     }

//     const addData = (e) => {
//         e.preventDefault();

//         const { name, email, date, password } = inpval;

//         if (name === "") {
//             toast.error(' name field is requred!',{
//                 position: "top-center",
//             });
//         } else if (email === "") {
//              toast.error('email field is requred',{
//                 position: "top-center",
//             });
//         } else if (!email.includes("@")) {
//              toast.error('plz enter valid email addres',{
//                 position: "top-center",
//             });
//         } else if (date === "") {
//              toast.error('date field is requred',{
//                 position: "top-center",
//             });
//         } else if (password === "") {
//              toast.error('password field is requred',{
//                 position: "top-center",
//             });
//         } else if (password.length < 5) {
//              toast.error('password length greater five',{
//                 position: "top-center",
//             });
//         } else {
//             console.log("data added succesfully");
//             history("/login")
//             localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

//         }
//         const SignUp = () => <div>SignUp Page</div>;
//     }

//     return (
//         <>
           
//                     <div className="left_data mt-3 p-3 sign" >
//                         <h3 className='text-center col-lg-6 signs' style={{color: "black"}}><b>Sign up</b></h3>
//                         <Form className='vv'>
//                             <Form.Group className="mb-3 col-lg-6 " controlId="formBasicEmail">

//                                 <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" style={{ width: '200%' }} />
//                             </Form.Group>
//                             <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

//                                 <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" style={{ width: '200%' }} />
//                             </Form.Group>

//                             <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

//                                 <Form.Control onChange={getdata} name='date' type="date" style={{ width: '200%' }}  />
//                             </Form.Group>

//                             <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

//                                 <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" style={{ width: '200%' }}  />
//                             </Form.Group>
//                             <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
//                                 Submit
//                             </Button>
//                         </Form>
//                         <p className='mt-3 link' style={{color: "black"}}>Already Have an Account <span><NavLink to="/login">Sign In</NavLink></span> </p>
//                     </div>
                    
//                     <ToastContainer />
               
            
//         </>
//     )
// }

// export default SignUP





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const SignUp = () => {
//   const navigate = useNavigate(); 
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/api/v1/auth/register', formData);
//       console.log('Registration successful:', response.data);
//       toast.success('Registration successful!');
    
//       navigate('/login'); 
//     } catch (error) {
//       console.error('Registration error:', error);
//       if (error.response && error.response.status === 500) {
//         if (error.response.data && error.response.data.message && error.response.data.message.toLowerCase().includes('email')) {
//           toast.error('Email is already registered');
//         } else {
//           toast.error('Failed to register. Please try again later.');
//         }
//       } else {
//         toast.error('Failed to register. Please try again later.');
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Name" onChange={handleChange} />
//         <input type="email" name="email" placeholder="Email" onChange={handleChange} />
//         <input type="password" name="password" placeholder="Password" onChange={handleChange} />
//         <button type="submit">Sign Up</button>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// };

// export default SignUp;






import React, { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SignUp = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', formData);
      console.log('Registration successful:', response.data);
      toast.success('Registration successful!');
    
      navigate('/login'); 
    } catch (error) {
      console.error('Registration error:', error);
      if (error.response && error.response.status === 500) {
        if (error.response.data && error.response.data.message && error.response.data.message.toLowerCase().includes('email')) {
          toast.error('Email is already registered');
        } else {
          toast.error('Failed to register. Please try again later.');
        }
      } else {
        toast.error('Failed to register. Please try again later.');
      }
    }
  };

  return (
    <div className="left_data mt-3 p-3 sign">
      <h3 className='text-center col-lg-6 signs' style={{color: "black"}}><b>Sign up</b></h3>
      <Form className='vv' onSubmit={handleSubmit}>
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
          <Form.Control type="text" name='name' onChange={handleChange} placeholder="Enter Your Name" style={{ width: '200%' }} />
        </Form.Group>
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
          <Form.Control type="email" name='email' onChange={handleChange} placeholder="Enter email" style={{ width: '200%' }} />
        </Form.Group>
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicDate">
          <Form.Control onChange={handleChange} name='date' type="date" style={{ width: '200%' }}  />
        </Form.Group>
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
          <Form.Control type="password" name='password' onChange={handleChange} placeholder="Password" style={{ width: '200%' }}  />
        </Form.Group>
        {/* <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
          <Form.Control type="text" name='phone' onChange={handleChange} placeholder="Phone" style={{ width: '200%' }}  />
        </Form.Group>
        <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
          <Form.Control type="text" name='gender' onChange={handleChange} placeholder="Gender" style={{ width: '200%' }}  />
        </Form.Group> */}
        <Button variant="primary" className='col-lg-6' style={{ background: "rgb(67, 185, 127)" }} type="submit">
          Submit
        </Button>
      </Form>
      <p className='mt-3 link' style={{color: "black"}}>Already Have an Account <span><NavLink to="/login">Sign In</NavLink></span> </p>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
