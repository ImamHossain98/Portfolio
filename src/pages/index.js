import Image from 'next/image';
import Layout from '../components/Layout';
import Head from 'next/head'
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from '@/components/AnimatedText';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen' >
        <Layout>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src={profilePic} alt="COdeBuks" className='w-auto h-auto' />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <h1></h1>
              <AnimatedText text="Turning Vision Into Reality With Code And Design" className='!text-6xl'/>
              <p>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
            </div>
          </div>
        </Layout>

      </main>
    </>
  )
}
