import Image from "next/image";
import Typed from "react-typed";
import { FaUserAlt } from "react-icons/fa";
import { MdCode } from "react-icons/md";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import About from "./section/about";
import Projects from "./section/projects";
import Contact from "./section/contact";
import { Toaster } from "react-hot-toast";
import Social from "./dust/social";
import Waypoints from "./dust/waypoints";
import { Fade } from "react-reveal";
import Skills from "./section/skills";
import Experience from "./section/experience";

import coding from "../public/img/coding.gif";

export default function Main() {
  return (
    <>
      <Toaster />
      {/* Header Starts */}
      <Waypoints target={"tohome"}>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 px-16">
            <div className="pt-36 sm:pt-52 ">
              <div className="">
                <h1 className="text-xl text-center sm:text-start sm:text-4xl font-extrabold leading-10 tracking-tight  text-base-900 sm:leading-none md:text-3xl lg:text-4xl">
                  <span
                    className="inline md:block"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    Hi <span className="animate-wave inline-block">👋🏼</span>,
                    I&apos;m Mehul Kumar.
                  </span>
                </h1>
              </div>

              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                className="text-sm md:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block text-center sm:text-start mb-2 md:mb-0 mx-2"
              >
                {`Someone who likes to `}
                <Typed
                  strings={["coding", "eating", "gaming", "sleeping"]}
                  typeSpeed={79}
                  backSpeed={50}
                  backDelay={40}
                  loop
                />
              </p>
              <div className="flex justify-center md:justify-start mt-4 sm:mt-0">
                <Social type={"hero"} />
              </div>

              <div className="mt-5 text-center md:text-left makeGapR1">
                <a
                  href="#about"
                  className="btn rounded-full btn-primary"
                  data-aos="fade-up"
                >
                  <FaUserAlt className="mr-2" /> About Me
                </a>
                <a
                  href="#projects"
                  className="btn rounded-full btn-outline btn-accent mt-2 md:mt-0"
                  data-aos="fade-up"
                >
                  <MdCode className="mr-2" /> Some of my projects
                </a>
              </div>
            </div>

            <div className="flex justify-end md:pt-32  md:mx-0 mx-5">
              <div className="">
                <Fade right>
                  {" "}
                  <Image
                    src={coding}
                    alt="hero image"
                    className="mt-4  md:mt-0 z-50"
                    width={450}
                    height={300}
                  />
                </Fade>
              </div>
            </div>
          </div>

          <div className=" animate-sb pt-8 sm:pt-24 flex justify-center">
            <a href="#about">
              <IoIosArrowDropdownCircle className="scale-[200%] hover:scale-[150%] transition delay-150" />
            </a>
          </div>
        </div>
      </Waypoints>
      {/* Header Ends */}

      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
