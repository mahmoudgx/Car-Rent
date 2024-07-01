import { motion } from "framer-motion";
import CarCard from "./CarCard";
import BMW from "../assets/BMW.png";
import FORTUNE from "../assets/FORTUNE.png";
import HURACAN from "../assets/HURACAN.png";
import AUDIR8 from "../assets/AUDIR8.png";

const Cars = () => {
  return (
    <>
      <motion.div
        className="flex justify-center text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-2">
          <h1 className="text-5xl font-semibold">Popular Car Rentals Deals</h1>
          <p className="text-lg">
            Ranging from elegant sedans to powerful sports cars, all carefully
            selected to provide<br></br> our customer with the ultimate driving
            experience
          </p>
        </div>
      </motion.div>
      <motion.div
        className="flex justify-evenly pt-5 pb-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <CarCard
          title="BMW M8 COUP 2022"
          image={BMW}
          rate="4.8"
          review="2,436"
          passengers="4"
          auto="auto"
          airconditioning="Air Conditioning"
          door="4"
          price="AED 2,800"
        />
        <CarCard
          title="FORTUNE GR"
          image={FORTUNE}
          rate="4.3"
          review="2,236"
          passengers="4"
          auto="auto"
          airconditioning="Air Conditioning"
          door="2"
          price="AED 2,500"
        />
        <CarCard
          title="lamborghini huracan"
          image={HURACAN}
          rate="4.7"
          review="1,236"
          passengers="2"
          auto="auto"
          airconditioning="Air Conditioning"
          door="2"
          price="AED 3,000"
        />
        <CarCard
          title="AUDI R8"
          image={AUDIR8}
          rate="4.8"
          review="2,236"
          passengers="2"
          auto="auto"
          airconditioning="Air Conditioning"
          door="2"
          price="AED 3,200"
        />
      </motion.div>
      <motion.div
        className="flex justify-center mx-auto pt-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <button className="border-2 py-2 px-10 border-black text-lg rounded-full">
          Show all vehicles
        </button>
      </motion.div>
    </>
  );
};

export default Cars;
