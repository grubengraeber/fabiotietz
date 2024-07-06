import type { PutBlobResult } from '@vercel/blob';
import { useState } from 'react';


export const downloadFile = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  export const downloadVercelBlob = (url: string, filename: string) => {
    const [blob, setBlob] = useState<PutBlobResult | null>(null);

    
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };