import type { ImageProps } from "next/image";
import NextLink from "next/link";
import React from "react";
import { Aside } from "./Aside";

export const components = {
  strong: (props: any) => <strong className=" text-rose-300" {...props} />,
  p: (props: any) => (
    <p className="relative leading-normal font-light  " {...props} />
  ),
  Aside,
  h1: (props: any) => (
    <h2
      className="relative mt-3 border-t-2 border-rose-200/5 pt-9 2xl:text-5xl text-white mb-2 2xl:mb-6 font-bold sm:text-3xl"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h3
      className="relative mt-3 border-t-2 border-rose-200/5 pt-9 2xl:text-5xl text-white mb-2 2xl:mb-6 font-bold sm:text-2xl"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h4 className="text-2xl text-white mb-2 font-bold" {...props} />
  ),
  h4: (props: any) => (
    <h5 className="text-2xl text-white mb-2 font-bold" {...props} />
  ),
  hr: (props: any) => (
    <hr
      className="relative border-t-2 border-rose-200/5 pt-9 sm:pt-10"
      {...props}
    />
  ),
  a: ({ href = "", ...props }) => {
    if (href.startsWith("http")) {
      return (
        <a
          className="text-rose-100/90 underline decoration-rose-200/30 underline-offset-2 transition-all hover:text-rose-100 hover:decoration-rose-200/50"
          href={href}
          target="_blank"
          rel="noreferrer"
          {...props}
        />
      );
    }

    return (
      <NextLink href={href} passHref>
        <a
          className="text-rose-100/90 underline decoration-rose-200/30 underline-offset-2 transition-all hover:text-rose-100 hover:decoration-rose-200/50"
          {...props}
        />
      </NextLink>
    );
  },
  ul: (props: any) => (
    <ul
      className="space-y-3 [li>&]:mt-3 [&>li]:relative [&>li]:pl-7 before:[&>li]:absolute before:[&>li]:left-1 before:[&>li]:top-3 before:[&>li]:h-1.5 before:[&>li]:w-1.5 before:[&>li]:rounded-full before:[&>li]:bg-rose-100/20"
      {...props}
    />
  ),
  ol: (props: any) => (
    <ol className="list-decimal space-y-3 pl-10" {...props} />
  ),
  Img: ({
    children,
    bleed,
    caption,
    ...props
  }: {
    children: React.ReactNode;
    bleed?: boolean;
    caption?: string;
  } & ImageProps) => {
    return (
      <>
        {caption ? (
          <div className="mt-2 text-sm italic text-rose-100/60">{caption}</div>
        ) : null}
      </>
    );
  },
  blockquote: (props: any) => (
    <blockquote
      className="border-l-2 border-rose-200/10 pl-4 text-xl italic xl:!col-start-2 xl:!col-end-3"
      {...props}
    />
  ),
  del: (props: any) => (
    <del className="text-rose-100/70 line-through" {...props} />
  ),
};
