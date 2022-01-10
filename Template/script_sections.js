const sections = document.querySelectorAll(".section");

const sectionUp = document.querySelectorAll(".sectionUp");
const sectionDown = document.querySelectorAll(".sectionDown");

let exist = false;

// Affichage des boutons sur le mousehover des sections -----------------------
sections.forEach(item => {
    item.addEventListener("mouseover", (e) => {
        //la souris est sur une section, on lui affiche ses btns

        const cont = item.querySelectorAll(".btnSizeContainer");
        cont.forEach(item => {
            item.style.visibility = "visible";
        });
        const addSect = item.querySelectorAll(".addSection");
        addSect.forEach(item => {
            item.style.visibility = "visible";
        });

    });

    item.addEventListener("mouseleave", (e) => {
        //la souris n'est plus sur la section, on retire les btns

        const contSize = item.querySelectorAll(".btnSizeContainer");
        contSize.forEach(conts => {
            conts.style.visibility = "collapse";
        });
        const addSect = item.querySelectorAll(".addSection");
        addSect.forEach(item => {
            item.style.visibility = "collapse";
        });

    });
});


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