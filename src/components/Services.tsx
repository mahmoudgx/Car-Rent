import { CiCircleCheck } from "react-icons/ci";
import { MdAttachMoney, MdOutlineWorkspacePremium } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Services = () => {
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
    <>
      <div className="flex pt-20 text-white bg-black justify-center text-center">
        <div className="space-y-2">
          <motion.h1
            className="text-5xl font-semibold"
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            Our Services & Benefits
          </motion.h1>
          <motion.p
            className="text-lg"
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            To make renting easy and hassle-free, we provide a variety of
            services and advantages.<br></br> We Have you covered with a variety
            of vehicles and flexible rental terms.
          </motion.p>
        </div>
      </div>
      <div
        ref={ref}
        className="bg-black text-white pt-10 pb-20 flex items-center justify-evenly"
      >
        <motion.div
          className="flex flex-col text-center justify-center space-y-2 mx-auto"
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="mx-auto bg-white p-3 rounded-full border-2 box-border">
            <MdOutlineWorkspacePremium className="text-black" size={30} />
          </div>
          <div>
            <h1 className="text-2xl">Premium Quality</h1>
            <p className="text-xl text-gray-300">
              We offer a wide range of high-quality vehicles to<br></br> choose
              from, including luxury cars, SUVs , vans<br></br> and more.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col text-center justify-center space-y-2 mx-auto"
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="mx-auto bg-white p-3 rounded-full border-2 box-border">
            <MdAttachMoney className="text-black" size={30} />
          </div>
          <div>
            <h1 className="text-2xl">Affordable Prices</h1>
            <p className="text-xl text-gray-300">
              Our rental rental rates are highly competitive and<br></br>
              affordable, allowing our customers to enjoy their<br></br> trips
              without breaking the bank.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col text-center justify-center space-y-2 mx-auto"
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="mx-auto bg-white p-3 rounded-full border-2 box-border">
            <CiCircleCheck className="text-black" size={30} />
          </div>
          <div>
            <h1 className="text-2xl">Convenient Online Booking</h1>
            <p className="text-xl text-gray-300">
              With our easy-to-use online booking system,<br></br> customers can
              quickly and conveniently reserve<br></br> their rental car from
              anywhere, anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Services;
