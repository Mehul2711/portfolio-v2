import Logo from "./dust/logo";
import Bounce from "react-reveal/Bounce";

import {
  FaCode,
  FaHeart,
  FaGithub,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaNpm,
} from "react-icons/fa";
import Social from "./dust/social";

export default function Footer() {
  return (
    <>
      <div className="px-6">
        <div className="border-b border-gray-200"></div>
      </div>
      <footer className="footer p-10">
        <div>
          <p>
            <FaCode className="fill-indigo-500 hover:scale-110 transition delay-75 inline-block text-xl" />
            {` with `}
            <FaHeart className=" text-xl fill-error hover:scale-110 transition delay-75 inline-block mb-1" />{" "}
            by <Logo />
            <br />
          </p>
        </div>
        <div className="">
          <span className="footer-title ml-2 text-lg md:text-xl ">Social</span>
          <div className="">
            <Social type={"footer"} />
          </div>
        </div>
      </footer>
    </>
  );
}
