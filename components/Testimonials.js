import TestimonialCard from "./TestimonialCard";
import { testimoionals } from "../utils/testimonials";
import { useState } from "react";
import { SiUpwork } from "react-icons/si";
import Link from "node_modules/next/link";
function Testimonials() {
  const [show, setShow] = useState(0);
  function handleRight() {
    let next = show + 1;
    setShow(next);
    if (show === 3) {
      setShow(0);
    }
  }
  function handleLeft() {
    let next = show - 1;
    setShow(next);
    if (show === 0) {
      setShow(3);
    }
  }
  return (
    <div className=" relative overflow-hidden flex-col flex justify-center container mt-24  mx-auto 2xl:mt-48 font-poppins text-center">
      <div className=" text-6xl 2xl:text-8xl font-bold">Testimonials</div>
      <div className=" border-b border-stone-700 pb-6 mt-4 text-xl 2xl:text-xl text-stone-400 font-poppins">
        These are some of the feedbacks I've received on
        <Link
          href="https://www.upwork.com/freelancers/~01b352b10a5e23d05d"
          passHref
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:animate-pulse"
          >
            {" Upwork"}
          </a>
        </Link>
      </div>
      <div className="relative 2xl:h-[25rem] xl:h-[15rem] h-fit">
        {testimoionals.map((item, index) => {
          return (
            <TestimonialCard
              company={item.company}
              index={index}
              key={index}
              show={show}
              author={item.author}
              text={item.text}
              date={item.date}
            />
          );
        })}
      </div>
      <div
        onClick={handleLeft}
        className="bg-stone-800 absolute top-0 left-0 p-2 2xl:p-4 rounded-full cursor-pointer"
      >
        <svg
          className=" w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </div>
      <div
        onClick={handleRight}
        className="bg-stone-800 absolute top-0 right-0 p-2 2xl:p-4 rounded-full cursor-pointer"
      >
        <svg
          className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Testimonials;
