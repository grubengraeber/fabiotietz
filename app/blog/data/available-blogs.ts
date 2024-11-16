import BlogPost from "@/app/data/blog/BlogPost";
import { Technologies } from "@/app/technology/data/availableTechnologies";

export const actualBlogs: BlogPost[] = [
    new BlogPost(
        {
            slug: "custom-qr-code-generator",
            date: new Date("2024-11-13"),
            title: "🎉 Create Custom QR Codes for Free – No Hidden Fees, Just Pure Convenience! 🚀",
            bannerImage: "/blog/custom-qr-code-generator/images/banner.jpeg",
            content: "/blog/custom-qr-code-generator/text/qr_code.md",
            video: "https://www.youtube.com/watch?v=142TGhaTMtI&t=239s",
            sources: ["https://en.wikipedia.org/wiki/QR_code", "https://www.youtube.com/watch?v=142TGhaTMtI&t=239s"],
            tags: ["QR Code", "Generator", "Custom", "Free", "Explained"],
            technologies: [
                Technologies.REACT, 
                Technologies.TYPESCRIPT, 
                Technologies.TAILWIND_CSS,
                Technologies.NEXT_JS
            ]
        }
    )
]