import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last-mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}&nbsp;</h3>

        <span className="capitalizze font-medium text-dark/75 dark:text-light/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      
      <div ref={ref} className="w-[75] mx-auto relative ">
        <motion.div
          style={{ scale: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="MERN Full Stack Developer Course"
            time="2021"
            place="Programming Hero [Batch-4]"
            info="MERN stack is a full stack JavaScript framework that allows users to build code to handle the front end, back end, and database infrastructure of web applications. It is a complex set of frameworks, but learning the MERN stack will allow programmers to build and maintain complex, interactive web applications."
          />
          <Details
            type="CSE Fundamenntals with Phitron"
            time="2022-present"
            place="Programming Hero"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
            Intelligence."
          />
          <Details
            type="Bachelor Of Business Administration (BBA)"
            time="2016-2021"
            place="Kabi Nazrul Govt. College (DU affiliated)"
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
            Intelligence."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
