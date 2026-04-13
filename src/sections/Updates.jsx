import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { image2, competition, reading, cluster, fvr, ksw, dpw } from "../assets/images";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Updates = () => {
  const updates = [
    {
      image: dpw,
      title: "Data Protection Workshop with DPC",
      date: "August 8, 2025",
    },
    {
      image: ksw,
      title: "PDA Holds 8th Child Protection Workshop Spotlighting Galamsey's Threat to Children",
      date: "November 27, 2025",
    },
    {
      image: reading,
      title: "CCLP 2025 Annual Quiz Competition",
      date: "December 5, 2025",
    },
  ];

  // Custom Next Arrow
  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Next"
    >
      <FaChevronRight className="text-orange group-hover:text-orange/80 transition-colors text-xl" />
    </button>
  );

  // Custom Prev Arrow
  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Previous"
    >
      <FaChevronLeft className="text-orange group-hover:text-orange/80 transition-colors text-xl" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <section id="updates" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header - Consistent Style */}
      <motion.div
        className="text-center mb-5 md:mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 sm:gap-4 mb-3 justify-center">
          <motion.div
            className="h-1 bg-orange flex-1 max-w-16 sm:max-w-24 md:max-w-32"
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
            Updates & Events
          </motion.h2>
          <motion.div
            className="h-1 bg-orange flex-1 max-w-16 sm:max-w-24 md:max-w-32"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          />
        </div>
        <motion.p
          className="text-gray-600 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Stay updated with our latest activities and events
        </motion.p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <Slider {...settings}>
            {updates.map((update, index) => (
              <div key={index} className="relative">
                <div className="relative h-[350px] sm:h-[400px] md:h-[500px] overflow-hidden">
                  <motion.img
                    src={update.image}
                    alt={update.title}
                    className="object-cover w-full h-full"
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                    <motion.p
                      className="text-white font-poppins text-sm md:text-base font-semibold mb-2 opacity-90"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 0.9, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      {update.date}
                    </motion.p>
                    <motion.h3
                      className="text-white font-poppins text-lg md:text-2xl font-bold leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      {update.title}
                    </motion.h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Updates;
