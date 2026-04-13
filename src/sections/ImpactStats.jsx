import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaUsers, FaGlobe, FaHandshake, FaAward } from "react-icons/fa";

const CountUpNumber = ({ end, suffix, delay = 0, color, isInView }) => {
  const [count, setCount] = useState(0);
  const duration = 2; // seconds
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;

    hasAnimated.current = true;
    let startTime = null;
    let animationFrameId = null;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = (currentTime - startTime) / 1000; // Convert to seconds

      if (elapsed < duration + delay) {
        const progress = Math.max(0, Math.min((elapsed - delay) / duration, 1));
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    const timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(animate);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, end, delay]);

  return (
    <span className={`${color === "orange" ? "text-orange" : "text-orange/90"}`}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const ImpactStats = () => {
  const stats = [
    {
      icon: FaUsers,
      number: 100000,
      suffix: "+",
      label: "People Reached",
      color: "orange",
      description: "Individuals directly impacted by our programs",
    },
    {
      icon: FaAward,
      number: 100,
      suffix: "+",
      label: "Projects",
      color: "red",
      description: "Successful projects completed",
    },
    {
      icon: FaHandshake,
      number: 50,
      suffix: "+",
      label: "Partners",
      color: "orange",
      description: "Collaborative partnerships worldwide",
    },
    {
      icon: FaGlobe,
      number: 8,
      suffix: "+",
      label: "Countries",
      color: "red",
      description: "Active operations across Sub-Saharan Africa",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              Our Impact
            </motion.h2>
            <motion.div
              className="h-1 bg-orange flex-1 max-w-16 sm:max-w-24 md:max-w-32"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const cardRef = useRef(null);
            const isInView = useInView(cardRef, { once: true, margin: "-50px" });

            return (
              <motion.div
                key={index}
                ref={cardRef}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-orange shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                    stat.color === "orange" ? "bg-orange/10 text-orange" : "bg-orange/10 text-orange/90"
                  } group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="text-2xl" />
                </motion.div>
                <motion.h3
                  className={`text-4xl md:text-5xl font-bold mb-2`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
                >
                  <CountUpNumber 
                    end={stat.number} 
                    suffix={stat.suffix} 
                    delay={index * 0.2} 
                    color={stat.color}
                    isInView={isInView}
                  />
                </motion.h3>
                <p className="text-gray-900 font-semibold text-base md:text-lg mb-2">
                  {stat.label}
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
