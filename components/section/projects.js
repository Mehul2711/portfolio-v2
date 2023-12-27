import Image from "next/legacy/image";
import roll from "react-reveal/Roll";
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

export default function Projects() {
  let gh = "https://github.com/Mehul2711";
  let [projects] = useState([
    {
      name: "Weather App",
      description: "Developed a weather app portal.",
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
      description: "A video chat/meeting webapp.",
      isLeft: false,
      website: "https://secure-meeting-platform.onrender.com/",
      icon: {
        name: FaPython,
        fill: clsx("group-hover:fill-[#E96228]"),
      },
      image: {
        src: "/img/projects/meet.jpg",
        alt: "Secure Meeting Platform",
        width: 390,
        height: 250,
      },
    },
    {
      name: "React Blog Page",
      description: "A webpage to display blogs regarding React ",
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
      description: "Contributed to the Aaruush`23 website.",
      isLeft: false,
      website: "https://aaruush.org/",
      icon: {
        name: FaNodeJs,
        fill: clsx("group-hover:fill-[#689F63]"),
      },
      image: {
        src: "/img/projects/aaruush.jpg",
        alt: "Aaruush`23",
        width: 390,
        height: 250,
      },
    },
    {
      name: "Contributed in T Summit`23",
      description: "Contributed to the T Summit`23 website",
      isLeft: true,
      website: "https://tsummit.org/",
      icon: {
        name: FaReact,
        fill: clsx("group-hover:fill-[#689F63]"),
      },
      image: {
        src: "/img/projects/summit.png",
        alt: "tsummit",
        width: 390,
        height: 250,
      },
    },
    {
      name: "Contributed in HTB SRMIST",
      description: "Contributed to the club website.",
      isLeft: true,
      website: "https://www.htbsrmist.tech/",
      icon: {
        name: FaReact,
        fill: clsx("group-hover:fill-[#689F63]"),
      },
      image: {
        src: "/img/projects/htb.jpg",
        alt: "htb",
        width: 390,
        height: 250,
      },
    },
    {
      name: "NGO Website",
      description: "Developed a website for an NGO",
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
    <>
      {/* Projects Starts */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        fill="#b3f0ff"
      >
        <path
          fillOpacity={1}
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-[#b3f0ff] px-6">
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
            <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-4">
              {projects.map(
                (
                  { name, description, isLeft, link, website, icon, image },
                  index
                ) => {
                  const isEven = index % 2 === 0;

                  return (
                    <Fragment key={name}>
                      {windowWidth >= 768 ? (
                        <Roll left={isEven} right={!isEven}>
                          <div className="flex justify-center">
                            <a
                              className={`group md:hover:scale-110 ${
                                isLeft ? "hover:rotate-6" : "hover:-rotate-6"
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
                                <div className="card-body">
                                  <h2 className="card-title">
                                    <icon.name
                                      className={`${icon.fill} transition ease-in-out delay-150`}
                                    />
                                    {name}
                                  </h2>
                                  <p>{description}</p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </Roll>
                      ) : (
                        <div className="flex justify-center">
                          <a
                            className={`group md:hover:scale-110 ${
                              isLeft ? "hover:rotate-6" : "hover:-rotate-6"
                            } transition delay-75`}
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="card max-w-md bg-base-100 shadow-2xl image-full">
                              <figure>
                                <Image {...image} />
                              </figure>
                              <div className="card-body">
                                <h2 className="card-title">
                                  <icon.name
                                    className={`${icon.fill} transition ease-in-out delay-150`}
                                  />
                                  {name}
                                </h2>
                                <p>{description}</p>
                              </div>
                            </div>
                          </a>
                        </div>
                      )}
                      <div></div>
                      <div></div>
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
        fill="#b3f0ff"
      >
        <path
          fillOpacity={1}
          d="M0,160L40,138.7C80,117,160,75,240,64C320,53,400,75,480,106.7C560,139,640,181,720,197.3C800,213,880,203,960,170.7C1040,139,1120,85,1200,80C1280,75,1360,117,1400,138.7L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      {/* Projects Ends */}
    </>
  );
}
