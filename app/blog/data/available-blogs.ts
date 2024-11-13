import BlogPost from "@/app/data/blog/BlogPost";
import { Technologies } from "@/app/technology/data/availableTechnologies";

export const actualBlogs: BlogPost[] = [
    new BlogPost(
        {
            slug: "custom-qr-code-generator",
            date: new Date("2024-11-13"),
            title: "🎉 Create Custom QR Codes for Free – No Hidden Fees, Just Pure Convenience! 🚀",
            bannerImage: "/images/blogs/qr-code-generator/banner.png",
            content: ``,
            video: "",
            sources: [],
            technologies: [
                Technologies.REACT, 
                Technologies.TYPESCRIPT, 
                Technologies.TAILWIND_CSS,
                Technologies.NEXT_JS
            ]
        }
    )
]