import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CustomerReviewCard from "./CustomerReviewCard";

const Customers = () => {
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
      <div className="flex pt-20 justify-center text-center">
        <div className="space-y-2">
          <motion.h1
            className="text-5xl font-semibold"
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            What Our Customers Say About Us
          </motion.h1>
          <motion.p
            className="text-lg"
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Here are some comments from our customers, be one of them
          </motion.p>
        </div>
      </div>
      <div ref={ref} className="pt-10 pb-20 flex justify-evenly">
        <motion.div
          className="flex"
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CustomerReviewCard
            rating={5}
            avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            name="John Cooper"
            location="Dubai, UAE"
            review="i had an amazing experience renting from rent cars! the process was seamless, the car was in pristine condition, and the customer service was top-notch."
          />
        </motion.div>
        <motion.div
          className="flex"
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <CustomerReviewCard
            rating={5}
            avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            name="Jane Doe"
            location="Abu Dhabi, UAE"
            review="I was really impressed with the level of service i received from this car rental company. The process was smooth and easy, and the car i rented was excellent condition."
          />
        </motion.div>
        <motion.div
          className="flex"
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <CustomerReviewCard
            rating={5}
            avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            name="Jane Doe"
            location="Fujairah, UAE"
            review="Rent Cars truly stands out. From their convenient online booking system to their prompt pickup and drop-off service, everything was convenient and stress-free."
          />
        </motion.div>
      </div>
    </>
  );
};

export default Customers;
