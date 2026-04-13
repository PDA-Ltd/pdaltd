// import Button from "../components/Button";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="max-container flex flex-col justify-center min-h-screen gap-10 p-4 border-box bg-hero bg-cover"
//     >
//       <div className="lg:grid lg:grid-cols-2 lg:px-2 xl:grid xl:grid-cols-2 xl:px-2 sm:flex sm:justify-end md:flex">
//         <div></div>
//         <div>
//           <h1 className="font-poppins font-bold lg:text-6xl text-white sm:text-5xl sm:px-5 ">
//             Everyone Matters
//           </h1>
//           <p className="py-5 lg:pr-[16rem] sm:px-5 text-white text-xl font-poppins">
//             Participatory Development Associates (PDA), is a social development,
//             project management and advisory organisation that is based in Ghana
//             and works across Sub-Saharan Africa
//           </p>
//           <a className="sm:pl-5" href="./">
//             <Button label="READ MORE" />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useTranslation } from "../hooks/useTranslation";

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative flex flex-col justify-end lg:justify-center bg-cover bg-left top-20 min-h-[280px] sm:h-[340px] md:h-[390px] lg:h-[460px] wide:h-[560px] overflow-hidden"
    >
      <video
        loop
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-top -z-10"
        poster="/assets/images/hero.png"
      >
        <source src="/assets/video/pdaSlider.mp4" type="video/mp4" />
        <source src="/assets/video/pdaSlider.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent -z-10"></div>
      
      <motion.div
        className="flex flex-col items-center justify-end h-full p-4 pb-8 sm:pb-10 md:pb-12 relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-white">
          <motion.p
            className="py-5 text-lg md:text-xl font-poppins leading-relaxed mb-8 px-4"
            variants={itemVariants}
          >
            {t("hero.description")}
          </motion.p>
          <motion.div
            className="flex justify-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/who-we-are" onClick={(e) => { e.preventDefault(); navigate("/who-we-are"); }}>
              <Button label={t("hero.readMore")} />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
