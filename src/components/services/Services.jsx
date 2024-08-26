import React, { useEffect, useState, useRef } from "react";
import "./services.scss";
import { FaFigma, FaCss3Alt, FaHtml5, FaJs, FaWordpress } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import Girl from "./girl.png";

const Hero = () => {
  const [visible, setVisible] = useState({
    imageContainer: false,
    textContainer: false,
    technologiesContainer: false,
  });

  const imageRef = useRef(null);
  const textRef = useRef(null);
  const techRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          if (target === imageRef.current) {
            setVisible((prev) => ({ ...prev, imageContainer: true }));
            setTimeout(() => {
              if (textRef.current)
                setVisible((prev) => ({ ...prev, textContainer: true }));
            }, 500);
            setTimeout(() => {
              if (techRef.current)
                setVisible((prev) => ({
                  ...prev,
                  technologiesContainer: true,
                }));
            }, 1000);
            observer.unobserve(target);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <div className="heroo">
      <div className="wrapperr">
        <div
          className="imageContainer"
          ref={imageRef}
          style={{
            opacity: visible.imageContainer ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <img src={Girl} alt="Girl" />
        </div>
        <div
          className="textContainer"
          ref={textRef}
          style={{
            opacity: visible.textContainer ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <h1>
            <b>About Me </b>
          </h1>
          <p>
            My full name is{" "}
            <span style={{ color: "#fbcfff" }}>
              <b>Adriana Vasovic</b>
            </span>
            . I mostly design{" "}
            <span style={{ color: "#BBFAF9" }}>
              <b>landing pages</b>,{" "}
            </span>
            <span style={{ color: "#BBFAF9" }}>
              <b>websites</b>
            </span>
            ,{" "}
            <span style={{ color: "#BBFAF9" }}>
              <b>web applications</b>
            </span>{" "}
            and{" "}
            <span style={{ color: "#BBFAF9" }}>
              <b>mobile applications</b>
            </span>
            . I aim to make designs visually appealing and ensure that colors
            are well-coordinated with the site's theme. My primary focus is on
            creating{" "}
            <span style={{ color: "#fbcfff" }}>
              <b>positive experiences</b>
            </span>{" "}
            for users, striving to make their interactions as enjoyable and
            seamless as possible. My other interests include animals, nature,
            music, hiking, and photography.
          </p>
        </div>
        <div
          className="technologiesContainer"
          ref={techRef}
          style={{
            opacity: visible.technologiesContainer ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <h2>Main Tech Stack</h2>
          <div className="icons">
            <FaFigma />
            <SiAdobephotoshop />
            <FaCss3Alt />
            <FaHtml5 />
            <FaJs />
            <FaWordpress />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
