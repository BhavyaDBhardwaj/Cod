document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('resume');

    downloadButton.addEventListener('click', function() {

        const pdfPath = 'C:/Users/msi1/Documents/Portfolio/CV_bhavya.pdf';

        const anchor = document.createElement('a');
        anchor.href = pdfPath;
        anchor.download = 'downloaded_CV.pdf';
        anchor.target = '_blank';

        anchor.click();
    });
});

