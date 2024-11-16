import Blog from "../data/blog/BlogPost";
import { actualBlogs } from "../blog/data/available-blogs";

class BlogService {
    allBlogs = actualBlogs;

    getBlogs(): Blog[] {
        return this.allBlogs;
    }

    getBlog(slug: string): Blog | undefined {
        return this.allBlogs.find((blog: Blog) => blog.slug === slug);
    }

}

export default BlogService;