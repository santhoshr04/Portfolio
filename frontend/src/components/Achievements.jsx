import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const achievements = [
  {
    title: "Top Developer Award",
    description: "Recognized as a top developer for outstanding contributions to web development projects.",
    highlight: "Awarded in 2023",
    image: "https://marketplace.canva.com/EAFtLMllF3s/1/0/1600w/canva-blue-and-gold-simple-certificate-zxaa6yB-uaU.jpg", // Replace with actual image URL
  },
  {
    title: "Open Source Contributor",
    description: "Made significant contributions to open-source projects, improving accessibility and performance.",
    highlight: "100+ contributions",
    image: "https://marketplace.canva.com/EAFtLMllF3s/1/0/1600w/canva-blue-and-gold-simple-certificate-zxaa6yB-uaU.jpg", // Replace with actual image URL
  },
];

const AchievementCard = ({ title, description, highlight, image, index }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}  className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full" >
        <div className="relative w-full h-[200px]">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-2xl" />
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
          <p className="mt-3 text-highlight font-semibold text-[16px]">{highlight}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-secondary text-[17px]">Milestones</p>
        <h2 className="text-white font-bold text-[32px]">Achievements</h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-7">
        {achievements.map((achievement, index) => (
          <AchievementCard key={index} index={index} {...achievement} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "");
