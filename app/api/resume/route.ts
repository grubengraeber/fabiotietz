import { NextRequest, NextResponse } from "next/server";
import { join } from "path";
import { promises as fs } from 'fs';
import { language } from "@/app/utils/language";

export async function GET(request: NextRequest) {
    const language = request.nextUrl.searchParams.get('language')

    const actualLanguage: language = language && ["german", "english", "french", "croatian", "spanish"].includes(language) ? language as language : 'english';

    const prefix = 'fabiotietz_';
    let filename = prefix + 'resume';

    switch (actualLanguage) {
        case 'german':
            filename = prefix + 'lebenslauf'
            break;
        case 'french':
            filename = prefix + 'cv'
            break;
        case 'croatian':
            filename = prefix + 'životopis'
            break;
        case 'spanish':
            filename = prefix + 'resumen'
            break;
        default:
            filename = prefix + 'resume'
            break;
    }

    const filePath = join(process.cwd(), 'public', filename + '.pdf');

    try {
        const file = await fs.readFile(filePath);
        return new NextResponse(file, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename=${filename}.pdf`,
            },
        });
    } catch (error) {
        return new NextResponse('File not found', { status: 404 });
    }
}