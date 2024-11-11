/* eslint-disable */
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set the workerSrc path manually to resolve the worker error
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js`;

function PDFViewerWithDownload() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Static PDF URL
  const pdfUrl = 'https://www.pdf995.com/samples/pdf.pdf';

  // Function to handle the download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl; // Static PDF URL
    link.download = 'sample.pdf'; // Specify the file name when downloading
    link.click();
  };

  // Function to handle the loading of the PDF document
  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  // Function to navigate between pages
  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= numPages) {
      setPageNumber(pageNum);
    }
  };

  return (
    <div>
      <h2>PDF Viewer with Download</h2>

      {/* Button to trigger the file download */}
      <button onClick={handleDownload}>Download PDF</button>

      {/* PDF Viewer */}
      <Document
        file={pdfUrl}
        onLoadSuccess={onLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>

      {/* Navigation Controls */}
      {numPages && (
        <div>
          <button onClick={() => goToPage(pageNumber - 1)}>Previous</button>
          <span>
            Page {pageNumber} of {numPages}
          </span>
          <button onClick={() => goToPage(pageNumber + 1)}>Next</button>
        </div>
      )}
    </div>
  );
}

export default PDFViewerWithDownload;
