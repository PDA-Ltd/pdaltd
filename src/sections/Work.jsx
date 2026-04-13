import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { map } from "../assets/images";
import { useTranslation } from "../hooks/useTranslation";

const Work = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section
      id="work"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
        <motion.div
          className="flex-1 flex justify-center items-center order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="relative"
            whileHover={{ rotate: [0, -2, 2, 0] }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={map}
              alt="Map"
              className="object-contain w-full max-w-full h-auto shadow-2xl rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-orange/10 to-orange/10 rounded-2xl -z-10 blur-xl"></div>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="flex-1 flex flex-col order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header - Consistent Style */}
          <div className="mb-3">
            <div className="flex items-center gap-4 mb-2">
              <motion.div
                className="h-1 bg-orange flex-1"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              />
              <motion.h2
                className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                {t("work.whereWeWork")}
              </motion.h2>
              <motion.div
                className="h-1 bg-orange flex-1"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </div>
          </div>
          
          <motion.p
            className="font-poppins text-gray-600 text-base md:text-lg leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t("work.description")}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
