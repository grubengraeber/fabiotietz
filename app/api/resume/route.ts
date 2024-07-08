import { NextRequest, NextResponse } from "next/server";
import { language } from "@/app/utils/language";

export async function GET(request: NextRequest) {
    const language = request.nextUrl.searchParams.get('language')

    const actualLanguage: language = language && ["german", "english", "french", "croatian", "spanish"].includes(language) ? language as language : 'english';

    const prefix = 'fabiotietz_';
    const fileDescription: {filename: string, url: string} = {
        filename: prefix + 'resume',
        url: "https://z6qih29arqodtoqx.public.blob.vercel-storage.com/fabiotietz_resume-vdRderZ12BKSGo84rXe7SxYSydzdjs.pdf"
    }

    switch (actualLanguage) {
        case 'german':
            fileDescription.filename = prefix + 'lebenslauf';
            fileDescription.url = "https://z6qih29arqodtoqx.public.blob.vercel-storage.com/fabiotietz_lebenslauf-oRcJpAMhQEAIU1XmFt0TCfJ77ESo3q.pdf";
            break;
        case 'french':
            fileDescription.filename = prefix + 'cv';
            fileDescription.url = "https://z6qih29arqodtoqx.public.blob.vercel-storage.com/fabiotietz_cv-kgWNeULYdFpFpp6R1oSUEpUpego1Kr.pdf";
            break;
        case 'croatian':
            fileDescription.filename = prefix + 'zivotopis';
            fileDescription.url = "https://z6qih29arqodtoqx.public.blob.vercel-storage.com/fabiotietz_zivotopis-Rb2cost8LR3WXBd1WhNovS8dL2UGrS.pdf";
            break;
        case 'spanish':
            fileDescription.filename = prefix + 'resumen';
            fileDescription.url = "https://z6qih29arqodtoqx.public.blob.vercel-storage.com/fabiotietz_resumen-BS5Y7JdVh8DgpRYhEwBQeE8p1eGIF6.pdf";
            break;
        default:
            fileDescription.filename = prefix + 'resume';
            fileDescription.url = "https://z6qih29arqodtoqx.public.blob.vercel-storage.com/fabiotietz_resume-vdRderZ12BKSGo84rXe7SxYSydzdjs.pdf";
            break;
    }

    // TODO: GET FILE
    /* const filePath = join(process.cwd(), 'public', fileDescription.filename + '.pdf'); */

    /* try {
        const file = await fs.readFile(filePath);
        return new NextResponse(file, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename=${fileDescription.filename}.pdf`,
            },
        });
    } catch (error) {
        return new NextResponse('File not found', { status: 404 });
    } */

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