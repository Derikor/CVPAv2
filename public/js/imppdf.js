document.addEventListener("DOMContentLoaded", ()=>{
    const $boton = document.querySelector("#impripdf");
    $boton.addEventListener("click", ()=>{
        const $convertir1 = document.body;
        //const $convertir1 = document.getElementById("tb")
        html2pdf()
            .set({
                margin:1,
                filename: 'document.pdf',
                image: {
                    type: 'jpeg',
                    quality: 0.98
                },
                html2canvas: {
                    scale: 3,
                    letterRendering: true,
                },
                jsPDF: {
                    unit: "in",
                    fotmat: "a3",
                    orientation: 'landscape' //landscape o portrait
                }
            })
            .from($convertir1)
            .save()
            .catch(err=> console.log(err))
            .finally()
            .then(()=>{
                console.log("Guardado!!!");
            })
    });
});

document.addEventListener("DOMContentLoaded", ()=>{
    const $boton = document.querySelector("#imp1");
    $boton.addEventListener("click", ()=>{
        const $convertir1 = document.body;
        //const $convertir1 = document.getElementById("tb")
        html2pdf()
            .set({
                margin:1,
                filename: 'document.pdf',
                image: {
                    type: 'jpeg',
                    quality: 0.98
                },
                html2canvas: {
                    scale: 3,
                    letterRendering: true,
                },
                jsPDF: {
                    unit: "in",
                    fotmat: "a3",
                    orientation: 'landscape' //landscape o portrait
                }
            })
            .from($convertir1)
            .save()
            .catch(err=> console.log(err))
            .finally()
            .then(()=>{
                console.log("Guardado!!!");
            })
    });
});