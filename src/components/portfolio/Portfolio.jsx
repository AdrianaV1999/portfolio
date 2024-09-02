import { useRef, useState } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import HealthcareImage from "./Healthcare.png";
import BodyMistVideo from "./BodyMist.mp4";
import VideoGame from "./VideoGame.png";
import Seoul from "./Seoul.mp4";
import DigitalArt from "./digitalart.png";
import SoftwareCompany from "./SoftwareCompany.mp4";
import Converse from "./ConverseAllStar.png";
import CakeShop from "./CakeShop.mp4";
import TechnologyApp from "./TechnologyApp.png";
import PetShopApp from "./PetShopApp.png";
import MusicApp from "./MusicApp.png";
import WeatherApp from "./WeatherApp.png";
import Fashion from "./Fashion.png";

const items = [
  {
    id: 1,
    title: "Healthcare App",
    img: HealthcareImage,
    desc: "The Healthcare App is designed with a clean and modern aesthetic, utilizing a calming palette of blue shades paired with white to create user-friendly interface. The design strategically highlights key functionalities, making them easily accessible and noticeable for users. Custom icons are used to represent dietary elements, while vector illustrations of doctors and patients provide a professional yet approachable visual experience. The consistent use of blue and white throughout the app not only enhances readability but also aligns with the healthcare industry’s emphasis on trust and care.",
  },

  {
    id: 3,
    title: "Music App",
    img: MusicApp,
    desc: "The Music App features a sophisticated design with a deep navy blue backdrop, accentuated by crisp white text for optimal readability and contrast. The user interface incorporates various shades of blue and purple, adding depth and vibrancy to the visual experience. Unique, modern controls are designed for volume adjustment, showcasing an innovative and engaging form. Additionally, the playback bar is highlighted with a gradient blend of purple and blue, visually enhancing the music playback experience. This design offers a visually appealing look while maintaining a smooth and user-friendly experience.",
  },
  {
    id: 4,
    title: "Tech Shop App",
    img: TechnologyApp,
    desc: "The Technology Store App features a sleek and minimalist design that ensures the focus remains on the products. Utilizing a calming palette of light blue and soft white, the app provides a clean  and distraction-free browsing experience. The intuitive layout and subtle color scheme enhance usability, allowing users to easily explore and shop for technology products without unnecessary visual clutter.",
  },
  {
    id: 5,
    title: "Pet Shop App",
    img: PetShopApp,
    desc: "The Pet Shop App boasts a playful design, featuring a white background that ensures a clean and fresh look. The app incorporates rounded elements in various soft colors, adding a touch of vibrancy and warmth. Vector illustrations of animal paws and various pet icons are used throughout the interface, making it easy for users to identify products for different types of pets. The dominant orange color accentuates key features and elements, creating an inviting and lively atmosphere that appeals to animal lovers.",
  },
  {
    id: 13,
    title: "Fashion Web Shop",
    img: Fashion,
    desc: "The Fashion Web Shop features a sleek and modern design with a clean white background that allows the elements to stand out sharply. The title of the featured product is displayed prominently in a bold, dark turquoise color, matching the call-to-action button just below it. This color choice contrasts effectively against the white background, ensuring the product name catches the viewer's attention immediately. Below the title, a concise description of the product is written in a deep black font, providing a clear and easy-to-read summary that highlights the key features and benefits.",
  },
  {
    id: 2,
    title: "Cake Web Shop",
    video: CakeShop,
    desc: "The Cake Shop landing page radiates warmth with its light red and bright orange design. The hero section prominently features a beautifully crafted cake, setting a delightful tone. Unique cards showcase featured cakes, while icons and guiding lines subtly highlight why customers should choose this shop. An enlarged customer review section builds trust, and a distinct contact form stands out for easy interaction. Emphasizing the quality of home-made products, this design offers a professional and welcoming experience for customers.",
  },

  {
    id: 7,
    title: "Women's Secret Page Redesign",
    video: BodyMistVideo,
    desc: "The redesigned Women's Secret Body Mist page features a harmonious blend of delicate colors that complement the essence of the mist. A unique animation captures attention, seamlessly transitioning the mist to the next page. The composition is presented in an engaging table format, with each ingredient listed alongside a charming heart icon, adding elegance and appeal. This design enhances visual interest and provides an inviting, interactive experience for users.",
  },
  {
    id: 8,
    title: "Travel Website",
    video: Seoul,
    desc: "The design for the travel website to Seoul features a sleek dark background that sets a modern and sophisticated tone. It includes an eye-catching animation that captures users' attention and highlights key destinations in Seoul. This animation enhances the visual impact of the site and seamlessly guides visitors through important attractions. The contrast between the dark theme and vibrant visuals ensures that each destination is prominently displayed, creating a dynamic user experience.",
  },
  {
    id: 6,
    title: "Software Company Website",
    video: SoftwareCompany,
    desc: "The landing page for a software company features a sleek and minimalist design in various shades of blue, establishing a professional appearance. Subtle gradients highlight key sections, while bright blue accents emphasize critical elements and capture user focus. Engaging animations on the title and key text sections add an interactive touch, enhancing the user experience. Clear navigation and well-organized content guide visitors smoothly through the essential aspects of the software solutions, ensuring an effective and user-friendly experience. ",
  },
  {
    id: 9,
    title: "Digital Art Website",
    img: DigitalArt,
    desc: "The design of the Digital Art Website features an unusually designed title that immediately captures attention. The background of the site is a dynamic digital art piece, showcasing a blend of various shades of blue and purple. This visually engaging backdrop not only highlights the theme of digital art but also creates a vibrant and immersive environment for visitors. The unique title design complements the digital artwork, reinforcing the site's focus on digital creativity and providing a visually stunning introduction to the portfolio.",
  },
  {
    id: 10,
    title: "Video Game App",
    img: VideoGame,
    desc: "The design of the Video Game App features a sleek black background that provides a modern and immersive experience. Text and key elements are highlighted with bright, attention-grabbing colors to ensure readability and engagement. All interface elements are presented in a clean and straightforward manner, making them easily recognizable and user-friendly. Important features and calls to action are accentuated with vibrant green and blue accents, drawing focus and enhancing the overall visual appeal of the app. The careful balance of dark and vibrant colors creates a visually striking contrast that ensures important elements are easily discernible in various lighting conditions.",
  },
  {
    id: 12,
    title: "Weather App",
    img: WeatherApp,
    desc: "The Weather App is designed in subtle blue tones that align with the winter season, enhancing the overall theme. The digital art clearly depicts snowy weather, with serene images of snowflakes and wintry landscapes that change based on real-time conditions. It features a diagram displaying the hourly forecast for the day and clear icons in a complementary blue hue that match the digital art, with each icon accurately representing the weather conditions. Additionally, a 7-day forecast provides a quick overview of upcoming weather patterns.",
  },
  {
    id: 11,
    title: "Converse All Star Shop Redesign",
    img: Converse,
    desc: "The redesign features a simple yet eye-catching design, utilizing pastel shades that complement the selected Converse All Star shoes. The layout is clean and straightforward, ensuring ease of navigation. Key interactive elements, such as buttons and calls to action, are highlighted with striking black accents to draw attention and encourage user engagement. The update transforms the original Converse All Star page by replacing its cluttered aesthetic with a more refined and modern look, enhancing both visual appeal and user experience.",
  },
];
const containerStyle = {
  6: {
    border: "1px solid #e8f5fa",
    height: "80%",
    marginTop: "10px",
  },

  2: {
    border: "1px solid #f0f0f0",
    marginTop: "27px",
  },
  7: { marginTop: "33px", border: "1px solid #f0f0f0" },
  8: { marginTop: "33px", border: "1px solid #f0f0f0" },
  4: { marginTop: "-36px" },
};

const Single = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef();
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openFigma = () => {
    window.open(item.figmaLink || figmaProtoLink, "_blank");
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            {item.video ? (
              <video
                ref={videoRef}
                src={item.video}
                autoPlay
                loop={false}
                muted
                controls
                playsInline
                style={containerStyle[item.id] || {}}
              />
            ) : (
              <img
                src={item.img}
                alt=""
                style={containerStyle[item.id] || {}}
              />
            )}
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="buttonContainer">
              <button onClick={openModal}>See Demo</button>
              {item.figmaLink && (
                <button onClick={openFigma}>See in Figma</button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            {item.video ? (
              <video
                ref={videoRef}
                src={item.video}
                controls
                autoPlay
                className="modalVideo"
              />
            ) : (
              <img src={item.img} alt="" className="modalImage" />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>

        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
