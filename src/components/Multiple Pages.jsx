import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set the workerSrc path manually to resolve the worker error
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js`;

function MultiplePagesPDFViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

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
      <h2>Multiple Pages PDF Viewer</h2>

      {/* Button to trigger the file download */}
      <button onClick={handleDownload}>Download PDF</button>

      {/* PDF Viewer */}
      <Document
        file="https://www.pdf995.com/samples/pdf.pdf"
        onLoadSuccess={onLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>

      {/* Navigation buttons */}
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

export default MultiplePagesPDFViewer;
