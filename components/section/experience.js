"use client";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { MdWork } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { BsArrowDownCircle } from "react-icons/bs";

import { ExperienceData } from "../../constants/experienceData";

const Experience = () => {
  const [desc, setDesc] = useState("");
  const [isExpe, setIsExpe] = useState(false);
  const expeRef = useRef();
  const expeBoxesRef = useRef();

  useEffect(() => {
    const expeObserver = new IntersectionObserver(
      ([expeEntry]) => {
        setIsExpe(expeEntry.isIntersecting);
      },
      {
        rootMargin: "-100px",
      }
    );

    expeObserver.observe(expeRef.current);

    if (isExpe) {
      expeBoxesRef.current.classList.add("pop-up-child");
    } else {
      expeBoxesRef.current.classList.remove("pop-up-child");
    }
  }, [isExpe]);

  return (
    <Fragment>
      <section id="experience" ref={expeRef}>
        <h1 className="text-3xl font-bold text-center mt-48" data-aos="fade-up">
          Experience
        </h1>
        <div className="flex justify-center mb-10">
          <span
            className="bg-[#6C63FF] w-[150px] h-[5px]"
            data-aos="fade-up"
            data-aos-delay="400"
          ></span>
        </div>

        <div
          className="pop-down-child pb-[30px] px-[20px] mb-36 "
          ref={expeBoxesRef}
        >
          {ExperienceData.map((experience, index) =>
            experience.side === "left" ? (
              <div
                className={`md:flex gap-2 items-end transition-all  duration-500 ${
                  index !== 0 ? "mt-7" : ""
                }`}
                key={experience.companyName}
              >
                <div
                  className="md:w-[45%] cursor-pointer p-3  shadow-zinc-300 dark:shadow-zinc-700 bg-red-300 shadow-2xl   rounded"
                  onClick={() =>
                    setDesc(
                      desc === experience.description
                        ? ""
                        : experience.description
                    )
                  }
                >
                  <div className="flex justify-between  gap-2">
                    <p className="text-xl md:text-2xl font-bold text-violet-600">
                      {experience.companyName}
                    </p>
                    <p className="flex gap-2 items-center text-blue-500">
                      <ImLocation /> {experience.location}
                    </p>
                  </div>

                  <div className="flex justify-between text-black gap-2 mt-2">
                    <p className="font-semibold">{experience.role}</p>
                    <p>{experience.fromTo}</p>
                  </div>

                  <p
                    className="mt-2 text-justify transition-all duration-500 overflow-hidden text-black"
                    style={
                      desc == experience.description
                        ? { maxHeight: "400px" }
                        : { maxHeight: "0px" }
                    }
                  >
                    {experience.description}
                  </p>
                </div>
                <button
                  className="transition-all duration-500 hidden md:block"
                  onClick={() =>
                    setDesc(
                      desc === experience.description
                        ? ""
                        : experience.description
                    )
                  }
                  style={
                    desc === experience.description
                      ? { transform: "rotate(180deg)" }
                      : {}
                  }
                >
                  <BsArrowDownCircle size={22} />
                </button>
              </div>
            ) : (
              <div
                className="md:flex justify-end  items-end mt-7 gap-2 transition-all duration-500 "
                key={experience.companyName}
              >
                <button
                  className="hidden md:block"
                  onClick={() =>
                    setDesc(
                      desc === experience.description
                        ? ""
                        : experience.description
                    )
                  }
                  style={
                    desc === experience.description
                      ? { transform: "rotate(180deg)" }
                      : {}
                  }
                >
                  <BsArrowDownCircle size={22} />
                </button>
                <div
                  className="md:w-[45%] cursor-pointer  transition-all duration-500 p-3  shadow-zinc-300 dark:shadow-zinc-700 rounded bg-red-300 shadow-2xl "
                  onClick={() =>
                    setDesc(
                      desc === experience.description
                        ? ""
                        : experience.description
                    )
                  }
                >
                  <div className="flex justify-between gap-2">
                    <p className="text-xl md:text-2xl font-bold text-violet-600">
                      {experience.companyName}
                    </p>
                    <p className="flex gap-2 items-center text-blue-500">
                      <ImLocation /> {experience.location}
                    </p>
                  </div>

                  <div className="flex justify-between text-black mt-2 gap-2">
                    <p className="font-semibold">{experience.role}</p>
                    <p>{experience.fromTo}</p>
                  </div>
                  <p
                    className="mt-2 overflow-hidden transition-all duration-500 text-justify text-black"
                    style={
                      desc == experience.description
                        ? { maxHeight: "400px" }
                        : { maxHeight: "0px" }
                    }
                  >
                    {experience.description}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default Experience;
