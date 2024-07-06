import Link from "next/link";
import Project from "../../data/project";

const ProjectDetailView: React.FC<{project: Project}> = ({project}: {project: Project}) => {

  return (
    <div className="container mx-auto p-4">
      <img src={project.banner} alt={project.title} className="w-full h-64 object-cover rounded-lg" />
      <h1 className="text-3xl font-bold mt-4">{project.title}</h1>
      <p className="mt-2">{project.content}</p>
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
  );
};

export default ProjectDetailView;