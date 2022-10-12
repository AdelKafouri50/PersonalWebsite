import { allProjects,  Project } from "contentlayer/generated";
import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Projects from "../components/Projects";
import Contact from "components/Contact";



export const getStaticProps: GetStaticProps<{
  projects:Project[];
}> = () => {
  return { props: { projects: allProjects } };
};

export default function Home({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="mx-10">
      <Head>
        <title>Adel Kafouri</title>
        <meta name="description" content="Adel Kafouri's personal portfolio and blog" />
        <link rel="icon" href="/me3.jpeg" />
      </Head>
      <Hero />
      <Testimonials />
      <Projects projects={projects} />
      <div id='Contact'>
        <Contact  />
      </div>
    </div>
  );
}
