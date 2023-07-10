import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import certificae1 from "../../public/images/achivements/certificate1.png";
import TransitionEffect from "@/components/TransitionEffect";

const achievements = () => {
  return (
    <div className="mx-8 my-8">
      <Head>
        <title> Imam Hossain | Achievements Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] justify-center" />

        <Image
          src={certificae1}
          priority
          sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw"
          alt="project1"
          className="w-full h-auto"
        />

        <div className="w-1/2 flex flex-col items-start justify -between pl-6 lg:w-full lg:pl-0 lg:pt-6">
          <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
            <h1>Certified developer by "Programming Hero"</h1>
          </span>

          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {}
          </h2>

          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
            This was 6 months lengthy course, I had performed among the top 15%
            of the class.
          </p>
          <div className="mt-2 flex items-center"></div>
        </div>
      </article>
      <br />
    </div>
  );
};

export default achievements;
