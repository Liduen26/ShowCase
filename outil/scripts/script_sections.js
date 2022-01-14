let sections = document.querySelectorAll(".section");

const sectionUp = document.querySelectorAll(".sectionUp");
const sectionDown = document.querySelectorAll(".sectionDown");
const ajoutSection = document.querySelectorAll(".labelAddSection");
const delSection = document.querySelectorAll(".delSection");


// Gestion des boutons de resize des sections ---------------------------------
sectionUp.forEach(item => {
    item.addEventListener("click", () => {
        remLine(item.parentNode.parentNode);
    });
});

sectionDown.forEach(item => {
    item.addEventListener("click", () => {
        addLine(item.parentNode.parentNode);
    });
});

function remLine(arg) {
    const section = arg;

    let height = section.style.height;
    height = Number(delUnit(height, 2));
    height -= 50;
    
    section.style.height = height + "px";

    gridLine("del", section)
}

function addLine(arg) {
    const section = arg;

    let height = section.style.height;
    height = Number(delUnit(height, 2));
    height += 50;
    
    section.style.height = height + "px";

    gridLine("add", section);
}


// Ajout de Section -----------------------------------------------------------
ajoutSection.forEach(item => {
    item.addEventListener("click", (e) => {
        let sectionP = e.target;
        do {
            if(!sectionP.classList.contains("section")) {
                sectionP = sectionP.parentNode;
            }
        } while(!sectionP.classList.contains("section"));

        //créatin de la nouvelle section et implémentation en dessous de la section actuelle
        let idAct = sectionP.id;
        let height = 1400;
        const newSect = document.createElement("div");
        newSect.classList.add("section");
        newSect.style.height = height + "px";

        page.insertBefore(newSect, sectionP.nextSibling);

        //redéfinition des id de section
        sections = document.querySelectorAll(".section");
        let i = 0;
        sections.forEach(sects => {
            sects.id = "s" + i;
            i++;
            console.log(sects.id);
        });
        
        //mise en place du contenu de la nouvelle section
        idAct = Number(idAct[1]) + 1;
        
        //en attente du choix de section à ajouter
        let file = "./templates/corps1.html";
        
        $(function() {
            $("#s" + idAct).load(file);
        });
    });
});

// Delete de Section ----------------------------------------------------------
delSection.forEach(item => {
    item.addEventListener("click", (e) => {
        let sectionP = find("section", e);
        validSuppr = true;
        console.log("ui !");
        sectionP.remove();

    });
});

// Fonctions d'automatisation -------------------------------------------------
function gridLine(state, section) {
    const gridCont = section.querySelector(".gridCont");
    let i = 0;
    switch (state) {
        case "add": 
            do {
                const newGrid = document.createElement("div");
                newGrid.style.width = tGrid + "%";
                newGrid.style.height = 50 + "px";
                newGrid.classList.add("grid");
                
                const newGridInt = document.createElement("div");
                newGridInt.classList.add("gridInt");
                newGrid.appendChild(newGridInt);
                
                gridCont.appendChild(newGrid);
                i++;
            } while(i < 10);
        break;
        case "del":
            for(i = 0;i < 10;i++) {
                gridCont.firstChild.remove();
            }
        break;
    }
}

function delUnit(numb, nbUnit) {
    numb = numb.split("");
    numb.splice((numb.length - nbUnit), nbUnit);
    numb = numb.join("");
    return numb;
}


