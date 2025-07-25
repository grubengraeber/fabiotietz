import React from 'react'
import BlogClient from './blog-client'
import { actualBlogs } from '@/app/blog/data/available-blogs';
async function BlogDetails({params}: {params: {slug: string}}) {
    const blog = actualBlogs.find(b => b.slug === params.slug);

    if (!blog) {
        return <BlogClient slug={params.slug} />;
    }

    return <BlogClient slug={params.slug} />;
}

export async function generateStaticParams() {
    return actualBlogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export default BlogDetails
