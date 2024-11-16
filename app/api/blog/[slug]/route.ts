import BlogService from "@/app/service/BlogService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params} : { params: { slug: string } }) {
    const slug = params.slug;

    console.log("Slug: ", slug);
    if (!slug) {
        console.log("Blog not found");
        return NextResponse.json({
            data: null,
            error: "Blog not found"
        })
    }

    const blogService = new BlogService();


    const project = blogService.getBlog(slug);

    return NextResponse.json({
        data: project,
        error: project ? null : "Blog not found"
    })
}