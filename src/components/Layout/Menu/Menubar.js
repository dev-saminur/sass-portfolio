"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../../../public/svg/Logo";
import MenuData from "@/Data/MenuData";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
// import { HiMenuAlt2 } from "react-icons/hi";
const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});
const Menubar = () => {
  const [showNav, setShowNav] = useState(false);
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="header-menu">
        <Navbar
          expand="lg"
          style={{ transition: { duration: 0.4 } }}
          className={showNav ? "navbar stickynav" : "navbar"}
          // className="stickynav"
        >
          <Container>
            <Link href="#">
              <Logo />
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="nav-item mx-auto my-2 my-lg-0 px-2"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                {MenuData?.map((menu, i) => (
                  <Link
                    key={i}
                    className={DmSans.className + " " + "mx-3"}
                    href={menu.url}
                  >
                    {menu.link}
                  </Link>
                ))}
              </Nav>

              <motion.button
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.4 },
                }}
                whileTap={{ scale: 1 }}
                className={DmSans.className}
              >
                Contact Now
              </motion.button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Menubar;
