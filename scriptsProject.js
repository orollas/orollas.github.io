//------------------------------------- Master Thesis---------------------------------------------------------------------------------------
const urlMA = 'ProjectReports/Extenden_Abstract.pdf';  // Pfad zum PDF
 // Initialisiere PDF.js
 const loadingTaskMA = pdfjsLib.getDocument(urlMA);
 loadingTaskMA.promise.then(pdf => {
   console.log('PDF geladen');
   
   const totalPages = pdf.numPages;
   const pdfBox = document.getElementById('pdfMA-box');

   for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
     pdf.getPage(pageNum).then(page => {
       const scale = 1.5;
       const viewport = page.getViewport({ scale: scale });

       const canvas = document.createElement('canvas');
       const context = canvas.getContext('2d');
       canvas.width = viewport.width;
       canvas.height = viewport.height;


       page.render({
         canvasContext: context,
         viewport: viewport
       });


       pdfBox.appendChild(canvas);
     });
   }
 }).catch(error => {
   console.error('Fehler beim Laden des PDFs: ' + error);
 });
    // Fullscreen-Funktion
    document.getElementById('fullscreenMA-btn').addEventListener('click', () => {
        const pdfBox = document.getElementById('pdfMA-box');
        
        if (pdfBox.requestFullscreen) {
          pdfBox.requestFullscreen();
        } else if (pdfBox.mozRequestFullScreen) { // Firefox
          pdfBox.mozRequestFullScreen();
        } else if (pdfBox.webkitRequestFullscreen) { // Chrome, Safari und Opera
          pdfBox.webkitRequestFullscreen();
        } else if (pdfBox.msRequestFullscreen) { // IE/Edge
          pdfBox.msRequestFullscreen();
        }
      });

//-------------------------------------Master Project---------------------------------------------------------------------------------------
const urlMP = 'ProjectReports/Triplesim_Report.pdf';  // Pfad zum PDF
// Initialisiere PDF.js
const loadingTaskMP = pdfjsLib.getDocument(urlMP);
loadingTaskMP.promise.then(pdf => {
console.log('PDF geladen');

const totalPages = pdf.numPages;
const pdfBox = document.getElementById('pdfMP-box');

for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
pdf.getPage(pageNum).then(page => {
const scale = 1.5;
const viewport = page.getViewport({ scale: scale });

const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
canvas.width = viewport.width;
canvas.height = viewport.height;


page.render({
    canvasContext: context,
    viewport: viewport
});


pdfBox.appendChild(canvas);
});
}
}).catch(error => {
console.error('Fehler beim Laden des PDFs: ' + error);
});
// Fullscreen-Funktion
document.getElementById('fullscreenMP-btn').addEventListener('click', () => {
    const pdfBox = document.getElementById('pdfMP-box');
    
    if (pdfBox.requestFullscreen) {
    pdfBox.requestFullscreen();
    } else if (pdfBox.mozRequestFullScreen) { // Firefox
    pdfBox.mozRequestFullScreen();
    } else if (pdfBox.webkitRequestFullscreen) { // Chrome, Safari und Opera
    pdfBox.webkitRequestFullscreen();
    } else if (pdfBox.msRequestFullscreen) { // IE/Edge
    pdfBox.msRequestFullscreen();
    }
});


//-------------------------------------HCI---------------------------------------------------------------------------------------
const urlHCI = 'ProjectReports/HCICoursePaper.pdf';  // Pfad zum PDF
// Initialisiere PDF.js
const loadingTaskHCI = pdfjsLib.getDocument(urlHCI);
loadingTaskHCI.promise.then(pdf => {
    console.log('PDF geladen');
    
    const totalPages = pdf.numPages;
    const pdfBox = document.getElementById('pdfHCI-box');

    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
    pdf.getPage(pageNum).then(page => {
        const scale = 1.5;
        const viewport = page.getViewport({ scale: scale });

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;


        page.render({
        canvasContext: context,
        viewport: viewport
        });


        pdfBox.appendChild(canvas);
    });
    }
}).catch(error => {
    console.error('Fehler beim Laden des PDFs: ' + error);
});
    // Fullscreen-Funktion
    document.getElementById('fullscreenHCI-btn').addEventListener('click', () => {
        const pdfBox = document.getElementById('pdfHCI-box');
        
        if (pdfBox.requestFullscreen) {
        pdfBox.requestFullscreen();
        } else if (pdfBox.mozRequestFullScreen) { // Firefox
        pdfBox.mozRequestFullScreen();
        } else if (pdfBox.webkitRequestFullscreen) { // Chrome, Safari und Opera
        pdfBox.webkitRequestFullscreen();
        } else if (pdfBox.msRequestFullscreen) { // IE/Edge
        pdfBox.msRequestFullscreen();
        }
    });

    //-------------------------------------BachelorThesis---------------------------------------------------------------------------------------
const urlBA = 'ProjectReports/Bachelorarbeit.pdf';  // Pfad zum PDF
// Initialisiere PDF.js
const loadingTaskBA = pdfjsLib.getDocument(urlBA);
loadingTaskBA.promise.then(pdf => {
    console.log('PDF geladen');
    
    const totalPages = pdf.numPages;
    const pdfBox = document.getElementById('pdfBA-box');

    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
    pdf.getPage(pageNum).then(page => {
        const scale = 1.5;
        const viewport = page.getViewport({ scale: scale });

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;


        page.render({
        canvasContext: context,
        viewport: viewport
        });


        pdfBox.appendChild(canvas);
    });
    }
}).catch(error => {
    console.error('Fehler beim Laden des PDFs: ' + error);
});
    // Fullscreen-Funktion
    document.getElementById('fullscreenBA-btn').addEventListener('click', () => {
        const pdfBox = document.getElementById('pdfBA-box');
        
        if (pdfBox.requestFullscreen) {
        pdfBox.requestFullscreen();
        } else if (pdfBox.mozRequestFullScreen) { // Firefox
        pdfBox.mozRequestFullScreen();
        } else if (pdfBox.webkitRequestFullscreen) { // Chrome, Safari und Opera
        pdfBox.webkitRequestFullscreen();
        } else if (pdfBox.msRequestFullscreen) { // IE/Edge
        pdfBox.msRequestFullscreen();
        }
    });

        //-------------------------------------BachelorProject---------------------------------------------------------------------------------------
const urlBP = 'ProjectReports/Bericht_Meeresblick.pdf';  // Pfad zum PDF
// Initialisiere PDF.js
const loadingTaskBP = pdfjsLib.getDocument(urlBP);
loadingTaskBP.promise.then(pdf => {
    console.log('PDF geladen');
    
    const totalPages = pdf.numPages;
    const pdfBox = document.getElementById('pdfBP-box');

    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
    pdf.getPage(pageNum).then(page => {
        const scale = 1.5;
        const viewport = page.getViewport({ scale: scale });

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;


        page.render({
        canvasContext: context,
        viewport: viewport
        });


        pdfBox.appendChild(canvas);
    });
    }
}).catch(error => {
    console.error('Fehler beim Laden des PDFs: ' + error);
});
    // Fullscreen-Funktion
    document.getElementById('fullscreenBP-btn').addEventListener('click', () => {
        const pdfBox = document.getElementById('pdfBP-box');
        
        if (pdfBox.requestFullscreen) {
        pdfBox.requestFullscreen();
        } else if (pdfBox.mozRequestFullScreen) { // Firefox
        pdfBox.mozRequestFullScreen();
        } else if (pdfBox.webkitRequestFullscreen) { // Chrome, Safari und Opera
        pdfBox.webkitRequestFullscreen();
        } else if (pdfBox.msRequestFullscreen) { // IE/Edge
        pdfBox.msRequestFullscreen();
        }
    });

            //-------------------------------------DS---------------------------------------------------------------------------------------
const urlDS = 'ProjectReports/DataScience.pdf';  // Pfad zum PDF
// Initialisiere PDF.js
const loadingTaskDS = pdfjsLib.getDocument(urlDS);
loadingTaskDS.promise.then(pdf => {
    console.log('PDF geladen');
    
    const totalPages = pdf.numPages;
    const pdfBox = document.getElementById('pdfDS-box');

    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
    pdf.getPage(pageNum).then(page => {
        const scale = 1.5;
        const viewport = page.getViewport({ scale: scale });

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;


        page.render({
        canvasContext: context,
        viewport: viewport
        });


        pdfBox.appendChild(canvas);
    });
    }
}).catch(error => {
    console.error('Fehler beim Laden des PDFs: ' + error);
});
    // Fullscreen-Funktion
    document.getElementById('fullscreenDS-btn').addEventListener('click', () => {
        const pdfBox = document.getElementById('pdfDS-box');
        
        if (pdfBox.requestFullscreen) {
        pdfBox.requestFullscreen();
        } else if (pdfBox.mozRequestFullScreen) { // Firefox
        pdfBox.mozRequestFullScreen();
        } else if (pdfBox.webkitRequestFullscreen) { // Chrome, Safari und Opera
        pdfBox.webkitRequestFullscreen();
        } else if (pdfBox.msRequestFullscreen) { // IE/Edge
        pdfBox.msRequestFullscreen();
        }
    });