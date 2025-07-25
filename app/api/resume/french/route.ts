import { NextResponse } from "next/server";

export async function GET() {
    const fileDescription = {
        filename: 'fabiotietz_cv',
        url: "https://z6qih29arqodtoqx.public.blob.vercel-storage.com/fabiotietz_cv-kgWNeULYdFpFpp6R1oSUEpUpego1Kr.pdf"
    };

    const response = await fetch(fileDescription.url);
    if (!response.ok) {
        return new NextResponse('File not found', { status: 404 });
    }

    const fileBuffer = await response.arrayBuffer();
    const headers = new Headers();
    headers.set('Content-Type', 'application/pdf');
    headers.set('Content-Disposition', `attachment; filename=${fileDescription.filename}.pdf`);

    return new NextResponse(fileBuffer, { headers });
} 