import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center">
          Build by{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          <Link
            className="underline underline-offset-2"
            href="https://www.facebook.com/imam.hossain.7/"
            target={"_blank"}
          >
            Imam Hossain
          </Link>
        </div>

        <Link
          className="underline underline-offset-2"
          href="https://wa.me/+8801775984338"
          target={"_blank"}
        >
          Say Hello!
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
