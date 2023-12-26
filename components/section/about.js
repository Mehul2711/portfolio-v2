import Image from "next/image";
import sAge from "s-age";
import { useState, useEffect } from "react";
import Waypoints from "../dust/waypoints";
import face from "../../public/img/face.jpeg";
import code from "../../public/img/code.jpg";

export default function About() {
  return (
    <>
      {/* About Starts */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        fill="#e3f2fd"
      >
        <path
          fillOpacity={1}
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-[#e3f2fd] px-6">
        <Waypoints target={"toabout"}>
          <div className=""></div>

          <section id="about" className="text-black py-20">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex justify-center md:mb-0 mb-20 py-5  md:w-screen">
                <Image
                  className="z-50"
                  src={face}
                  alt="about me"
                  width={300}
                  height={1}
                  data-aos="fade-up-right"
                />
                {/* <Image
                  src="/img/blob/2.svg"
                  className="mt-5 md:mt-20 absolute"
                  alt="blob"
                  width={350}
                  height={350}
                  data-aos="fade-up-right"
                  data-aos-duration="1500"
                /> */}
              </div>
              <div className="">
                <h1 className="text-3xl font-bold leading-9" data-aos="fade-up">
                  About Me
                </h1>
                <div
                  className="bg-[#6C63FF] w-[150px] h-[5px]"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                ></div>
                <div className="mt-2">
                  Hey! I&apos;m Mehul Kumar, the coding Picasso and badminton
                  bandit at SRM Institute of Science and Technology. Picture
                  this: I&apos;m conquering algorithms like a superhero and
                  battling on badminton courts, all while trying not to spill my
                  coffee on the keyboard.
                </div>
                <p className="mt-5">
                  In the coding kingdom, I am on a quest to master Data
                  Structures and Algorithms using the magical languages of CPP
                  and Java. It&apos;s not just about surviving exams; it&apos;s
                  a passionate quest through the jungle of computer science.
                  Join me in this rollercoaster where coding is a puzzle,
                  badminton is a battlefield, and every bug is a mischievous
                  sidekick.
                </p>
                <p className="mt-5">
                  So, fasten your seatbelt as we ride through the fusion of tech
                  madness and eclectic interests. It&apos;s not just a journey;
                  it&apos;s a comedy show where codes crack jokes, badminton
                  shuttles talk strategy, and every byte is a tasty byte of
                  adventure!
                </p>
                {/* <div class="tooltip tooltip-open tooltip-right mt-5" data-tip={`${gh.followers} Followers, ${gh.following} Following`}>
                <button class="btn"><FaGithub className="mr-2 w-5 h-5" /> Github</button>
              </div> */}
              </div>
            </div>
          </section>
        </Waypoints>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        fill="#e3f2fd"
      >
        <path
          fillOpacity={1}
          d="M0,160L40,138.7C80,117,160,75,240,64C320,53,400,75,480,106.7C560,139,640,181,720,197.3C800,213,880,203,960,170.7C1040,139,1120,85,1200,80C1280,75,1360,117,1400,138.7L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>

      {/* About Ends */}
    </>
  );
}
