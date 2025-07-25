import BlogService from "@/app/service/BlogService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const blogService = new BlogService();

    const blogs = blogService.getBlogs();

    return NextResponse.json({
        data: blogs,
        error: null
    })
} 