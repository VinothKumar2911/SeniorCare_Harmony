




import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../assets/CSS/Login.css';  

const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: '',
    password: '',
  });

  const getdata = (e) => {
    const { value, name } = e.target;

    setInpval((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

//   const addData = (e) => {
//     e.preventDefault();

//     const getuserArr = localStorage.getItem('useryoutube');

//     const { email, password } = inpval;

//     if (email === 'admin@example.com' && password === 'admin') {
//       history('/Admindash');
//     } else if (email === '') {
//       toast.error('Email field is required', {
//         position: 'top-center',
//       });
//     } else if (!email.includes('@')) {
//       toast.error('Please enter a valid email address', {
//         position: 'top-center',
//       });
//     } else if (password === '') {
//       toast.error('Password field is required', {
//         position: 'top-center',
//       });
//     } else if (password.length < 5) {
//       toast.error('Password length should be greater than five', {
//         position: 'top-center',
//       });
//     } else {
//       if (getuserArr && getuserArr.length) {
//         const userdata = JSON.parse(getuserArr);
//         const userlogin = userdata.filter(
//           (el) => el.email === email && el.password === password
//         );

//         if (userlogin.length === 0) {
//           alert('Invalid details');
//         } else {
//           console.log('User login successful');
//           localStorage.setItem('user_login', JSON.stringify(userlogin));
//           history('/Details');
//         }
//       }
//     }
//   };
const addData = (e) => {
  e.preventDefault();

  const getuserArr = localStorage.getItem('useryoutube');

  const { email, password } = inpval;

  if (email === 'admin@example.com' && password === 'admin') {
    history('/Admindash');
  } else if (email === '') {
    toast.error('Email field is required', {
      position: 'top-center',
    });
  } else if (!email.includes('@')) {
    toast.error('Please enter a valid email address', {
      position: 'top-center',
    });
  } else if (password === '') {
    toast.error('Password field is required', {
      position: 'top-center',
    });
  } else if (password.length < 5) {
    toast.error('Password length should be greater than five', {
      position: 'top-center',
    });
  } else {
    try {
      // Parse the user data from local storage
      const userdata = JSON.parse(getuserArr || '[]');

      const userlogin = userdata.filter(
        (el) => el.email === email && el.password === password
      );

      if (userlogin.length === 0) {
        alert('Invalid details');
      } else {
        console.log('User login successful');
        localStorage.setItem('user_login', JSON.stringify(userlogin));
        history('/Details');
      }
    } catch (error) {
      console.error('Error parsing user data from local storage:', error);
      // Handle the error, e.g., show an alert or redirect to an error page
    }
  }
};


  return (
    <>
      <div className="left_data mt-3 p-90 justify-content-center align-items-center vh-90">
        <Form className="zz">
          <h3 className="text-center col-lg-6 aa flex">
            <b>Sign In</b>
          </h3>

          <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              onChange={getdata}
              placeholder="Enter email"
              style={{ width: '200%' }} 
            />
          </Form.Group>

          <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              onChange={getdata}
              placeholder="Password"
              className="mb-3 "
              style={{ width: '200%' }} 
            />
          </Form.Group>

          <Button
            variant="primary"
            className="col-lg-6"
            onClick={addData}
            style={{ background: 'rgb(67, 185, 127)' }}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>

      <ToastContainer />
    </>
  );
};

export default Login;
