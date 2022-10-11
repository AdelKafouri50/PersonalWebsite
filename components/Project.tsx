import Image from "node_modules/next/image"
import Link from "node_modules/next/link"

function Project({project}) {
  return (
  <Link href={`/projects/${project.slug}`}>
      <div key={project.slug} className='border-t border-b border-stone-600 my-4 p-8 xl:flex-row flex xl:text-left justify-between cursor-pointer flex-col '>
        <div className="xl:border-l-8 pl-6 border-green-500">
            <div className=" p-6 cursor-pointer  text-white text-poppins lg:text-5xl text-4xl  font-poppins font-bold">{project.title}</div>
          <div className="text-3xl text-stone-400 m-6">
              {project.description}
              <div className="flex items-center mx-auto w-fit xl:text-left xl:w-full text-center mt-6 text-stone-200">
                Click to see more 
                <svg
                  className=" w-20 h-20 ml-2 mt-1  font-bold sm:w-6 sm:h-6 "
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
        </div>
      <div className={`xl:ml-12 border border-stone-600 flex content-center items-center h-fit w-fit my-auto mx-auto`} >
        <Image src={`/${project.thumbnail}`} width='600' height='300' layout='fixed' className='object-cover min-w-full min-h-full flex-shrink-0' />
      </div>
    </div>
  </Link>
  )
}

export default Project