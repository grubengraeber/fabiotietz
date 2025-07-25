import BlogService from "@/app/service/BlogService";
import { NextRequest, NextResponse } from "next/server";
import { actualBlogs } from "@/app/blog/data/available-blogs";

export async function generateStaticParams() {
    return actualBlogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export async function GET(request: NextRequest, { params} : { params: { slug: string } }) {
    const slug = params.slug;

    if (!slug) {
        console.log("Blog not found");
        return NextResponse.json({
            data: null,
            error: "Blog not found"
        })
    }

    const blogService = new BlogService();


    const blogPost = blogService.getBlog(slug);

    return NextResponse.json({
        data: blogPost,
        error: blogPost ? null : "Blog not found"
    })
}