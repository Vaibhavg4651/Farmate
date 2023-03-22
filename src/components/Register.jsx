
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import loader from '../assets/loader.gif';
import { useUserAuth } from "./context/UserAuthContext";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ error, setError] = useState("");
  const [loading, setloading] = useState(false)
  const { signUp} = useUserAuth();

  let navigate = useNavigate();


  const submithandler = async (e) => {
    e.preventDefault();
    setError("");
    if (!name ||!email || !password) {
      toast.error("Please provide an email and password", {
        position: "bottom-right",
        theme: "colored",
      });
      return;
    }
      setloading(true);
      try{
        await signUp(email,password);
        setloading(false)
        navigate("/");
      } catch(error){
        setError(error.message);
        setloading(false);
      };
    
  };
  

  return (
    <>
      <div className="register">
        <form className="reg-form">
          <label htmlFor="myname" className="label-input-reg">
            Name
          </label>
          <input
            id="myname"
            className="login-input"
            autoComplete="off"
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="john doe"
          />
          <label htmlFor="myemail" className="label-input-reg">
            Email
          </label>
          <input
            id="myemail"
            className="login-input"
            autoComplete="off"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="johndoe@example.com"
          />
          <label htmlFor="mypassword" className="label-input-reg">
            Password
          </label>
          <input
            id="mypassword"
            className="reg-input"
            autoComplete="off"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="text"
            placeholder="Top secret"
          />

          {loading ? (
            <div className="load reg-input-sub">
              <img className="l-i" src={loader} alt="loader" />
            </div>
          ) : (
            <input
              className="reg-input-sub"
              value="Submit"
              onClick={submithandler}
              type="submit"
            />
          )}
          <h4
            style={{
              color: "black",
              fontFamily: "cursive",
              textAlign: "center",
            }}
            className="r-h"
          >
            {" "}
            Already have an account ?
            <Link
              to="/login"
              style={{ color: "#00ae8c", textDecoration: "none" }}
            >
              {" "}
              Login
            </Link>
          </h4>
        </form>
      </div>
     <ToastContainer/>
    </>
  );
};

export default Register;
