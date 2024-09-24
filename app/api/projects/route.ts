import ProjectService from "@/app/service/ProjectService";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const projectService = new ProjectService();

    const projects = projectService.getProjects();

    return NextResponse.json({
        data: projects,
        error: null
    })
}