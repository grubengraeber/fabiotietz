"use client";

import React, { useEffect, useState } from 'react'
import BlogPreview from './BlogPreview'
import { BlogWrapperProps } from './[slug]/BlogWrapper'
import LoadingAnimation from '../components/animation/loading/loading-animation';

function Blog() {
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState<BlogWrapperProps[]>([])

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    const { data, error } = await fetch('/api/blog').then(res => res.json())
    if (error) {
      console.error(error)
      setIsLoading(false)
      return
    }
    setPosts(data)
    setIsLoading(false)
  }

  return (
    <div className="container mx-auto p-4">
      {
        isLoading && 
        <LoadingAnimation />
      }
      {
        !isLoading && posts.length === 0 && <p>No blogs found</p>
      }
      {
        !isLoading && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
              posts.map(blog => (
                <BlogPreview
                  key={blog.slug}
                  title={blog.title}
                  imageUrl={blog.bannerImage}
                  slug={blog.slug}
                />
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default Blog
