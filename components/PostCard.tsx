import Image from "node_modules/next/image"
import Link from "node_modules/next/link"

function PostCard({post}) {
  return (
  <Link href={`/blog/${post.slug}`}>
      <div key={post.slug} className='border-t  border-stone-600 my-4 p-8 xl:flex-row flex xl:text-left justify-between cursor-pointer flex-col transition ease-linear duration-200 sm:hover:translate-x-6 '>
        <div className="xl:border-l-8 sm:pl-6 border-green-500 w-full">
            <div className="flex justify-between  items-center w-full">
                <div className=" sm:p-6 cursor-pointer  text-white text-poppins text-lg sm:text-4xl  font-poppins font-bold">{post.title}</div>
                <div className=" cursor-pointer  text-stone-400 text-poppins text-md sm:text-2xl  font-poppins font-bold">{post.publishedAt}</div>
            </div>
          <div className="sm:text-3xl text-lg text-stone-400 sm:m-6 mt-8">
              {post.description}
              <div className="text-sm sm:text-2xl flex items-center mx-auto w-fit xl:text-left xl:w-full text-center mt-6 text-stone-200">
                Click to see more 
                <svg
                  className=" w-4 h-4 sm:w-6 sm:h-6 ml-2 mt-1  font-bold  "
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
    </div>
  </Link>
  )
}

export default PostCard