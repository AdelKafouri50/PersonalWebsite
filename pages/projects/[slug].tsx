import { allProjects, type Project } from "contentlayer/generated";
import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { components } from "components/MDXComponents";
import { BiArrowBack } from "react-icons/bi";
import Link from "node_modules/next/link";

export const getStaticPaths = () => {
  return {
    paths: allProjects.map((project) => ({
      params: {
        slug: project.slug,
      },
    })),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps<{ project: Project }> = ({
  params,
}) => {
  const project = allProjects.find((project) => project.slug === params?.slug);
  if (!project) {
    return { notFound: true };
  }
  return {
    props: { project },
  };
};

export default function SingleProjectPage({ project }) {
  const MDXContent = useMDXComponent(project.body.code);
  return (
    <div className="container mx-auto my-20 font-poppins 2xl:text-3xl xl:text-xl font-thin">
      <h1 className="2xl:text-8xl xl:text-6xl font-bold mb-6">
        {project.title}
      </h1>
      <p className="2xl: text-stone-500 mb-20 text-2xl font-medium">
        {project.description}
      </p>
      <MDXContent components={{ ...components }} />
      <Link href="/">
        <a className="2xl: text-stone-500 mb-20 text-2xl font-medium flex items-center gap-1 mt-20 hover:text-stone-400 hover:animate-pulse">
          <BiArrowBack className="font-bold text-3xl" /> Back to home
        </a>
      </Link>
    </div>
  );
}
