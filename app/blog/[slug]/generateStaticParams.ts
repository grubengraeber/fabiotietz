import { actualBlogs } from '@/app/blog/data/available-blogs';

export async function generateStaticParams() {
    return actualBlogs.map((blog) => ({
        slug: blog.slug,
    }));
} 