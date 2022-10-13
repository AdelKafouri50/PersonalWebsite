import {defineDocumentType, makeSource} from 'contentlayer/source-files'

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
        }
    },
}))


export default makeSource({
    contentDirPath: 'content',
    documentTypes: [Post, Project],
})