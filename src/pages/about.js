import React, { useEffect, useRef } from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-2.png";
import { useMotionValue, useSpring, useInView } from "framer-motion";
import Skills from "@/components/Skills";
import Exprience from "@/components/Exprience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title> Imam Hossain | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center dark:text-light md:mt-3">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose! "
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 text-justify md:text-sm sm:text-xs
            "
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 ">
                Biography
              </h2>

              <p className="font-medium">
                I'm Imam Hossain, an aspiring web developer who is dedicated to
                crafting visually appealing and functional digital experiences
                that prioritize user needs. With one year of industry
                experience, I constantly seek fresh and inventive approaches to
                transform my clients' ideas into reality.
              </p>

              <p className="my-4 font-medium">
                In my view, design encompasses more than mere aesthetics; it
                revolves around problem-solving and delivering intuitive and
                delightful user experiences.
              </p>

              <p className="font-medium">
                Whether it involves websites, mobile apps, or any digital
                product, I remain committed to upholding design excellence and
                user-centric principles in all my endeavors. I eagerly await the
                chance to contribute my skills and enthusiasm to your upcoming
                project.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 borfer=-solid border-dark bg-light dark:bg-dark dark:border-light p-8 xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={profilePic}
                alt="imam"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize font-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied Clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={30} />+
                </span>
                <h2 className="text-xl font-medium capitalize font-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Project Completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize font-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of Exprience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Exprience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
