import ProjectService from "@/app/service/ProjectService";
import { NextRequest, NextResponse } from "next/server";
import { projects } from "@/app/projects/data/actual-projects";

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export async function GET(request: NextRequest, { params} : { params: { id: string } }) {
    const id = params.id;

    if (!id) {
        console.log("Project not found");
        return NextResponse.json({
            data: null,
            error: "Project not found"
        })
    }

    const projectService = new ProjectService();


    const project = projectService.getProject(id);

    return NextResponse.json({
        data: project,
        error: project ? null : "Project not found"
    })
}