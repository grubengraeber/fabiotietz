import { Technologies } from '@/app/technology/data/availableTechnologies';

export async function generateStaticParams() {
    const tools = Object.values(Technologies);
    return tools.map((tool) => ({
        tool: tool.name.toLowerCase(),
    }));
}

export default function ToolLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
} 