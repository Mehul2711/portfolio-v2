import Image from "next/legacy/image";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaNodeJs,
  FaAngleRight,
  FaGithub,
  FaReact,
  FaPython,
} from "react-icons/fa";
import { useState, useEffect, Fragment } from "react";
import { clsx } from "clsx";
import Waypoints from "../dust/waypoints";
import { Roll } from "react-reveal";
import Bounce from "react-reveal/Bounce";

export default function Projects() {
  let gh = "https://github.com/Mehul2711";
  let [projects] = useState([
    {
      name: "Weather App",
      description:
        "A Next.js weather app portal efficiently delivers real-time weather information, seamlessly blending dynamic UI with server-side rendering. Users experience fast, interactive updates and a responsive interface for accessing accurate and up-to-date weather data.",
      isLeft: true,
      website: "https://weather-app-alpha-gold-58.vercel.app/",
      icon: {
        name: FaReact,
        fill: clsx("group-hover:fill-[#FF2D20]"),
      },
      image: {
        src: "/img/projects/weather.jpg",
        alt: "Weather App",
        width: 448,
        height: 250,
      },
    },
    {
      name: "Secure Meeting Platform",
      description:
        "Developed a secure meeting platform using Python and Socket.IO. Ensured encrypted communication for privacy, implemented robust authentication mechanisms, and utilized Socket.IO for real-time, efficient data exchange, creating a reliable and secure environment for virtual meetings.",
      isLeft: false,
      website: "https://secure-meeting-platform.onrender.com/",
      icon: {
        name: FaPython,
        fill: clsx("group-hover:fill-[#E96228]"),
      },
      image: {
        src: "/img/projects/meet.jpg",
        alt: "Secure Meeting Platform",
        width: 448,
        height: 250,
      },
    },
    {
      name: "React Blog Page",
      description:
        "Create a React blog page using ReactJS to dynamically showcase articles. Utilize components for improved modularity, rendering content efficiently. Implement routing for seamless navigation, ensuring a responsive and engaging user experience.",
      isLeft: true,
      website: "https://react-blog-page.vercel.app/",
      icon: {
        name: FaReact,
        fill: clsx("group-hover:fill-[#E96228]"),
      },
      image: {
        src: "/img/projects/react.png",
        alt: "React Blog Page",
        width: 448,
        height: 250,
      },
    },
    {
      name: "Contributed in Aaruush`23",
      description:
        "Contributed as a frontend developer to the Aaruush'23 website, a national-level techno-management fest held annually at SRM KTR, Chennai. Leveraged technologies like Next.js and Express.js to enhance the user interface and overall web development experience.",
      isLeft: false,
      website: "https://aaruush.org/",
      icon: {
        name: FaNodeJs,
        fill: clsx("group-hover:fill-[#689F63]"),
      },
      image: {
        src: "/img/projects/aaruush.jpg",
        alt: "Aaruush`23",
        width: 448,
        height: 250,
      },
    },
    {
      name: "Contributed in T Summit`23",
      description:
        "As a frontend developer for the T Summit '23 website, a component of the nationally renowned Aaruush techno summit at SRM KTR, Chennai. My contributions enhanced the user experience, showcasing my proficiency in crafting dynamic and responsive web interfaces for this prestigious event.",
      isLeft: true,
      website: "https://tsummit.org/",
      icon: {
        name: FaReact,
        fill: clsx("group-hover:fill-[#689F63]"),
      },
      image: {
        src: "/img/projects/summit.png",
        alt: "tsummit",
        width: 448,
        height: 250,
      },
    },
    {
      name: "Contributed in HTB SRMIST",
      description:
        "Contributed as a frontend developer to HackTheBox SRM, a student-run cyber/technical club at SRM KTR Chennai. Played a key role in website development, enhancing user interfaces, and supporting the club's mission of fostering cybersecurity and technical skills among students.",
      isLeft: true,
      website: "https://www.htbsrmist.tech/",
      icon: {
        name: FaReact,
        fill: clsx("group-hover:fill-[#689F63]"),
      },
      image: {
        src: "/img/projects/htb.jpg",
        alt: "htb",
        width: 448,
        height: 250,
      },
    },
    {
      name: "NGO Website",
      description:
        "Create a visually appealing NGO website using HTML and CSS, featuring a clean design, intuitive navigation, and impactful imagery. Utilize responsive layouts for seamless viewing on various devices, ensuring accessibility and engaging content to effectively communicate the organization's mission and initiatives.",
      isLeft: true,
      website: "https://ngo-rust.vercel.app/",
      icon: {
        name: FaHtml5,
        fill: clsx("group-hover:fill-[#689F63]"),
      },
      image: {
        src: "/img/projects/ngo.jpg",
        alt: "NGO",
        width: 448,
        height: 250,
      },
    },
  ]);

  // State to track the window width
  const [windowWidth, setWindowWidth] = useState(0);

  // Effect to update the window width on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {/* Projects Starts */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        fill="#20E484"
      >
        <path
          fillOpacity={1}
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-[#20E484] px-6">
        <Waypoints target={"toprojects"}>
          <section id="projects" className="pt-28">
            <h1 className="text-3xl font-bold text-center" data-aos="fade-up">
              Some of My Projects
            </h1>
            <div className="flex justify-center">
              <span
                className="bg-[#6C63FF] w-[150px] h-[5px]"
                data-aos="fade-up"
                data-aos-delay="400"
              ></span>
            </div>
            <div className="grid grid-cols-1 mt-20 gap-16 mx-auto">
              {projects.map(
                (
                  { name, description, isLeft, link, website, icon, image },
                  index
                ) => {
                  const isEven = index % 2 === 0;

                  return (
                    <Fragment key={name}>
                      <div className="grid grid-cols-1 sm:grid-cols-2">
                        {windowWidth >= 640 ? (
                          <Roll left>
                            <div className="flex justify-center">
                              <a
                                className={`group md:hover:scale-110 ${
                                  isLeft
                                    ? "md:hover:rotate-6"
                                    : "md:hover:-rotate-6"
                                } transition delay-75`}
                                href={website}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <div className="card max-w-md bg-base-100 shadow-2xl image-full">
                                  <figure>
                                    <Image
                                      {...image}
                                      className="object-contain"
                                    />
                                  </figure>
                                  <div className="card-body flex items-center justify-center">
                                    <h2 className="card-title text-2xl">
                                      <icon.name
                                        className={`${icon.fill} transition ease-in-out delay-150`}
                                      />
                                      {name}
                                    </h2>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </Roll>
                        ) : (
                          <div className="flex justify-center">
                            <a
                              className={`group md:hover:scale-110 ${
                                isLeft
                                  ? "md:hover:rotate-6"
                                  : "md:hover:-rotate-6"
                              } transition delay-75`}
                              href={website}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <div className="card max-w-md bg-base-100 shadow-2xl image-full">
                                <figure>
                                  <Image
                                    {...image}
                                    className="object-contain"
                                  />
                                </figure>
                                <div className="card-body flex items-center justify-center">
                                  <h2 className="card-title text-2xl">
                                    <icon.name
                                      className={`${icon.fill} transition ease-in-out delay-150`}
                                    />
                                    {name}
                                  </h2>
                                </div>
                              </div>
                            </a>
                          </div>
                        )}
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          onHoverStart={(e) => {}}
                          onHoverEnd={(e) => {}}
                        >
                          {windowWidth >= 640 ? (
                            <Bounce right>
                              <div>
                                <p className="md:text-xl  mt-5 sm:mt-0 sm:mx-10 text-justify md:leading-9 shadow-2xl p-6 md:p-5 rounded-lg  border-2 border-black">
                                  {description}
                                </p>
                              </div>
                            </Bounce>
                          ) : (
                            <div>
                              <p className="md:text-xl border-2 border-black  mt-5 sm:mt-0 sm:mx-10 text-justify md:leading-9 shadow-2xl p-6 md:p-5 rounded-lg">
                                {description}
                              </p>
                            </div>
                          )}
                        </motion.a>
                      </div>
                    </Fragment>
                  );
                }
              )}
            </div>
            <div className="text-center mt-16">
              <a
                className="btn btn-wide"
                href="https://github.com/Mehul2711?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mr-2 w-5 h-5" />
                View all my Projects. <FaAngleRight className="ml-2" />
              </a>
            </div>
          </section>
        </Waypoints>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        fill="#20E484"
      >
        <path
          fillOpacity={1}
          d="M0,160L40,138.7C80,117,160,75,240,64C320,53,400,75,480,106.7C560,139,640,181,720,197.3C800,213,880,203,960,170.7C1040,139,1120,85,1200,80C1280,75,1360,117,1400,138.7L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      {/* Projects Ends */}
    </div>
  );
}
