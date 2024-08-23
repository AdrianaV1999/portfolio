import React, { useEffect } from "react";
import "./hero.scss";
import { motion, useAnimation } from "framer-motion";
import Hero1 from "./hero.png";
import Scroll from "./scroll.png";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const imageContainerVariants = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: 47,
    transition: {
      duration: 0.8,
    },
  },
};

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="imageContainer"
          variants={imageContainerVariants}
          initial="initial"
          animate={controls}
        >
          <img src={Hero1} alt="Hero" />
        </motion.div>
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>
            Web & UI{" "}
            <b>
              <span style={{ color: "#BBFAF9", fontWeight: "900" }}>
                Design
              </span>
            </b>
          </motion.h1>
          <motion.h2 variants={textVariants}>
            I'm <span style={{ color: "#BBFAF9" }}>Adriana</span>, a skilled Web
            and User Interface Designer with a strong passion for creating
            user-friendly, innovative, and engaging design solutions.
          </motion.h2>

          <div className="buttons">
            <a href="#Projects">
              <button> Projects</button>
            </a>
            <a href="#Contact">
              <button>Contact</button>
            </a>
          </div>

          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={Scroll}
            alt=""
          />
        </motion.div>

        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Web Design UI Design
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
