import Image from "next/image";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Link from "node_modules/next/link";
import { SiUpwork } from "react-icons/si";
function Hero() {
  return (
    <div className="container border rounded-md border-stone-700 mx-auto p-20 mt-40 bg-[#181818] text-center">
      <RoughNotationGroup show="true">
        <div className="flex flex-col items-center">
          <div className="-mt-44  px-3   bg-black rounded-full ">
            <Image
              className="rounded-full object-cover"
              src="/me3.jpeg"
              alt="Picture of the Adel Kafouri"
              width={200}
              height={200}
            />
          </div>
          <div className="xl:text-3xl 2xl:text-6xl text-white mb-4 p-4 font-poppins font-bold leading-snug">
            <h1 className="mt-6">Hello there.</h1>
            <div>
              {"I'm Adel, a "}
              Software Engineer{" "}
              by trade,
              <br /> and a Curious Learner by heart.
            </div>
          </div>
          <p className="mt-4 2xl:text-xl text-stone-400 font-poppins">
            During my time in school, I explored different areas in the
            Engineering world,
            <br />
            from building a Laser Security System with basic transistors and
            other electronic parts, <br /> to staying up all night coding up a
            2D car racing game.
            <br /> <br />
            After getting my {"Bachelor's"} in Computer Engineering, and a post
            graduate diploma in Web Development, <br /> I decided to start
            working as a Freelance Developer on Upwork, and throughout the
            years, <br /> {"I've"} managed to achieve the Top Rated Plus Status{" "}
            <RoughNotation show="true" type="highlight" color="#5493E8" padding=''>
              <span className=" text-white">(Top 3% On the Platform)</span>.
            </RoughNotation>
            <br />
            <br />
            Recently I started looking for a new role as a developer, so if you
            have an opportunity, feel free to{" "}
            <RoughNotation type="underline" show="true" color="red" order="3">
              hire me ;)
            </RoughNotation>
          </p>
          <div className="flex gap-4 mt-10 font-poppins text-xl">
            <a href="#Contact" className="p-4 border rounded-md bg-white text-black cursor-pointer transition ease-linear hover:bg-[#181818] hover:text-white hover:border-white duration-200">
              Contact me
            </a>
            <Link
              href="https://www.upwork.com/freelancers/~01b352b10a5e23d05d"
              passHref
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                className=" p-4 border rounded-md cursor-pointer bg-green-500 border-green-500 text-black transition ease-linear hover:bg-[#181818] hover:text-green-500 hover:border-green-500 duration-200"
              >
                View Upwork
              </a>
            </Link>
          </div>
        </div>
      </RoughNotationGroup>
    </div>
  );
}

export default Hero;
