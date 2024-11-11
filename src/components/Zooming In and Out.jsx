/* eslint-disable */
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set the workerSrc path manually to resolve the worker error
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js`;

function ZoomWithDownload() {
  const [scale, setScale] = useState(1); // State for zooming
  const [pageNumber, setPageNumber] = useState(1); // State for page navigation
  const [numPages, setNumPages] = useState(null); // State for total number of pages

  // Function to handle the document load success and set the number of pages
  const onLoadSuccess = ({ numPages }) => setNumPages(numPages);

  // Function to handle the download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://www.pdf995.com/samples/pdf.pdf'; // Working PDF URL
    link.download = 'sample.pdf'; // Specify the file name when downloading
    link.click();
  };

  return (
    <div>
      <h2>PDF Viewer with Download and Zoom</h2>

      {/* Button to trigger the file download */}
      <button onClick={handleDownload}>Download PDF</button>

      {/* PDF Viewer */}
      <Document
        file="https://www.pdf995.com/samples/pdf.pdf"
        onLoadSuccess={onLoadSuccess}
      >
        <Page pageNumber={pageNumber} scale={scale} />
      </Document>

      {/* Zoom buttons */}
      <div>
        <button onClick={() => setScale(scale + 0.1)}>Zoom In</button>
        <button onClick={() => setScale(scale - 0.1)} disabled={scale <= 0.2}>Zoom Out</button>
      </div>

      {/* Page navigation */}
      <div>
        <button onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber === 1}>
          Previous Page
        </button>
        <button onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber === numPages}>
          Next Page
        </button>
      </div>
    </div>
  );
}

export default ZoomWithDownload;
