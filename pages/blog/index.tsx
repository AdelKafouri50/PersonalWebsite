import { allPosts,  Post } from "contentlayer/generated";
import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import Head from "next/head";
import Posts from "components/Posts";



export const getStaticProps: GetStaticProps<{
  posts:Post[];
}> = () => {
  return { props: { posts: allPosts } };
};

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="mx-10">
      <Head>
        <title>Adel's blog</title>
        <meta name="description" content="Adel Kafouri's personal blog" />
        <link rel="icon" href="/me3.jpeg" />
      </Head>
      <Posts posts={posts} />
    </div>
  );
}
