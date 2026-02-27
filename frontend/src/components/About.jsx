import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

/* =======================
   Service Card Component
======================= */

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      glareEnable={false}
      scale={1.02}
      transitionSpeed={250}
      className="w-full sm:w-[250px]"
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.3, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-2xl shadow-card"
      >
        <div
          className="
            bg-tertiary rounded-2xl
            py-6 px-6 sm:px-12
            min-h-[220px] sm:min-h-[280px]
            flex flex-col justify-center items-center
            text-center
          "
        >
          <img
            src={icon}
            alt={title}
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
          />

          <h3 className="text-white text-[18px] sm:text-[20px] font-bold mt-4">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

/* =======================
        About Section
======================= */

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="
          mt-4
          text-secondary
          text-[16px] sm:text-[17px]
          max-w-3xl
          leading-[28px] sm:leading-[30px]
        "
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div
        className="
          mt-16
          flex flex-wrap
          justify-center
          gap-6 sm:gap-10
        "
      >
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");