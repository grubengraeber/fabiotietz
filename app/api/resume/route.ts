import { NextRequest, NextResponse } from "next/server";
import { language } from "@/app/utils/language";

export async function GET(request: NextRequest) {
    const language = request.nextUrl.searchParams.get('language')

    const actualLanguage: language = language && ["german", "english", "french", "croatian", "spanish"].includes(language) ? language as language : 'english';

    const prefix = 'fabiotietz_';
    const fileDescription: {filename: string, url: string} = {
        filename: prefix + 'resume',
        url: "https://z6qih29arqodtoqx.public.blob.vercel-storage.com/fabiotietz_resume-47AH3TIhDCEyB72ds4nAElyWLg5Q7b.pdf"
    }

    switch (actualLanguage) {
        case 'german':
            fileDescription.filename = prefix + 'lebenslauf';
            fileDescription.url = "https://z6qih29arqodtoqx.public.blob.vercel-storage.com/fabiotietz_lebenslauf-jHgg9hGndmoBwR9eRZlpzwKOFcnBmf.pdf";
            break;
        case 'french':
            fileDescription.filename = prefix + 'cv';
            fileDescription.url = "https://z6qih29arqodtoqx.public.blob.vercel-storage.com/fabiotietz_cv-aMgY2FvHrl3Bo93o1BweeS08Z8vJNv.pdf";
            break;
        case 'croatian':
            fileDescription.filename = prefix + 'životopis';
            fileDescription.url = "https://z6qih29arqodtoqx.public.blob.vercel-storage.com/fabiotietz_z%CC%8Civotopis-kAUVO4tMNsj46l710E5PeAbgYEA6kN.pdf";
            break;
        case 'spanish':
            fileDescription.filename = prefix + 'resumen';
            fileDescription.url = "https://z6qih29arqodtoqx.public.blob.vercel-storage.com/fabiotietz_resumen-vJaVYZJDZmdPgPNUxUaoQvaMN71IlL.pdf";
            break;
        default:
            fileDescription.filename = prefix + 'resume';
            fileDescription.url = "https://z6qih29arqodtoqx.public.blob.vercel-storage.com/fabiotietz_resume-47AH3TIhDCEyB72ds4nAElyWLg5Q7b.pdf";
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