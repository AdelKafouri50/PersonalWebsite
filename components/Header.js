import Link from "node_modules/next/link";
import { useState } from "react";
import { SiUpwork } from "react-icons/si";
import { BsLinkedin } from "react-icons/Bs";
import { BsGithub } from "react-icons/Bs";


function Header() {
  const [TooltipHidden, setTooltipHidden] = useState(true)

  return (
    <div className=" flex justify-between container  mx-auto mt-10 font-poppins">
      <Link href="/">
        <a>Adel Kafouri</a>
      </Link>
      <div className="flex gap-3 relative  pl-10 ">
        <div className={`absolute border-white-400 text-white bg-stone-700 p-3 text-sm rounded-md top-8 left-0 ${TooltipHidden?'hidden':'block'}`}>
          Coming Soon
        </div>
        <div className="cursor-default text-gray-400" onMouseEnter={() => setTooltipHidden(false)} onMouseLeave={() => setTooltipHidden(true)}>
          Blog
        </div>
        <div>
          <Link
              href="https://www.linkedin.com/in/adel-kafouri-232746193/"
              passHref
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-blue-400"
              >
                <BsLinkedin className='text-2xl'/>
              </a>
          </Link>   
        </div>
        <div>
          <Link
              href="https://github.com/AdelKafouri50"
              passHref
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-white"
              >
                <BsGithub className='text-2xl' />
              </a>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Header;
