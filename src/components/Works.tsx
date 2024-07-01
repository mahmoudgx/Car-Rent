import { motion } from "framer-motion";
import { CiCalendar, CiFaceSmile, CiSearch } from "react-icons/ci";
import CarWork from "../assets/carwork.png";

const Works = () => {
  return (
    <>
      <motion.div
        className="flex pt-20 justify-center text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-2">
          <h1 className="text-5xl font-semibold">How it works</h1>
          <p className="text-lg">
            Renting a luxury car never been easier. Our streamlined process
            makes it simple for<br></br> you to book and confirm your vehicle of
            choice online
          </p>
        </div>
      </motion.div>
      <motion.div
        className="space-y-5 flex justify-evenly items-center pt-10 pb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="flex space-y-4 flex-col">
          <motion.div
            className="flex mx-auto my-auto space-x-6 p-5 items-center rounded-3xl border-2 w-[550px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="px-3 py-8 bg-gray-200 rounded-xl">
              <CiSearch size={25} />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl">Browse and select</h1>
              <p className="text-xl">
                Choose from our wide range of premium cars, select the pickup
                and return dates and locations that suit you best.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex mx-auto my-auto space-x-6 p-5 items-center rounded-xl border-2 w-[550px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3 }}
          >
            <div className="px-3 py-8 bg-gray-200 rounded-xl">
              <CiCalendar size={25} />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl">Book and Confirm</h1>
              <p className="text-xl">
                Book your desired car with just a few clicks and receive an
                instant confirmation via email or SMS
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex mx-auto my-auto space-x-6 p-5 items-center rounded-xl border-2 w-[550px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
          >
            <div className="px-3 py-8 bg-gray-200 rounded-xl">
              <CiFaceSmile size={25} />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl">Enjoy your ride</h1>
              <p className="text-xl">
                Pick up your car at the designated location and enjoy your
                premium experience with our top-quality service.
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="bg-gray-200 py-20 rounded-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <img src={CarWork} width={700} />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Works;
