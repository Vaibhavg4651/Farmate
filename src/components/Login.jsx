import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import loader from '../assets/loader.gif';
import { app } from "./sub-components/firebaseConfig";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";

import "react-toastify/dist/ReactToastify.css";
// import "./Login.css";

const Login = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      toast.error("Please provide an email and password", {
        position: "bottom-right",
        theme: "colored",
      });
      return;
    }
    
      setLoading(true);

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential.user);
          setLoading(false);
          navigate("/");
        })
        .catch((error) => {
          toast.error(error.message, {
            position: "bottom-right",
            theme: "colored",
          });
          setLoading(false);
        });
  };

  const googleSubmit = ()=>{
    signInWithPopup(auth, googleProvider).then((res) => {
      console.log(res.user);
      setLoading(false);
      // navigate("/");
    })
    .catch((error) => {
      toast.error(error.message, {
        position: "bottom-right",
        theme: "colored",
      });
      setLoading(false);
    });
  }

  return (
    <>
      <div className="login">
        <form className="login-form">
          <label htmlFor="myemail" className="label-input-login">
            Email
          </label>
          <input
            id="myemail"
            className="login-input"
            autoComplete="off"
            onChange={(e) => {
              setEmail(e.target.value);}}
            type="text"
            placeholder="Email"
          />
          <label htmlFor="mypassword" className="label-input-login">
            Password
          </label>
          <input
            id="mypassword"
            onChange={(e) => {
              setPassword(e.target.value);}}
            className="login-input"
            type="password"
            autoComplete="off"
            placeholder="Password"
          />
          {loading ? (
            <div className="load reg-input-sub">
              <img className="l-i" src={loader} alt="loader" />
            </div>
          ) : (
            <input
              className="reg-input-sub"
              value="Submit"
              onClick={handleSubmit}
              type="submit"
            />
          )}
          <div className="or-div">
            <hr className="or-hr"/>
            <p className="or-text">or</p>
          </div>
          <button className="google-button" onClick={googleSubmit}>
            <img className="google-logo" src="https://img.icons8.com/color/16/000000/google-logo.png" alt="google logo" />
            Sign in with Google
          </button>
          <h4 style={{ 'color': 'black', 'fontFamily': 'cursive','textAlign': 'center' }} className='r-h'> Dont have an account ?<Link to='/register' style={{ 'color': '#00ae8c', 'textDecoration': 'none' }}> Register</Link ></h4>
                </form>
            </div>
            <ToastContainer />

            </>
    )
}
export default Login;