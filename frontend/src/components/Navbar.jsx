// src/components/Navbar.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { logo, menu, close } from "../assets";

const Navbar = ({ isAuthenticated, handleLogout }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > lastScrollTop && scrollTop > 100); // Check if scrolling down and not at the top
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    };
  
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
  
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  const navbarStyle = {
    padding: "10px 20px",
    width: "100%",
    position: "fixed",
    top: scrolled ? "-110px" : 0, // Move navbar off-screen when scrolled down
    zIndex: 1000,
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "top 0.3s",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const linkContainerStyle = {
    display: "flex",
    gap: "30px",
    marginLeft: "auto",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    fontWeight: "bold",
  };

  const linkStyle = {
    color: "#ccc",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
    cursor: "pointer",
  };

  const logoStyle = {
    width: "100px",
    height: "100px",
  };

  const mobileMenuStyle = {
    display: toggle ? "flex" : "none",
    position: "absolute",
    top: "80px",
    right: "20px",
    backgroundColor: "#2a2424",
    padding: "24px",
    borderRadius: "8px",
    minWidth: "140px",
    zIndex: 10,
    flexDirection: "column",
    gap: "10px",
  };

  const authButtonsContainerStyle = {
    marginLeft: "auto",
    display: "flex",
  };

  const authButtonStyle = {
    padding: "10px 20px",
    backgroundColor: "#915EFF",
    color: "#fff",
    border: "none",
    borderRadius: "7px",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s",
    overflow: "hidden",
    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
  };

  return (
    <nav style={navbarStyle}>
      <div style={containerStyle}>
        <Link
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" style={logoStyle} />
        </Link>

        {!isMobile && (
          <div style={linkContainerStyle}>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              style={{ ...linkStyle, color: active === "ABOUT" ? "#fff" : "#ccc" }}
              onClick={() => setActive("ABOUT")}
            >
              ABOUT US
            </ScrollLink>
            <ScrollLink
              to="work"
              smooth={true}
              duration={500}
              style={{ ...linkStyle, color: active === "WORK" ? "#fff" : "#ccc" }}
              onClick={() => setActive("WORK")}
            >
              WORK
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              style={{ ...linkStyle, color: active === "CONTACT" ? "#fff" : "#ccc" }}
              onClick={() => setActive("CONTACT")}
            >
              CONTACT
            </ScrollLink>
          </div>
        )}

        {isMobile && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={toggle ? close : menu}
              alt="menu"
              style={{ width: "28px", height: "28px", cursor: "pointer" }}
              onClick={() => setToggle(!toggle)}
            />

            <div style={mobileMenuStyle}>
              <ScrollLink
                to="about"
                smooth={true}
                duration={200}
                style={linkStyle}
                onClick={() => {
                  setToggle(false);
                  setActive("ABOUT");
                }}
              >
                ABOUT
              </ScrollLink>
              <ScrollLink
                to="work"
                smooth={true}
                duration={200}
                style={linkStyle}
                onClick={() => {
                  setToggle(false);
                  setActive("WORK");
                }}
              >
                WORK
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={200}
                style={linkStyle}
                onClick={() => {
                  setToggle(false);
                  setActive("CONTACT");
                }}
              >
                CONTACT
              </ScrollLink>
            </div>
          </div>
        )}

        <div style={authButtonsContainerStyle}>
        
            <>
              <Link to="login" style={authButtonStyle}>
                Login
              </Link>
              <Link to="register" style={{ ...authButtonStyle, marginLeft: "12px" }}>
                Register
              </Link>
            </>
          
        </div>
      </div>    
    </nav>
  );
};

export default Navbar;
