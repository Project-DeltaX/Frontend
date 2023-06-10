import { useState } from "react";

// import components from react-pdf
import { Document, Page } from "react-pdf";

function CvView() {
  const [numPages, setNumPages] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const BUCKET_NAME = "file-upload-intern"; // replace with your S3 bucket name
  const FILE_NAME = "Law.pdf"; // replace with your desired file name

  async function fetchPdfUrl() {
    const presignedUrlResponse = await fetch(
      "https://pdlyrpr7wi.execute-api.us-east-1.amazonaws.com/dev/file-upload-intern",
      {
        method: "GET",
        body: JSON.stringify({
          bucketName: BUCKET_NAME,
          fileName: FILE_NAME,
        }),
      }
    );
    const { downloadUrl } = await presignedUrlResponse.json();
    setPdfUrl(downloadUrl);
  }

  return (
    <>
      {pdfUrl ? (
        <Document
          file={pdfUrl}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      ) : (
        <button onClick={fetchPdfUrl}>View PDF</button>
      )}
    </>
  );
}

export default CvView;
