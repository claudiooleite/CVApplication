import React from 'react';
import { convertToPdf } from './pdfGenerator';
import CVPreview from './Cvpreview';


const BtnConvertToPdf = () => {
  const contentToConvert = CVPreview;

  const handleConvertClick = () => {
    convertToPdf(contentToConvert);
  };

  return (
    <div>
      <button onClick={handleConvertClick}>Convert to PDF</button>
    </div>
  );
};

export default BtnConvertToPdf;