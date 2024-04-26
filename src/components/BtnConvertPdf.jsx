import React from 'react';
import ConvertToPdf from './PdfGenerator';
import CVPreview from './Cvpreview';


const BtnConvertToPdf = ({ person, educationEntries, experienceEntries, projectEntries, skillsEntries, certificationsEntries }) => {
  return (
    <div>
      <button onClick={() => ConvertToPdf(person, educationEntries, experienceEntries, projectEntries, skillsEntries, certificationsEntries)}>Convert to PDF</button>
    </div>
  );
};

export default BtnConvertToPdf;