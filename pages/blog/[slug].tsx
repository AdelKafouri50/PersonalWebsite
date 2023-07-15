import { allPosts, type Post } from "contentlayer/generated";
import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { components } from "components/MDXComponents";
import { BiArrowBack } from "react-icons/bi";
import Link from "node_modules/next/link";
import Head from "node_modules/next/head";
import clsx from "clsx";

export const getStaticPaths = () => {
  return {
    paths: allPosts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps<{ post: Post }> = ({
  params,
}) => {
  const post = allPosts.find((post) => post.slug === params?.slug);
  if (!post) {
    return { notFound: true };
  }
  return {
    props: { post },
  };
};

export default function SinglePostPage({ post, }: InferGetStaticPropsType<typeof getStaticProps>) {
    
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <div className="sm:container mx-10 sm:mx-auto my-20 font-poppins 2xl:text-3xl xl:text-xl font-thin relative">
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={`${post.description}`} />
      </Head>
      <h1 className="2xl:text-8xl xl:text-6xl font-bold mb-6">
        {post.title}
      </h1>
      <p className="2xl: text-stone-500 mb-20 text-2xl font-medium">
        {post.description}
      </p>
      {/* <div className="sticky w-fit">
        {post.headings ? (
                <div className="space-y-2 text-sm">
                  <div className="uppercase text-rose-100/30">On this page</div>

                  {post.headings.map((heading) => {
                    return (
                      <div key={heading.slug}>
                        <a
                          href={`#${heading.slug}`}
                          className={clsx(
                            "block text-rose-100/50 underline-offset-2 transition-all hover:text-rose-100 hover:underline hover:decoration-rose-200/50",
                            {
                              "pl-2": heading.heading === 2,
                              "pl-4": heading.heading === 3,
                            },
                          )}
                        >
                          {heading.text}
                        </a>
                      </div>
                    )
                  })}
                </div>
              ) : null}
      </div> */}
      <MDXContent components={{ ...components }} />
      <Link href="/blog">
        <a className="2xl: text-stone-500 mb-20 text-2xl font-medium flex items-center gap-1 mt-20 hover:text-stone-400 hover:animate-pulse">
          <BiArrowBack className="font-bold text-3xl" /> Back to posts
        </a>
      </Link>
    </div>
  );
}

