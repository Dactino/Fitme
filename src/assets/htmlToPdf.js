import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'

export const getPdf = function(id) {
            html2Canvas(document.querySelector('#' + id), {
                // allowTaint: true,
                useCORS: true
            }).then(function(canvas) {
                let contentWidth = canvas.width
                let contentHeight = canvas.height
                // Una página de pdf muestra la altura del lienzo generado por la página html;
                let pageHeight = contentWidth / 592.28 * 841.89
                                 // La altura de la página html que genera el pdf
                let leftHeight = contentHeight
                                 // Desplazamiento de página
                let position = 0
                                 // El tamaño del papel a4 [595.28,841.89], el ancho y alto del lienzo generado por la página html en el pdf
                let imgWidth = 595.28
                let imgHeight = 592.28 / contentWidth * contentHeight
                // canvas.crossOrigin="anonymous";
                let pageData = canvas.toDataURL('image/jpeg', 1.0);
 
                let PDF = new JsPDF('', 'pt', 'a4')
                                 // Hay dos alturas para distinguir, una es la altura real de la página html y la altura de la página que genera el pdf (841.89)
                                 // Cuando el contenido no excede el rango mostrado en una página del pdf, no es necesario paginar
                if (leftHeight < pageHeight) {
                    PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
                } else {
                    while (leftHeight > 0) {
                        PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                        leftHeight -= pageHeight
                        position -= 841.89
                        if (leftHeight > 0) {
                                                         // Evite agregar páginas en blanco
                            PDF.addPage()
                        }
                    }
                }
                PDF.save(id + '.pdf')
            })
        }