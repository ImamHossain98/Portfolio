import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last-mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}&nbsp;
        </h3>

        <span className="capitalizze font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm sm:text-xs text-justify ">
          {info}
        </p>
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
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div ref={ref} className="w-[75] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scale: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="A.K High School"
            time="2013"
            place="SSC | Dhaka, Bangladesh"
            info="School education helped me as an individual to consider the distinctions and similarities with other cultures. School helped me choose the right career path. Schools not only taught lessons from books but also provided valuable life lessons. Schools offered opportunities to make friends. Schools improved my personality and enhanced my personal speech."
          />
          <Details
            type="Dania University College"
            time="2015"
            place="HSC | Dhaka, Bangladesh"
            info="
            College offered a multitude of advantages for me. It provided a structured and focused education, equipping students with specialized knowledge and practical skills in our chosen fields. College fostered personal growth, critical thinking, and independence, preparing students for the complexities of the professional world. Additionally, it also offered networking opportunities, access to expert faculty, and a supportive environment for learning. Ultimately, college served as a valuable stepping stone towards a successful and fulfilling career.
            "
          />
          <Details
            type="MERN Full Stack Developer Course"
            time="2021"
            place="Programming Hero [Batch-4]"
            info="MERN stack is a full stack JavaScript framework that allows users to build code to handle the front end, back end, and database infrastructure of web applications. It is a complex set of frameworks, but learning the MERN stack will allow programmers to build and maintain complex, interactive web applications.
            "
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
            info="
            Completing a Bachelor of Business Administration (BBA) equipped me with a diverse set of skills and knowledge essential for a successful career in the business world. Through comprehensive coursework, I gained a solid foundation in various business disciplines, including management, marketing, finance, and operations. Additionally, I developed leadership and management abilities, analytical and critical thinking skills, financial literacy, marketing expertise, and an entrepreneurial mindset. With an emphasis on ethical decision-making and effective communication, a BBA program prepared me for a range of career opportunities and provided a strong basis for further education or entrepreneurial endeavors.
            "
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
