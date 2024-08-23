import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import "./navbar.scss";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const gradientTextStyle = {
  fontFamily: "'Sail', cursive",
  width: "100%",
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ isMobile, toggleSidebar }) => {
  const items = ["Home", "About", "Projects", "Contact"];

  return isMobile ? (
    <motion.div
      className={`sidebar ${isMobile ? "open" : ""}`}
      variants={variants}
      initial="closed"
      animate={isMobile && "open"}
    >
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleSidebar}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  ) : (
    <motion.div
      className="links"
      variants={variants}
      initial="closed"
      animate="open"
    >
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

const Navbar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <motion.span
          className="logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="https://adrianav1999.github.io/portfolio/">
            <h3> Adriana</h3>
          </a>
        </motion.span>
        {!isMobile ? (
          <Links isMobile={false} />
        ) : (
          <>
            <button onClick={toggleSidebar} className="sidebar-toggle">
              ☰
            </button>
            {isSidebarOpen && (
              <Links isMobile={true} toggleSidebar={toggleSidebar} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
