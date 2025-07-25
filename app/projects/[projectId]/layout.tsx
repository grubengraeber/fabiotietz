import { projects } from '@/app/projects/data/actual-projects';

export async function generateStaticParams() {
    return projects.map((project) => ({
        projectId: project.id,
    }));
}

export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
} 