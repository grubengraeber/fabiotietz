"use client";

import React, { useEffect, useState } from 'react'
import BlogWrapper, { BlogWrapperProps } from './BlogWrapper'
import LoadingAnimation from '@/app/components/animation/loading/loading-animation'
import Link from 'next/link'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

function BlogDetails({slug}: {slug: string}) {

    const [isLoading, setIsLoading] = useState(true)
    const [blog, setBlog] = useState<BlogWrapperProps | null>(null)

    useEffect(() => {
        fetchBlog().then(data => {
            setBlog(data)
        })
    }, [])

    const fetchBlog = async () => {
        const { data, error } = await fetch(`/api/blog/${slug}`).then(res => res.json())
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
        <Breadcrumb>
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
            slug={blog.slug}
            />
        }
    </>
  )
}

export default BlogDetails
