/*///////////////////////////////////////////////////////////////////////////
D'après ce tuto : https://www.youtube.com/watch?v=NyZSIhzz5Do

Bienvenue à toi qui viens utiliser ce scipt ! Il permet de déplacer une
div où on veut sur la page, et de la redimmensionner comme on veut. 
Pour cela il suffit d'ajouter la class "movable" à la div que vous souhaitez
déplacer. 

Insérer le script dans votre body avec : 
<script src="scriptDD.js"></script>

Il faudra également ajouter le fichier styleDD.css avec ce lien dans le head : 
<link rel="stylesheet" href="styleDD.css">
///////////////////////////////////////////////////////////////////////////*/
const movable = document.querySelectorAll(".movable");

let currentResizer;
let isResizing = false;


// Ecoute pour le déplacement --------------------------------------------------
document.body.addEventListener("mousedown", (e) => {
    console.log(e.target.parentNode);
    
    let targP = e.target;
    do {
        if(targP.classList.contains("movable")) {
            //c'est bon
        } else {
            targP = targP.parentNode;
        }
    } while(!targP.classList.contains("movable"));

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
            //annulation de tout les eventListener de la souris
            window.removeEventListener("mousemove", mousemove);
            window.removeEventListener("mouseup", mouseup);
            isResizing = false;
        }
    }
    
});

// Ecoute pour le resize --------------------------------------------------
document.body.addEventListener("mousedown", (e) => {
    console.log(e.target.parentNode);
    
    let targP = e.target;
    do {
        if(targP.classList.contains("movable")) {
            //c'est bon
        } else {
            targP = targP.parentNode;
        }
    } while(!targP.classList.contains("movable"));

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
            //annulation de tout les eventListener de la souris
            window.removeEventListener("mousemove", mousemove);
            window.removeEventListener("mouseup", mouseup);
            isResizing = false;
        }
    }
});

//sélection de la div --------------------------------------------------------
movable.forEach((item) => {
    item.addEventListener("click", (e) => {
        let targP = e.target;
        do {
            if(targP.classList.contains("movable")) {
                //c'est bon
            } else {
                targP = targP.parentNode;
            }
        } while(!targP.classList.contains("movable"));
        
        if(!targP.classList.contains("selected")) {
            //on retire les autres sélections
            remClass("selected");
            remClass("depl");
            remSelectedBtns(document.body);

            //On met la sélection sur ce qui nous intéresse
            targP.classList.add("selected", "depl");
            addSelectedBtns(targP);

        } else {
            targP.classList.remove("selected", "depl");
            remSelectedBtns(targP);
        }
        
        function addSelectedBtns(parent) {
            //ajoute les btns de resize à la div movable
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
            //retire les btns de resize
            const resi = parent.querySelectorAll(".resizer");
            resi.forEach((item) => { 
                item.remove();
            });
        }

        function remClass(classToRem) {
            const cl = document.body.querySelectorAll("."+classToRem);
            cl.forEach((item) => {
                item.classList.remove(classToRem);
            });
        }
    })
})

