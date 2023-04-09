import Link from 'next/link';
import React from 'react';
import Logo from '../components/Logo';
import { useRouter } from 'next/router';
import { TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon, DribbbleIcon, SunIcon } from './Icons';
import { motion } from 'framer-motion';


const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"}`}>&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
    return (
        <header className='w-full px-32 py-8 font-medium flex item-center justify-between'>

            <nav>

                <CustomLink href="/" title="Home" className='mr-4' />
                <CustomLink href="/about" title="About" className='mx-4' />
                <CustomLink href="/projects" title="Projects" className='mx-4' />
                <CustomLink href="/articles" title="Articles" className='ml-4' />
            </nav>

            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a href="https://twitter.com/?lang=en" target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className='w-6 mr-3'><TwitterIcon /></motion.a>
                <motion.a href="https://github.com/ImamHossain98?tab=repositories" target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className='w-6 mr-3'><GithubIcon /></motion.a>
                <motion.a href="https://www.linkedin.com/in/imam-hossain-8b0487216/" target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className='w-6 mr-3'><LinkedInIcon /></motion.a>
                <motion.a href="https://www.pinterest.com/" target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className='w-6 mr-3'><PinterestIcon /></motion.a>
                <motion.a href="https://dribbble.com/tags/icons" target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className='w-6 mr-3'><DribbbleIcon /></motion.a>
                <motion.a href="https://www.sunicon.in/" target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className='w-6 mr-3'><SunIcon /></motion.a>
            </nav>

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>

        </header>
    );
};

export default NavBar;