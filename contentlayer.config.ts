import {defineDocumentType, makeSource} from 'contentlayer/source-files'
import GithubSlugger from "github-slugger"

export const Project = defineDocumentType(() => ({
    name: "Project",
    contentType: 'mdx',
    filePathPattern: "projects/*.mdx",
    fields: {
        title: {
            type: 'string',
            required: true,
        },
        thumbnail : {
            type: 'string'
        },
        description : {
            type: 'string',
            required: true,
        },
    },
    computedFields: {
        slug: {
            type: 'string',
            resolve: (project) =>
                project._raw.sourceFileName.replace(/\.mdx$/, "")
        }
    },
}))

export const Post = defineDocumentType(() => ({
    name: "Post",
    contentType: 'mdx',
    filePathPattern: "posts/*.mdx",
    fields: {
        title: {
            type: 'string',
            required: true,
        },
        publishedAt: {
            type: 'string',
            required: true,
        },
        description : {
            type: 'string'
        },
    },
    computedFields: {
        slug: {
            type: 'string',
            resolve: (post) =>
                post._raw.sourceFileName.replace(/\.mdx$/, "")
        },
        headings: {
            type: "json",
            resolve: async (doc) => {
              const slugger = new GithubSlugger()
      
              const regXHeader = /\n\n(?<flag>#{1,6})\s+(?<content>.+)/g
      
              const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
                ({ groups }) => {
                  const flag = groups?.flag
                  const content = groups?.content
                  return {
                    heading: flag?.length,
                    text: content,
                    slug: content ? slugger.slug(content) : undefined,
                  }
                },
              )
      
              return headings
            },
          },
    },
}))


export default makeSource({
    contentDirPath: 'content',
    documentTypes: [Post, Project],
})