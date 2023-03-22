import "./App.css";
import React, {useRef} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Help from "./components/Help";
import Login from "./components/Login";
import Register from "./components/Register";
import Error from "./components/sub-components/Error";
import { UserAuthContextProvider } from "./components/context/UserAuthContext";
import Footer from "./components/sub-components/Footer";
function App() {
  const footerRef = useRef(null);

  const handleContactClick = () => {
    footerRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <UserAuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/help" element={<Help />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
