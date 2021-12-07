/*///////////////////////////////////////////////////////////////////////////
D'après ce tuto : https://www.youtube.com/watch?v=NyZSIhzz5Do

Bienvenue à toi qui vient utiliser ce scipt ! Il permet de déplacer une
div où on veut sur la page, et de la redimmensionner comme on veut. 
Pour cela il suffit d'ajouter la class "movable" à la div que vous souhaitez
déplacer. 

Insérer le script dans votre body avec : 
<script src="scriptDD.js"></script>

Il faudra également ajouter le fichier styleDD.css avec ce lien dans le head : 
<link rel="stylesheet" href="styleDD.css">

Les deux fichiers doivent pour cela être dans votre dossier

/!\ En cas de déplacement d'image, ajouter draggable="false" au HTML de l'image
/!\ Ne fonctionne pas sur un élément directement, la classe doit être mise sur une div contenant l'élément

Problèmes : 
- L'utilisation du css border peut provoquer un bug visuel avec les btn de resize
=> utiliser outline ?

-

A faire : 
///////////////////////////////////////////////////////////////////////////*/
const movable = document.querySelectorAll(".movable");

let currentResizer;
let isResizing = false;

let tGrid = "5";
let xGrid;
let yGrid;
console.log(document.documentElement.clientWidth);
// Ecoute pour le déplacement --------------------------------------------------
document.body.addEventListener("mousedown", (e) => {
    let targP = e.target;
    do {
        if(targP.classList.contains("movable")) {
            //c'est bon
        } else {
            targP = targP.parentNode;
        }

        if(targP === document.body) {
            remClass("selected");
            remClass("depl");

            //désaffichage de la grille
            const grid = document.body.querySelectorAll(".grid");
            grid.forEach((item) => {
                item.style.visibility = "hidden";
            });
            remSelectedBtns(document.body);
            remDivDepl();
            break;
            
        }
    } while(!targP.classList.contains("movable") || targP == document.body);
    if(e.target.classList.contains("depl") || targP.classList.contains("depl")) {
        const zoneVisu = document.querySelector(".zoneSelect");
        let newRleft;
        let newRtop;

        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);

        //recup des coo intiales de la souris
        let prevX = e.clientX;
        let prevY = e.clientY;
        
        function mousemove(e) {
            // ------ mousedown de Drag and Drop ------
            if(!isResizing) {
                let newX = prevX - e.clientX;
                let newY = prevY - e.clientY;

                const gridContainer = document.body.querySelector(".gridCont");
                gridContainer.style.visibility = "visible";
                remClass("inMove");
                targP.classList.add("inMove");
                    
                //récup de la taille des cases de la grille
                const grid = document.body.querySelectorAll(".grid");
                const rectGrid = grid[0].getBoundingClientRect();
                xGrid = rectGrid.width;
                yGrid = rectGrid.height;

                const rect = targP.getBoundingClientRect();

                targP.style.left = rect.left - newX + 'px';
                targP.style.top = rect.top - newY + 'px';
                
                let resteLeft = rect.left % xGrid;
                
                if(resteLeft > (xGrid / 2)) {
                    let diff = xGrid - resteLeft;
                    
                    newRleft = rect.left + diff;
                } else {
                    newRleft = rect.left - resteLeft;
                }
                
                let resteTop = rect.top % yGrid;
                if(resteTop > (yGrid / 2)) {
                    let diff = yGrid - resteTop;

                    newRtop = rect.top + diff;
                } else {
                    newRtop = rect.top - resteTop;
                }

                zoneVisu.style.left = newRleft + "px";
                zoneVisu.style.top = newRtop + "px";

                console.log("X = " + newRleft + "px, Y = " + newRtop + "px");

                //maj des coo de la souris
                prevX = e.clientX;
                prevY = e.clientY;
            }
        }

        function mouseup() {
            let vwDiff = newRleft / xGrid;
            let vhDiff = newRtop / yGrid;

            targP.style.left = (vwDiff * tGrid) + 'vw';
            targP.style.top = (vhDiff * tGrid) + 'vh';

            const gridContainer = document.body.querySelector(".gridCont");
            gridContainer.style.visibility = "hidden";
            remClass("inMove");

            //annulation de tout les eventListener de la souris
            window.removeEventListener("mousemove", mousemove);
            window.removeEventListener("mouseup", mouseup);
            isResizing = false;
        }
    }
    
});

// Ecoute pour le resize --------------------------------------------------
document.body.addEventListener("mousedown", (e) => {
    let targP = e.target;
    do {
        if(targP.classList.contains("movable")) {
            //c'est bon
        } else {
            targP = targP.parentNode;
        }

        if(targP === document.body) {
            break;
        }
    } while(!targP.classList.contains("movable"));
    if(e.target.classList.contains("resizer") || targP.classList.contains("resizer")) {
        // ------ mousedown de Resizer ------
        currentResizer = e.target;
        isResizing = true;

        const zoneVisu = document.querySelector(".zoneSelect");
        let newRleft;
        let newRtop;
        let newRwidth;
        let newRheight;

        //recup des coo intiales de la souris
        let prevX = e.clientX;
        let prevY = e.clientY;

        //affichage de la grille
        const gridContainer = document.body.querySelector(".gridCont");
        gridContainer.style.visibility = "visible";
        remClass("inMove");
        targP.classList.add("inMove");

        const grid = document.body.querySelectorAll(".grid");
        const rectGrid = grid[0].getBoundingClientRect();
        xGrid = rectGrid.width;
        yGrid = rectGrid.height;

        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);

        function mousemove(e) {
            const rect = targP.getBoundingClientRect();

            let resteLeft = rect.left % xGrid;
            if(resteLeft > (xGrid / 2)) {
                let diff = xGrid - resteLeft;
                
                newRleft = rect.left + diff;
            } else {
                newRleft = rect.left - resteLeft;
            }
            
            let resteTop = rect.top % yGrid;
            if(resteTop > (yGrid / 2)) {
                let diff = yGrid - resteTop;

                newRtop = rect.top + diff;
            } else {
                newRtop = rect.top - resteTop;
            }

            let resteWidth = rect.width % xGrid;
            if(resteWidth > (xGrid / 2)) {
                let diff = xGrid - resteWidth;
                
                newRwidth = rect.width + diff;
            } else {
                newRwidth = rect.width - resteWidth;
            }
            
            let resteHeight = rect.height % yGrid;
            if(resteHeight > (yGrid / 2)) {
                let diff = yGrid - resteHeight;

                newRheight = rect.height + diff;
            } else {
                newRheight = rect.height - resteHeight;
            }

            console.log(e.target);
            if(currentResizer.classList.contains("se")) {
                console.log();
                //curs bas droite
                targP.style.width = rect.width - (prevX - e.clientX) + "px";
                targP.style.height = rect.height - (prevY - e.clientY) + "px";

                //visuel
                zoneVisu.style.width = newRwidth + "px";
                zoneVisu.style.height = newRheight + "px";
            } else if(currentResizer.classList.contains("sw")) {
                //curs bas gauche
                targP.style.width = rect.width + (prevX - e.clientX) + "px";
                targP.style.height = rect.height - (prevY - e.clientY) + "px";

                targP.style.left = rect.left - (prevX - e.clientX) + "px";

                //visuel
                zoneVisu.style.width = newRwidth + "px";
                zoneVisu.style.height = newRheight + "px";
                zoneVisu.style.left = newRleft + "px";
            } else if(currentResizer.classList.contains("ne")) {
                //curs haut droite
                targP.style.width = rect.width - (prevX - e.clientX) + "px";
                targP.style.height = rect.height + (prevY - e.clientY) + "px";

                targP.style.top = rect.top - (prevY - e.clientY) + "px";

                zoneVisu.style.width = newRwidth + "px";
                zoneVisu.style.height = newRheight + "px";
                zoneVisu.style.top = newRtop + "px";
            } else if(currentResizer.classList.contains("nw")) {
                //curs haut gauche
                targP.style.width = rect.width + (prevX - e.clientX) + "px";
                targP.style.height = rect.height + (prevY - e.clientY) + "px";

                targP.style.top = rect.top - (prevY - e.clientY) + "px";
                targP.style.left = rect.left - (prevX - e.clientX) + "px";

                zoneVisu.style.width = newRwidth + "px";
                zoneVisu.style.height = newRheight + "px";
                zoneVisu.style.left = newRleft + "px";
                zoneVisu.style.top = newRtop + "px";
            }

            //maj des coo de la souris
            prevX = e.clientX;
            prevY = e.clientY;
        }
        
        function mouseup() {
            let vwDiff2 = newRleft / xGrid;
            let vhDiff2 = newRtop / yGrid;

            targP.style.left = (vwDiff2 * tGrid) + 'vw';
            targP.style.top = (vhDiff2 * tGrid) + 'vh';
            
            vwDiff2 = newRwidth / xGrid;
            vhDiff2 = newRtop / yGrid;

            targP.style.width = (vwDiff2 * tGrid) + 'vw';
            targP.style.height = (vhDiff2 * tGrid) + 'vh';
            // targP.style.width = newRwidth + "px";
            // targP.style.height = newRheight + "px";


            //désaffichage de la grille
            const gridContainer = document.body.querySelector(".gridCont");
            gridContainer.style.visibility = "hidden";
            remClass("inMove");

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

            if(targP == document.body) {
                
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

            remDivDepl();
            const rect = targP.getBoundingClientRect();
            const parentTarg = targP.parentNode;
            createDivDepl(parentTarg, rect);

        } else {
            //si la div contient déjà selected, on l'enlève
            targP.classList.remove("selected");
            targP.classList.remove("depl");
            remSelectedBtns(targP);
            remDivDepl();
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

        
        function createDivDepl(parent, rect) {
            const newDivDepl = document.createElement("div");
            newDivDepl.classList.add("zoneSelect");
            parent.appendChild(newDivDepl);
            
            const div = document.querySelector(".zoneSelect");
            div.style.left = rect.left + "px";
            div.style.width = rect.width + "px";
            div.style.top = rect.top + "px";
            div.style.height = rect.height + "px";
        }
        
    });
});


//fonctions d'automatisation -----------------------------------------------
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

function remDivDepl() {
    const div = document.querySelectorAll(".zoneSelect");
    div.forEach((item) => {
        item.remove();
    });
}


document.onload = loading();
function loading() {
    const newCont = document.createElement("div");
    newCont.classList.add("gridCont");
    document.body.appendChild(newCont);
    
    const container = document.querySelector(".gridCont");
    for(let i = 0;i < 300;i++) {
        const newGrid = document.createElement("div");
        newGrid.style.width = tGrid + "vw";
        newGrid.style.height = tGrid + "vh";
        newGrid.classList.add("grid");

        const newGridInt = document.createElement("div");
        newGridInt.classList.add("gridInt");
        newGrid.appendChild(newGridInt);

        container.appendChild(newGrid);
    }
    
}