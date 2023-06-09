import React, { useState } from "react";
import MyDocument from "../../cv/TautvydasBliudziusCV.pdf";
import { Document, pdfjs, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import './MyResume.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const options = {
  cMapUrl: "cmaps/",
  standardFontDataUrl: "standard_fonts/",
};

const Resume = () => {
  const [numPages, setNumPages] = useState();

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div>
      <h1>Resume</h1>
      <div className="pdfWrapper">
      <Document 
        onLoadSuccess={onDocumentLoadSuccess}
        file={MyDocument}
        options={options}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page  key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
      </div>
    </div>
  );
};

export default Resume;
