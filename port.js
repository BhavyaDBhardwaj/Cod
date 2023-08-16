document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('resume');

    downloadButton.addEventListener('click', function() {

        const pdfPath ='https://raw.githubusercontent.com/BhavyaDBhardwaj.github.io/CodSoft/main/CV_bhavya.pdf';

        const anchor = document.createElement('a');
        anchor.href = pdfPath;
        anchor.download = 'downloaded_CV.pdf';
        documnet.body.appendChild(anchor);

        anchor.click();
        document.body.removeChild(anchor);
    });
});

