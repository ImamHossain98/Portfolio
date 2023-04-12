import React from "react";
import { motion } from "framer-motion";

const skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <skill name="css" x="-5vw" y="-10vw" />
        {/* <skill name="HTML" x="-22vw" y="-2vw" />
        {/* <skill name="CSS" x="20vw" y="6vw" />
        <skill name="Javascript" x="-5vw" y="-10vw" />
        <skill name="ReactJS" x="0vw" y="12vw" />
        <skill name="NextJS" x="-20vw" y="-15vw" />
        <skill name="Framer Motion" x="15vw" y="-12vw" />
        <skill name="Web Design" x="32vw" y="-5vw" />
        <skill name="Firebase" x="-25vw" y="-18vw" />
        <skill name="Tailwind CSS" x="18vw" y="18vw" /> */}
      </div>
    </>
  );
};

export default Skills;
