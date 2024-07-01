import { motion } from "framer-motion";

const CarBrands = () => {
  return (
    <div className="flex items-center justify-around py-20 px-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <img width={120} src="https://www.svgrepo.com/show/330723/jaguar.svg" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img width={120} src="https://www.svgrepo.com/show/446876/honda.svg" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <img width={120} src="https://www.svgrepo.com/show/306478/nissan.svg" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img width={120} src="https://www.svgrepo.com/show/306868/toyota.svg" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <img width={120} src="https://www.svgrepo.com/show/446935/acura.svg" />
      </motion.div>
    </div>
  );
};

export default CarBrands;
