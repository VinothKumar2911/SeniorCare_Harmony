

// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';
// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import '../assets/CSS/Login.css';  
// import { useDispatch } from 'react-redux';
// import { login } from './reducer';



// const Login = () => {
//   const history = useNavigate();
//   const dispatch = useDispatch();

//   const [inpval, setInpval] = useState({
//     email: '',
//     password: '',
//   });

//   const getdata = (e) => {
//     const { value, name } = e.target;

//     setInpval((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };


// const addData = (e) => {
//   e.preventDefault();

//   const getuserArr = localStorage.getItem('useryoutube');

//   const { email, password } = inpval;

//   if (email === 'admin@example.com' && password === 'admin') {
//     history('/Admindash');
//   } else if (email === '') {
//     toast.error('Email field is required', {
//       position: 'top-center',
//     });
//   } else if (!email.includes('@')) {
//     toast.error('Please enter a valid email address', {
//       position: 'top-center',
//     });
//   } else if (password === '') {
//     toast.error('Password field is required', {
//       position: 'top-center',
//     });
//   } else if (password.length < 5) {
//     toast.error('Password length should be greater than five', {
//       position: 'top-center',
//     });
//   } else {
//     try {
//       const userdata = JSON.parse(getuserArr || '[]');
//       const userlogin = userdata.filter(
//         (el) => el.email === email && el.password === password
//       );

//       if (userlogin.length === 0) {
//         alert('Invalid details');
//       } else {
//         console.log('User login successful');
//         localStorage.setItem('user_login', JSON.stringify(userlogin));
//         history('/');
//         console.log(email)
//         dispatch(login({username:email})); 
//       }
//     }
//      catch (error) {
//       console.error('Error parsing user data from local storage:', error);
//     }
//   }
//   if (userlogin.length > 0) {
//     dispatch(setLoggedInUserEmail(email));
//   }
// };
// const handleLogout = () => {
//   localStorage.removeItem('user_login');
//   history('/login');
// };


//   return (
//     <>
//       <div className="left_data mt-3 p-90 justify-content-center align-items-center vh-90">
//         <Form className="zz">
//           <h3 className="text-center col-lg-6 aa flex">
//             <b>Sign In</b>
//           </h3>

//           <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
//             <Form.Control
//               type="email"
//               name="email"
//               onChange={getdata}
//               placeholder="Enter email"
//               style={{ width: '200%' }} 
//             />
//           </Form.Group>

//           <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
//             <Form.Control
//               type="password"
//               name="password"
//               onChange={getdata}
//               placeholder="Password"
//               className="mb-3 "
//               style={{ width: '200%' }} 
//             />
//           </Form.Group>

//           <Button
//             variant="primary"
//             className="col-lg-6"
//             onClick={addData}
//             style={{ background: 'rgb(67, 185, 127)' }}
//             type="submit"
//           >
//             Submit
//           </Button>
//         </Form>

//       </div>

//       <ToastContainer />
//     </>
//   );
// };

// export default Login;






// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';
// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import '../assets/CSS/Login.css';  
// import { useDispatch } from 'react-redux';
// import { login } from './reducer';

// const Login = () => {
//   const history = useNavigate();
//   const dispatch = useDispatch();
//   const [inpval, setInpval] = useState({
//     email: '',
//     password: '',
//   });

//   const getdata = (e) => {
//     const { value, name } = e.target;
//     setInpval((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const addData = async (e) => {
//     e.preventDefault();
//     const { email, password } = inpval;

//     if (email === 'admin@example.com' && password === 'admin') {
//       history('/Admindash');
//     } else if (email === '') {
//       toast.error('Email field is required', { position: 'top-center' });
//     } else if (!email.includes('@')) {
//       toast.error('Please enter a valid email address', { position: 'top-center' });
//     } else if (password === '') {
//       toast.error('Password field is required', { position: 'top-center' });
//     } else if (password.length < 5) {
//       toast.error('Password length should be greater than five', { position: 'top-center' });
//     } else {
//       try {
//         const userdata = JSON.parse(localStorage.getItem('useryoutube') || '[]');
//         const userlogin = userdata.filter((el) => el.email === email && el.password === password);

//         if (userlogin.length === 0) {
//           alert('Invalid details');
//         } else {
//           console.log('User login successful');
//           localStorage.setItem('user_login', JSON.stringify(userlogin));
//           history('/');
//           dispatch(login({ username: email }));
//           dispatch(setLoggedInUserEmail(email)); // Dispatch here
//         }
//       } catch (error) {
//         console.error('Error parsing user data from local storage:', error);
//         toast.error('Failed to login. Please try again later.', { position: 'top-center' });
//       }
//     }
//   };

//   return (
//     <>
//       <div className="left_data mt-3 p-90 justify-content-center align-items-center vh-90">
//         <Form className="zz" onSubmit={addData}> {/* Added onSubmit event */}
//           <h3 className="text-center col-lg-6 aa flex">
//             <b>Sign In</b>
//           </h3>
//           <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
//             <Form.Control
//               type="email"
//               name="email"
//               onChange={getdata}
//               placeholder="Enter email"
//               style={{ width: '200%' }} 
//             />
//           </Form.Group>
//           <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
//             <Form.Control
//               type="password"
//               name="password"
//               onChange={getdata}
//               placeholder="Password"
//               className="mb-3 "
//               style={{ width: '200%' }} 
//             />
//           </Form.Group>
//           <Button
//             variant="primary"
//             className="col-lg-6"
//             style={{ background: 'rgb(67, 185, 127)' }}
//             type="submit"
//           >
//             Submit
//           </Button>
//         </Form>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default Login;






// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';
// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import '../assets/CSS/Login.css';  
// import { useDispatch } from 'react-redux';
// import { login } from './reducer';

// const Login = () => {
//   const history = useNavigate();
//   const dispatch = useDispatch();
//   const [inpval, setInpval] = useState({
//     email: '',
//     password: '',
//   });

//   const getdata = (e) => {
//     const { value, name } = e.target;
//     setInpval((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const addData = async (e) => {
//     e.preventDefault();
//     const { email, password } = inpval;

//     if (email === 'admin@example.com' && password === 'admin') {
//       history('/Admindash');
//     } else if (email === '') {
//       toast.error('Email field is required', { position: 'top-center' });
//     } else if (!email.includes('@')) {
//       toast.error('Please enter a valid email address', { position: 'top-center' });
//     } else if (password === '') {
//       toast.error('Password field is required', { position: 'top-center' });
//     } else if (password.length < 5) {
//       toast.error('Password length should be greater than five', { position: 'top-center' });
//     } else {
//       try {
//         const userdata = JSON.parse(localStorage.getItem('useryoutube') || '[]');
//         const userlogin = userdata.filter((el) => el.email === email && el.password === password);

//         if (userlogin.length === 0) {
//           alert('Invalid details');
//         } else {
//           console.log('User login successful');
//           localStorage.setItem('user_login', JSON.stringify(userlogin));
//           history('/');
//           dispatch(login({ username: email }));
//           // Dispatch here if needed
//         }
//       } catch (error) {
//         console.error('Error parsing user data from local storage:', error);
//         toast.error('Failed to login. Please try again later.', { position: 'top-center' });
//       }
//     }
//   };

//   return (
//     <>
//       <div className="left_data mt-3 p-90 justify-content-center align-items-center vh-90">
//         <Form className="zz" onSubmit={addData}> {/* Added onSubmit event */}
//           <h3 className="text-center col-lg-6 aa flex">
//             <b>Sign In</b>
//           </h3>
//           <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
//             <Form.Control
//               type="email"
//               name="email"
//               onChange={getdata}
//               placeholder="Enter email"
//               style={{ width: '200%' }} 
//             />
//           </Form.Group>
//           <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
//             <Form.Control
//               type="password"
//               name="password"
//               onChange={getdata}
//               placeholder="Password"
//               className="mb-3 "
//               style={{ width: '200%' }} 
//             />
//           </Form.Group>
//           <Button
//             variant="primary"
//             className="col-lg-6"
//             style={{ background: 'rgb(67, 185, 127)' }}
//             type="submit"
//           >
//             Submit
//           </Button>
//         </Form>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// export default Login;



import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../assets/CSS/Login.css';  
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from './reducer';

const Login = () => {
  const history = useNavigate();
    const dispatch = useDispatch();
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

  const addData = async (e) => {
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
      const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', { email, password });
      localStorage.setItem("logged","true");

      console.log('Login successful:', response.data);
      toast.success('Login successful');
      dispatch(login({username:email})); 
      history('/');

    } catch (error) {
      console.error('Login error:', error);
      if (error.response && error.response.status === 401) {
        toast.error('Invalid email or password');
      } else {
        toast.error('Failed to login. Please try again later.');
      }
    }
  }
  };

  return (
    <>
      <div className="left_data mt-3 p-90 justify-content-center align-items-center vh-90">
        <Form className="zz" onSubmit={addData}> 
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
