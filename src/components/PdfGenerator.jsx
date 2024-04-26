import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ConvertApi from 'convertapi-js';
import CVPreview from './Cvpreview';

const ConvertToPdf = async () => {
  try {
    // Initialize ConvertAPI client with your API key
    let convertApi = ConvertApi.auth('evIVnlwRTp9RdC9C');

    // Generate HTML content from CVPreview component
    const htmlContent = ReactDOMServer.renderToString(
      <CVPreview
        person={person}
        educationEntries={educationEntries}
        experienceEntries={experienceEntries}
        projectEntries={projectEntries}
        skillsEntries={skillsEntries}
        certificationsEntries={certificationsEntries}
      />
    );
    // Create parameters for conversion
    let params = convertApi.createParams();

    // Add generated HTML content to convert
    params.add('File', htmlContent);

    // Perform conversion from HTML to PDF
    let result = await convertApi.convert('htm', 'pdf', params);

    // Handle the result (e.g., download the converted PDF)
    if (result && result.file) {
      // Create a download link for the converted PDF
      const downloadLink = document.createElement('a');
      downloadLink.href = result.file.url;
      downloadLink.download = 'converted.pdf';
      downloadLink.click();
    }
  } catch (error) {
    console.error('Error converting to PDF:', error);
    // Handle or display the error message to the user
  }
};

export default ConvertToPdf;