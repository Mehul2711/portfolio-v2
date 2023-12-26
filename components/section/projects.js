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
import { useState, Fragment } from "react";
import { clsx } from "clsx";
import Waypoints from "../dust/waypoints";
import { Roll } from "react-reveal";

export default function Projects() {
  let gh = "https://github.com/Mehul2711";
  let [projects] = useState([
    {
      name: "Weather App",
      description:
        "Developed a weather app portal for fetching the weather details of different cities around the world.",
      isLeft: true,
      website: "https://weather-app-alpha-gold-58.vercel.app/",
      icon: {
        name: FaReact,
        fill: clsx("group-hover:fill-[#FF2D20]"),
      },
      image: {
        src: "/img/projects/weather.jpg",
        alt: "Weather App",
        width: 500,
        height: 250,
      },
    },
    {
      name: "Secure Meeting Platform",
      description:
        "A video chat/meeting webapp using WebRTC and WebSockets (socket.io). Basically a Google Meet clone + a collaborative whiteboard.",
      isLeft: false,
      website: "https://secure-meeting-platform.onrender.com/",
      icon: {
        name: FaPython,
        fill: clsx("group-hover:fill-[#E96228]"),
      },
      image: {
        src: "/img/projects/meet.jpg",
        alt: "Secure Meeting Platform",
        width: 500,
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
      description:
        "Contributed to the Aaruush`23 website, the National Level Techno-Management Fest of SRM Institute of Science and Technology.",
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
        "Contributed to the T Summit`23 website, the National Level Techno-Management Fest of SRM Institute of Science and Technology.",
      isLeft: true,
      website: "https://tsummit.org/",
      icon: {
        name: FaReact,
        fill: clsx("group-hover:fill-[#689F63]"),
      },
      image: {
        src: "/img/projects/summit.png",
        alt: "tsummit",
        width: 508,
        height: 250,
      },
    },
    {
      name: "Contributed in HackTheBox SRMIST",
      description: "Contributed to the HackTheBox SRMIST website.",
      isLeft: true,
      website: "https://www.htbsrmist.tech/",
      icon: {
        name: FaReact,
        fill: clsx("group-hover:fill-[#689F63]"),
      },
      image: {
        src: "/img/projects/htb.jpg",
        alt: "htb",
        width: 508,
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
        width: 508,
        height: 250,
      },
    },
  ]);

  return (
    <>
      {/* Projects Starts */}
      <div className="px-6">
        <Waypoints target={"toprojects"}>
          <section id="projects" className="pt-28">
            <h1 className="text-2xl font-bold text-center" data-aos="fade-up">
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
                  const rollDirection = isEven ? "left" : "right";

                  return (
                    <Fragment key={name}>
                      <Roll left={isEven} right={!isEven}>
                        <div className="flex justify-center">
                          <a
                            className={`group hover:scale-110 ${
                              isLeft ? "hover:rotate-6" : "hover:-rotate-6"
                            } transition delay-75`}
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div
                              className="card max-w-md bg-base-100 shadow-2xl image-full"
                              data-aos="fade-up"
                            >
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
                      </Roll>
                      <div></div>
                      <div></div>
                    </Fragment>
                  );
                }
              )}
            </div>

            <div className="text-center mt-20">
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
      {/* Projects Ends */}
    </>
  );
}
