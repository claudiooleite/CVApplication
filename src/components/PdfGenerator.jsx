import React from 'react';
import ConvertApi from 'convertapi-js';

const ConvertToPdf = async () => {
  try {
    // Initialize ConvertAPI client with your API key
    let convertApi = ConvertApi.auth('evIVnlwRTp9RdC9C');
    // Create parameters for conversion
    let params = convertApi.createParams();

    // Add HTML file to convert (replace with your actual HTML content or URL)
    params.add('File', new URL('https://odincvapp.netlify.app/'));

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