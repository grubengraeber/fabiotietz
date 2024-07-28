"use client"

import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'module';

// Create a require function for importing the package.json
const require = createRequire(import.meta.url);

// Get the directory name of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import the package.json file
const pdfjsDistPackage = require('pdfjs-dist/package.json');

// Resolve the path to the pdf.worker.mjs file
const pdfjsDistPath = path.dirname(require.resolve('pdfjs-dist/package.json'));
const pdfWorkerPath = path.join(pdfjsDistPath,'legacy', 'build', 'pdf.worker.mjs');

// Copy the pdf.worker.mjs file to the public directory
fs.copyFileSync(pdfWorkerPath, path.join(__dirname, '../../../public/pdf.worker.mjs'));
