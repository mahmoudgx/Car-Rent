import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import mobile from "../assets/pngegg.png";

const Banner = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref} className="p-0 m-0 flex justify-center mx-auto items-center">
      <motion.div
        className="space-y-5"
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.button
          className="bg-[#C4C4C4] text-xl py-3 px-12 rounded-lg"
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Download
        </motion.button>
        <motion.h1
          className="text-6xl"
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Download RentCars<br></br> App for FREE
        </motion.h1>
        <motion.p
          className="text-xl"
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          For faster, easier booking and exclusive deals.
        </motion.p>
        <div className="flex space-x-5">
          <motion.img
            className="cursor-pointer"
            width={200}
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.5, delay: 1.0 }}
          />
          <motion.img
            className="cursor-pointer"
            width={210}
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.5, delay: 1.2 }}
          />
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <img width={700} className="overflow-hidden" src={mobile} />
      </motion.div>
    </div>
  );
};

export default Banner;
