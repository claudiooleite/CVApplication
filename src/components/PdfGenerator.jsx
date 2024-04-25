import axios from 'axios';

const ConvertToPdf = async (htmlContent) => {
  try {
    const apiKey = 'evIVnlwRTp9RdC9C'; 
    const apiUrl = 'https://v2.convertapi.com/convert/web/to/pdf';
    
    const response = await axios.post(apiUrl, {
      Parameters: [
        {
          Name: 'Html',
          Value: htmlContent
        }
      ],
      ConversionTimeout: 180 // 3 minutes timeout
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      responseType: 'arraybuffer' // response type as arraybuffer to get PDF file
    });

    // Create a blob from the response data
    const blob = new Blob([response.data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'converted.pdf';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
    
  } catch (error) {
    console.error('Error converting to PDF:', error);
  }
};

export default ConvertToPdf;