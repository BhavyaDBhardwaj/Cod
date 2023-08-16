document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('resume');

    downloadButton.addEventListener('click', function() {

        const pdfPath ='https://drive.google.com/file/d/1FeFCOoXBMwur6ZubMLWlAQcLs0NHaT5z/view?usp=sharing';

        const anchor = document.createElement('a');
        anchor.href = pdfPath;
        anchor.download = 'downloaded_CV.pdf';
        documnet.body.appendChild(anchor);

        anchor.click();
        document.body.removeChild(anchor);
    });
});

