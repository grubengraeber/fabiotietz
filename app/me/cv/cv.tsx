"use client"

import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { CustomPagination } from '@/app/components/pagination/custom-pagination';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

/* pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
    import.meta.url
).toString(); */

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

// TODO: language
const CV = () => {
    const [numPages, setNumPages] = useState<number>(3);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [pageWidth, setPageWidth] = useState<number>(800);

    useEffect(() => {
        const updatePageWidth = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setPageWidth(width * 0.9); // 90% of the screen width for small screens
            } else {
                setPageWidth(800); // Fixed width for larger screens
            }
        };

        updatePageWidth();
        window.addEventListener('resize', updatePageWidth);
        return () => window.removeEventListener('resize', updatePageWidth);
    }, []);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    // TODO: get the correct one based on the language chosen
    const pdfUrl = "https://z6qih29arqodtoqx.public.blob.vercel-storage.com/fabiotietz_resume-vdRderZ12BKSGo84rXe7SxYSydzdjs.pdf";

    return (
        <div>
            <div className='flex justify-center'>
                <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess} className=''>
                <Page pageNumber={pageNumber} width={pageWidth} />
                </Document>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 items-center mt-4'>
                <div></div>
                <div className='text-center'>
                    <CustomPagination totalPages={numPages} currentPage={pageNumber} totalPagesToDisplay={3} setCurrentPage={setPageNumber} />
                </div>
                <div className='text-center sm:text-right mt-2 sm:mt-0'>
                    {pageNumber} of {numPages}
                </div>
            </div>
        </div>
    );
};

export default CV;
