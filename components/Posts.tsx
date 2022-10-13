import React from "react";
import Link from "node_modules/next/link";
import Image from "node_modules/next/image";
import PostCard from "./PostCard";
import { type Post } from "contentlayer/generated";

interface Posts {
  posts: Post[]
}

const Posts: React.FC<Posts> = ({ posts }: Posts) => {
  return (
    <div className="border-t border-b pt-36 border-stone-700 flex container flex-col mx-auto mt-24 2xl:mt-24 text-center">
      <div className="text-6xl 2xl:text-8xl font-bold">Posts</div>
      <div className="mt-4 text-xl 2xl:text-2xl text-stone-400 font-poppins">
        Welcome to my digital garden, where I read and learn about things, then write about them
      </div>
      <div className="flex flex-col gap-4 mt-20">
        {posts &&
          posts.map((post) => {
            return (
              <PostCard key={post.title} post={post} />
            );
          })}
      </div>
    </div>
  );
};

export default Posts;
