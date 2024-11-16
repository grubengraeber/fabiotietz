"use client";

import React, { useEffect, useState } from 'react'
import BlogWrapper from './BlogWrapper'
import LoadingAnimation from '@/app/components/animation/loading/loading-animation'
import Link from 'next/link'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import BlogPost from '@/app/data/blog/BlogPost';

function BlogDetails({params}: {params: {slug: string}}) {

    const [isLoading, setIsLoading] = useState(true)
    const [blog, setBlog] = useState<BlogPost | null>(null)

    useEffect(() => {
        fetchBlog().then(data => {
            setBlog(data)
        })
    }, [])

    const fetchBlog = async () => {
        const { data, error } = await fetch(`/api/blog/${params.slug}`).then(res => res.json())
        if (error) {
            console.error(error)
            setIsLoading(false)
            return null
        }
        setIsLoading(false)
        return data
    }

  return (
    <>
        <Breadcrumb className='ml-8'>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>{blog ? blog?.slug : "..."}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
        {
            isLoading && <LoadingAnimation />
        }
        {
            !isLoading && !blog && 
                <div>
                    <h1>Blog not found</h1>
                    <Link href="/blog">Back to blog</Link>
                </div>
        }
        {
            !isLoading && blog &&
            <BlogWrapper
            title={blog.title}
            content={blog.content}
            bannerImage={blog.bannerImage}
            video={blog.video}
            sources={blog.sources}
            tags={blog.tags}
            technologies={blog.technologies}
            projectName={blog.projectName}
            slug={blog.slug}
            date={blog.date}
            />
        }
    </>
  )
}

export default BlogDetails
