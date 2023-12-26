"use client";
import { FaDiscord, FaEnvelope } from "react-icons/fa";
import toast from "react-hot-toast";
import Confetti from "react-dom-confetti";
import { useState } from "react";
import Waypoints from "../dust/waypoints";

export default function Contact() {
  return (
    <>
      {/* Contact Starts */}

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
      <div className="px-6 bg-[#b3f0ff]">
        <Waypoints target={"tocontact"}>
          <section id="contact" className="pt-28">
            <h1
              className="text-2xl font-bold text-center text-gray-900"
              data-aos="fade-up"
            >{`Get in Touch`}</h1>
            <div className="flex justify-center">
              <div
                className="bg-[#6C63FF] w-[150px] h-[5px]"
                data-aos="fade-up"
                data-aos-delay="400"
              ></div>
            </div>
            <div className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-gray-900">
              <div className="flex flex-col justify-between">
                <div>
                  <div>
                    <h2
                      className="text-2xl font-bold mt-10"
                      data-aos="fade-right"
                    >
                      <FaDiscord className="fill-indigo-500 inline-block" />{" "}
                      Discord
                    </h2>
                    <div
                      className="bg-[#6C63FF] w-[120px] h-[5px]"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    ></div>

                    <ul className="list-disc ml-5 mt-1">
                      <li>{`mehul_2711`}</li>
                    </ul>
                  </div>

                  <div>
                    <h2
                      className="text-2xl font-bold mt-10"
                      data-aos="fade-right"
                    >
                      <FaEnvelope className="fill-indigo-500 inline-block" />{" "}
                      Email
                    </h2>
                    <div
                      className="bg-[#6C63FF] w-[120px] h-[5px]"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    ></div>

                    <ul className="list-disc ml-5 mt-1">
                      <li>
                        <a
                          href="mailto:mehul271102@gmail.com"
                          className="hover:text-indigo-500"
                        >
                          mehul271102@gmail.com
                        </a>{" "}
                        (main)
                      </li>
                      <li>
                        <a
                          href="mailto:mehulkumar086@gmail.com"
                          className="hover:text-indigo-500"
                        >
                          mehulkumar086@gmail.com
                        </a>{" "}
                        (second)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-justify text-xl">
                  Are you looking for a fast-performing and user-friendly
                  website to represent your product or business? or looking for
                  any kind of consultation? or want to ask questions? or have
                  some advice for me or just want to say &quot;Hi 👋&quot; in
                  any case feel free to Let me know. I will do my best to
                  respond back. 😊 The quickest way to reach out to me is via an
                  email.
                </p>
              </div>
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
          d="M0,64L48,96C96,128,192,192,288,224C384,256,480,256,576,218.7C672,181,768,107,864,112C960,117,1056,203,1152,224C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      {/* Contact Ends */}
    </>
  );
}
