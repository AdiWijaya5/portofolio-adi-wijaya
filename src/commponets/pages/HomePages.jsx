import HeroImage from '../assets/iconhome1.png';
import Project2 from '../assets/project-2.png';
import Proyek1 from '../assets/proyek-1.webp';
import Proyek2 from '../assets/proyek-2.webp';
import Proyek3 from '../assets/proyek-3.webp';

import profil from '../assets/profil_1.png';
import img from '../assets/css.svg';
import img2 from '../assets/html.svg';
import img3 from '../assets/react.svg';
import img4 from '../assets/mysql.svg';
import img5 from '../assets/bootstrap.svg';
import img6 from '../assets/firebase.svg';
import img7 from '../assets/javascript.svg';
import img8 from '../assets/tailwind.svg';
import img9 from '../assets/figma.svg';
import img10 from '../assets/github.svg';
import img11 from '../assets/git-bash.svg';
import img12 from '../assets/visual-studio-code.svg';
import img13 from '../assets/canva.svg';
import img14 from '../assets/android-studio.svg';
import img15 from '../assets/kotlin.svg';

import Marquee from 'react-fast-marquee';
import { TypeAnimation } from 'react-type-animation';
import { delay, motion, useScroll, useVelocity, useTransform, useSpring } from 'framer-motion';
import React, { useRef } from 'react';
import { section } from 'framer-motion/client';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const homepages = () => {
  return (
    <div className="homepage pb-10 ">
      <div className="container mx-auto overflow-hidden px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center pt-32">
          <div className="box">
            {/* <h1 className="lg:text-7xl/tight text-3xl font-medium mb-7"> */}
            <motion.h1
              variants={container(0)}
              animate="visible"
              initial="hidden"
              whileHover={{ y: 20 }}
              className="lg:text-7xl/tight text-3xl font-medium text-black-500 mb-7"
            >
              Adi Wijaya
            </motion.h1>
            {/* </h1> */}
            <motion.p
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              className="bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-base/8 m-4tracking-tight text-transparent"
            >
              FRONT END & FULL STACK DEVELOPER
            </motion.p>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light text-justify tracking-tight"
            >
              A Frontend developer based in Indonesia, Adi Wijaya now 22 years old. I have worked on a wide range of Full Stack dev projects, from Petani Pintar applications android to Mobile Calculator Ios, with a focus on creating clean,
              well-crafted interfaces that not only look great but also provide a seamless user experience.
            </motion.p>
          </div>
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <img
              src={HeroImage}
              alt="Hero"
              className="md:w-full w-[400px] mx-auto md:m-0 "
            />
          </motion.div>
        </div>
        <div
          className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 md:pt-20 pt-32"
          id="about"
        >
          <div className="box md:order-1 order-2">
            <motion.img
              whileHover={{ rotate: '2.5deg', scale: 1.2 }}
              src={profil}
              alt="Profil"
              className="transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 lg:w-[300px] w-[300px] md:m  mx-auto"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.1 }}
            ></motion.img>
          </div>
          <div className="box md:order-2 order-1">
            <motion.ol
              class="relative border-s border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, scale: 2, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2024</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Graduate of Yogyakarta University of Technology</h3>
                <p class="mb-4 text-base text-justify font-normal text-gray-500 dark:text-gray-400">
                  I was able to graduate on time in 3.5 years and my final project was to create a smart farmer application to control the nutrition of android-based hydroponic plants using the java programming language, the software used
                  is android studio.
                </p>
              </li>
              <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2024 - January 2025</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application & Webset Development Services Freelancer</h3>
                <p class="text-base text-justify font-normal text-gray-500 dark:text-gray-400">
                  Ios Calculator App Creation, developed using HTML, Javascript and CSS languages. Personal Webset, developed using express.js and handlebars languages.
                </p>
              </li>
              {/* <li class="ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
              </li> */}
            </motion.ol>
          </div>
        </div>
        <div
          className="services pt-32 "
          id="services"
        >
          <motion.h1
            className="text-center lg:text-5xl/tight text-3xl font-medium mb-2"
            initial={{ opacity: 1, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            Skill
          </motion.h1>
          <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <motion.p
            className="text-center lg:text-xl/tight text-xl font-medium mb-2"
            initial={{ opacity: 1, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Language & Framework
          </motion.p>
          <Marquee
            pauseOnHover
            direction="right"
            speed={100}
            delay={1}
          >
            <div className="image_wrapper px-7">
              <img
                src={img}
                alt="Img"
                className=" size-24"
              />
            </div>
            <div className="image_wrapper px-7">
              <img
                src={img2}
                alt="Img2"
                className="size-24"
              />
            </div>
            <div className="image_wrapper px-7">
              <img
                src={img3}
                alt="Img3"
                className="size-24"
              />
            </div>
            <div className="image_wrapper px-7">
              <img
                src={img7}
                alt="Img7"
                className="size-24"
              />
            </div>
            <div className="image_wrapper px-7">
              <img
                src={img5}
                alt="Img5"
                className="size-32"
              />
            </div>
            <div className="image_wrapper px-7">
              <img
                src={img6}
                alt="Img6"
                className="size-24"
              />
            </div>
            <div className="image_wrapper px-7">
              <img
                src={img4}
                alt="Img4"
                className="size-32"
              />
            </div>
            <div className="image_wrapper px-7">
              <img
                src={img8}
                alt="Img8"
                className="size-24"
              />
            </div>
            <div className="image_wrapper px-7">
              <img
                src={img15}
                alt="Img15"
                className="size-20"
              />
            </div>
          </Marquee>
          <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <motion.p
            className="text-center lg:text-xl/tight text-xl font-medium mb-2"
            initial={{ opacity: 1, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Tools
          </motion.p>
          <Marquee
            pauseOnHover
            direction="left"
            speed={100}
            delay={1}
          >
            <div className="image_wrapper px-12">
              <img
                src={img9}
                alt="Img9"
                className=" size-24"
              />
            </div>
            <div className="image_wrapper px-12">
              <img
                src={img10}
                alt="Img10"
                className="size-24"
              />
            </div>
            <div className="image_wrapper px-12">
              <img
                src={img11}
                alt="Img11"
                className="size-24"
              />
            </div>
            <div className="image_wrapper px-12">
              <img
                src={img12}
                alt="Img12"
                className="size-24"
              />
            </div>
            <div className="image_wrapper px-12">
              <img
                src={img13}
                alt="Img13"
                className="size-28"
              />
            </div>
            <div className="image_wrapper px-12">
              <img
                src={img14}
                alt="Img14"
                className="size-28"
              />
            </div>
          </Marquee>
        </div>
        <div
          className="proyek pt-32 "
          id="proyek"
        >
          <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">Projects</h1>
          <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="proyek-box pt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            <div class="rounded p-2  bg-white shadow group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-full w-full">
                <img
                  src={Proyek1}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">Application for Controlling Nutrienty</h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Controlling Nutrient Needs in Android-Based Hydroponic Plants Smart Hidroponic</p>
                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
              </div>
            </div>
            <div class="rounded p-2  bg-white shadow group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-full w-full">
                <img
                  src={Project2}
                  alt="Proyek 2"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">Mobile Calculator Ios</h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> iPhone Calculator using only HTML, CSS, and JavaScript</p>

                <a href="https://adiwijaya5.github.io/Calculator/">
                  <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                </a>
              </div>
            </div>
            <div class="rounded p-2  bg-white shadow group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div class="h-full w-full">
                <img
                  src={Proyek3}
                  alt="Proyek 3"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 class="font-dmserif text-3xl font-bold text-white">Application for Controlling Nutrienty</h1>
                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Controlling Nutrient Needs in Android-Based Hydroponic Plants Smart Hidroponic</p>
                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homepages;
