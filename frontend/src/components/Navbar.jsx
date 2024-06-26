import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";  // Import the Link component from react-scroll
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
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
    top: 0,
    zIndex: 1000,
    backgroundColor: scrolled ? "#000" : "transparent",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "background-color 0.3s",
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
      </div>
    </nav>
  );
};

export default Navbar;
