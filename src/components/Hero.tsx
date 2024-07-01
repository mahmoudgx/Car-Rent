import { motion } from "framer-motion";
import cars2 from "../assets/Cars2.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="bg-black h-screen text-white flex text-center mx-auto pt-20 flex-col relative">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-bold">
          Discover the world on wheels
          <br /> with our car rental service
        </h1>
      </motion.div>
      <div className="pt-20">
        <img src={cars2} loading="lazy" alt="Cars" />
      </div>
      <div className="custom-shape-divider-bottom-1719658366 ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
