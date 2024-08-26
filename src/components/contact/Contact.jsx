import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./contact.scss";
import emailjs from "@emailjs/browser";
import Contact1 from "./contact.png";

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const style = {
    color: "#FFDBFA",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowImage(true);

          const imageTimer = setTimeout(() => {
            setShowImage(false);
            const formTimer = setTimeout(() => {
              setShowForm(true);
            }, 300);

            return () => clearTimeout(formTimer);
          }, 2700);
          observer.disconnect();
          return () => clearTimeout(imageTimer);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bo0t4ps",
        "template_swzxjc6",
        formRef.current,
        "LyWFge9hTmflfFF49"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="contact">
      <div ref={ref} className="contactContent">
        <div className="textContainer">
          <h1>
            Contact me via{" "}
            <b>
              <span style={{ color: "#BBFAF9", fontWeight: "900" }}>email</span>
            </b>
          </h1>
          <div className="item">
            <h2>Mail</h2>
            <p>
              <span style={{ color: "#ffffff" }}>adrianav12899@gmail.com</span>
            </p>
          </div>
          <div className="item"></div>
        </div>
        <div className="formContainer">
          {showImage && (
            <motion.div
              className="phoneSvg"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              exit={{ opacity: 0, y: 50 }}
              style={{
                width: "78%",
                height: "auto",
                marginLeft: isMobile ? "50px" : "135px",
              }}
            >
              <img
                src={Contact1}
                alt="Description of image"
                style={{ width: "80%", height: "80%" }}
              />
            </motion.div>
          )}{" "}
          {showForm && (
            <motion.form
              ref={formRef}
              onSubmit={sendEmail}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <input type="text" required placeholder="Name" name="name" />
              <input type="email" required placeholder="Email" name="email" />
              <textarea rows={8} placeholder="Message" name="message" />
              <button>Submit</button>
              {!error && !success && (
                <p style={style}>
                  Please contact me directly at adrianav12899@gmail.com or
                  through this form.
                </p>
              )}

              {error && <p style={style}>Error sending email</p>}
              {success && <p style={style}>Email successfully sent</p>}
            </motion.form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
