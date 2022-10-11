import Link from "node_modules/next/link"
function Contact() {
  return (
    <div className="border-t py-36 border-stone-700 flex container flex-col mx-auto mt-24 2xl:mt-24 text-center">
        <div className="text-3xl 2xl:text-8xl font-bold">
            Get it touch
        </div>
        <div className="mt-4 2xl:text-2xl text-stone-400 font-poppins">
            If you have a job opportunity for me, or a project you would like to discuss with me, feel free to email me at <span className="text-rose-300 cursor-default">Adelkafouri50@gmail.com</span>, you can also find me on             <Link
              href="https://www.linkedin.com/in/adel-kafouri-232746193/"
              passHref
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-blue-400"
              >
                Linkedin
              </a>
            </Link>,             <Link
              href="https://github.com/AdelKafouri50"
              passHref
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-white"
              >
                Github
              </a>
            </Link>, and {''}
            <Link
              href="https://www.upwork.com/freelancers/~01b352b10a5e23d05d"
              passHref
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-green-500"
              >
                Upwork
              </a>
            </Link> 
        </div>
    </div>
  )
}

export default Contact