import Link from "next/link";
import Project from "../../data/project/project";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Badge } from "@/components/ui/badge";
import ColorService from "@/app/service/ColorService";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "@/css/github-markdown.css"

const ProjectDetailView: React.FC<{project: Project}> = ({project}: {project: Project}) => {
  const theme = useTheme();
  const isDarkMode = !(theme.theme === "light" || (theme.theme === "system" && theme.systemTheme === "light"));

  const colorService = new ColorService();

  return ( 
    <div className="container mx-auto p-4">
      <div className="grid lg:grid-cols-2 max-md:grid-cols-1">
      <Image src={isDarkMode && project.bannerDark ? project.bannerDark : project.bannerLight} alt={project.title} className="w-full object-cover rounded-lg" height={50} width={100} />
      <div className="">
        <div className="flex-row gap-5 text-center">
          <h1 className="lg:text-8xl max-md:text-3xl font-bold mt-4">{project.title}</h1>
          <Badge className={`${colorService.backgroundForStatus(project)} ${colorService.textForStatus(project)} mt-4`} >{project.status}</Badge>
        </div>
      <div className="m-4">
      <ReactMarkdown
      className={"markdown-body"}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      >
        {project.content}
      </ReactMarkdown>
      </div>
      {project.blogPost && (
        <Link href={project.blogPost} className="text-blue-500 hover:underline">
          Blog Post
        </Link>
      )}
      {project.url && (
        <Link href={project.url} className="text-blue-500 hover:underline ml-4">
          Project URL
        </Link>
      )}
      <p className="mt-4">
        <strong>Start Date:</strong> {project.startDate.toDateString()}
      </p>
      {project.endDate && (
        <p>
          <strong>End Date:</strong> {project.endDate.toDateString()}
        </p>
      )}
      </div>
      </div>
    </div>
  );
};

export default ProjectDetailView;