import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { Stack, Button } from "@mui/material";

function CvView({ filePath }) {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const changePage = (offset) => {
    setCurrentPage((prevPage) => prevPage + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  return (
    <div>
      <div>
        <Stack direction="row" spacing={2}>
          <Button color="secondary">Pending</Button>
          <Button variant="contained" color="success">
            Select
          </Button>
          <Button variant="outlined" color="error">
            Rejected
          </Button>
        </Stack>
      </div>
      <div>
        <button disabled={currentPage <= 1} onClick={previousPage}>
          Previous
        </button>
        <button disabled={currentPage >= numPages} onClick={nextPage}>
          Next
        </button>
      </div>
      <div>
        <Document file={filePath} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={currentPage} />
        </Document>
      </div>
    </div>
  );
}

export default CvView;

// import React, { useEffect, useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import { CircularProgress, Grid } from '@mui/material';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const CvView = ({ pdfUrl }) => {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   useEffect(() => {
//     setPageNumber(1);
//   }, [pdfUrl]);

//   return (
//     <Grid container justifyContent="center">
//       <Grid item>
//         <Document
//           file={pdfUrl}
//           onLoadSuccess={onDocumentLoadSuccess}
//           loading={<CircularProgress />}
//         >
//           <Page pageNumber={pageNumber} />
//         </Document>
//         <p>
//           Page {pageNumber} of {numPages}
//         </p>
//       </Grid>
//     </Grid>
//   );
// };

// export default CvView;
