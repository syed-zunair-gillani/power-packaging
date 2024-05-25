import React from 'react'
import { client } from '../../../sanity/lib/client';
import {QSingleBlog} from '../../../sanity/queries'


const BlogDetails = ({blog}) => {
  console.log("🚀 ~ BlogDetails ~ blog:", blog)
  return (
    <div>BlogDetails</div>
  )
}

export default BlogDetails



export async function getServerSideProps(pageContext) {
    const slug = pageContext.query.slug;

    const blog = await client.fetch(QSingleBlog, {slug});

    if (!blog) {
        return {
             notFound: true,
        }
    }

    return {
      props: {
        blog,
        preview: true
      }
    }
  }