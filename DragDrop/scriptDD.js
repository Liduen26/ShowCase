const elem = document.querySelectorAll(".depl");

const resizer = document.querySelectorAll(".resizer");
let currentResizer;
let isResizing = false;

const movable = document.querySelectorAll(".movable");

const cont = document.querySelector(".container");


//Déplacement -------------------------------------------------------------
// elem.forEach((item) => {
//     item.addEventListener("mousedown", (e) => {
//         console.log(e.target.parentNode);
//         const targP = e.target.parentNode;

//         window.addEventListener("mousemove", mousemove);
//         window.addEventListener("mouseup", mouseup);
    
//         let prevX = e.clientX;
//         let prevY = e.clientY;
        
//         function mousemove(e) {
//             // ------ mousedown de Drag and Drop ------
//             if(!isResizing) {
//                 let newX = prevX - e.clientX;
//                 let newY = prevY - e.clientY;
    
//                 const rect = targP.getBoundingClientRect();
    
//                 targP.style.left = rect.left - newX + 'px';
//                 targP.style.top = rect.top - newY + 'px';
    
//                 prevX = e.clientX;
//                 prevY = e.clientY;
//             }
            
//         }
    
//         function mouseup() {
//             window.removeEventListener("mousemove", mousemove);
//             window.removeEventListener("mouseup", mouseup);
//         }
//     });
// });

cont.addEventListener("mousedown", (e) => {
    console.log(e.target.parentNode);
    const targP = e.target.parentNode;
    if(e.target.classList.contains("depl") || targP.classList.contains("depl")) {
        
        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);

        let prevX = e.clientX;
        let prevY = e.clientY;
        
        function mousemove(e) {
            // ------ mousedown de Drag and Drop ------
            if(!isResizing) {
                let newX = prevX - e.clientX;
                let newY = prevY - e.clientY;

                const rect = targP.getBoundingClientRect();

                targP.style.left = rect.left - newX + 'px';
                targP.style.top = rect.top - newY + 'px';

                prevX = e.clientX;
                prevY = e.clientY;
            }
            
        }

        function mouseup() {
            window.removeEventListener("mousemove", mousemove);
            window.removeEventListener("mouseup", mouseup);
            isResizing = false;
        }
    }
    
});


//Resizing -------------------------------------------------------------
// resizer.forEach((item) => {
//     item.addEventListener("mousedown", mousedown);

//     function mousedown(e) {
//         // ------ mousedown de Resizer ------
//         currentResizer = e.target;
//         isResizing = true;

//         let prevX = e.clientX;
//         let prevY = e.clientY;

//         // console.log(e.target.parentNode);
//         const targP = e.target.parentNode;

//         window.addEventListener("mousemove", mousemove);
//         window.addEventListener("mouseup", mouseup);

//         function mousemove(e) {
            
//             const rect = targP.getBoundingClientRect();

//             if(currentResizer.classList.contains("se")) {
//                 //curs bas droite
//                 targP.style.width = rect.width - (prevX - e.clientX) + "px";
//                 targP.style.height = rect.height - (prevY - e.clientY) + "px";

//             } else if(currentResizer.classList.contains("sw")) {
//                 //curs bas gauche
//                 targP.style.width = rect.width + (prevX - e.clientX) + "px";
//                 targP.style.height = rect.height - (prevY - e.clientY) + "px";

//                 targP.style.left = rect.left - (prevX - e.clientX) + "px";
//             } else if(currentResizer.classList.contains("ne")) {
//                 //curs haut droite
//                 targP.style.width = rect.width - (prevX - e.clientX) + "px";
//                 targP.style.height = rect.height + (prevY - e.clientY) + "px";

//                 targP.style.top = rect.top - (prevY - e.clientY) + "px";
//             } else if(currentResizer.classList.contains("nw")) {
//                 //curs haut gauche
//                 targP.style.width = rect.width + (prevX - e.clientX) + "px";
//                 targP.style.height = rect.height + (prevY - e.clientY) + "px";

//                 targP.style.top = rect.top - (prevY - e.clientY) + "px";
//                 targP.style.left = rect.left - (prevX - e.clientX) + "px";
//             }

//             prevX = e.clientX;
//             prevY = e.clientY;
//         }
        
//         function mouseup() {
//             window.removeEventListener("mousemove", mousemove);
//             window.removeEventListener("mouseup", mouseup);
//             isResizing = false;
//         }
//     }
// });

cont.addEventListener("mousedown", (e) => {
    console.log(e.target.parentNode);
    const targP = e.target.parentNode;
    if(e.target.classList.contains("resizer") || targP.classList.contains("resizer")) {
        // ------ mousedown de Resizer ------
        currentResizer = e.target;
        isResizing = true;

        let prevX = e.clientX;
        let prevY = e.clientY;

        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);

        function mousemove(e) {
            
            const rect = targP.getBoundingClientRect();

            if(currentResizer.classList.contains("se")) {
                //curs bas droite
                targP.style.width = rect.width - (prevX - e.clientX) + "px";
                targP.style.height = rect.height - (prevY - e.clientY) + "px";

            } else if(currentResizer.classList.contains("sw")) {
                //curs bas gauche
                targP.style.width = rect.width + (prevX - e.clientX) + "px";
                targP.style.height = rect.height - (prevY - e.clientY) + "px";

                targP.style.left = rect.left - (prevX - e.clientX) + "px";
            } else if(currentResizer.classList.contains("ne")) {
                //curs haut droite
                targP.style.width = rect.width - (prevX - e.clientX) + "px";
                targP.style.height = rect.height + (prevY - e.clientY) + "px";

                targP.style.top = rect.top - (prevY - e.clientY) + "px";
            } else if(currentResizer.classList.contains("nw")) {
                //curs haut gauche
                targP.style.width = rect.width + (prevX - e.clientX) + "px";
                targP.style.height = rect.height + (prevY - e.clientY) + "px";

                targP.style.top = rect.top - (prevY - e.clientY) + "px";
                targP.style.left = rect.left - (prevX - e.clientX) + "px";
            }

            prevX = e.clientX;
            prevY = e.clientY;
        }
        
        function mouseup() {
            window.removeEventListener("mousemove", mousemove);
            window.removeEventListener("mouseup", mouseup);
            isResizing = false;
        }
    }
});

//sélection de la div --------------------------------------------------------
movable.forEach((item) => {
    item.addEventListener("click", (e) => {
        // console.log(e);
        // console.log(e.target.parentNode);
        targP = e.target.parentNode;

        if(!targP.classList.contains("selected")) {
            targP.classList.add("selected", "depl");
            addSelectedBtns(targP);
            console.log(elem);

        } else {
            targP.classList.remove("selected", "depl");
            remSelectedBtns(targP);
        }
        
        function addSelectedBtns(parent) {
            const newNe = document.createElement("div");
            newNe.classList.add("resizer", "ne");

            const newNw = document.createElement("div");
            newNw.classList.add("resizer", "nw");

            const newSw = document.createElement("div");
            newSw.classList.add("resizer", "sw");

            const newSe = document.createElement("div");
            newSe.classList.add("resizer", "se");


            parent.appendChild(newNe);
            parent.appendChild(newNw);
            parent.appendChild(newSw);
            parent.appendChild(newSe);

        }

        function remSelectedBtns(parent) {
            const resi = parent.querySelectorAll(".resizer");
            console.log(resi);
            resi.forEach((item) => { 
                item.remove();
            });
        }
    })
})

