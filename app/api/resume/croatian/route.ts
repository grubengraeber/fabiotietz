import { NextResponse } from "next/server";

export async function GET() {
    const fileDescription = {
        filename: 'fabiotietz_zivotopis',
        url: "https://z6qih29arqodtoqx.public.blob.vercel-storage.com/fabiotietz_zivotopis-Rb2cost8LR3WXBd1WhNovS8dL2UGrS.pdf"
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