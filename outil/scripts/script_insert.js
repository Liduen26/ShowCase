const addTexte = document.querySelector('.addTexte');
const addImg = document.querySelector('.addImage');
const addForme = document.querySelector('.addFormes');
const addBtns = document.querySelector('.addBtns');

const text = document.querySelectorAll('.text');
const addElems = document.querySelectorAll(".addElems");

// // zone texte //

addTexte.addEventListener('click', () => {

    // const new_dt = document.createElement('div');
    // new_dt.setAttribute("class","text movable");

    // const new_p= document.createElement('p');
    // let newContent = document.createTextNode('inserer text')
    // new_p.appendChild(newContent);
    // new_dt.appendChild(new_p);
    // page.appendChild(new_dt);

    // let maxId = findLastId();
    // new_dt.setAttribute("id", maxId); 
});


// //zone image //

addImg.addEventListener('click', () => {
  
    console.log("test btn2.5");
    
    let new_di = document.getElementById("image");

    let loadFile = function(event) {
        let output = document.getElementById('image');
        console.log(output);
        output.src = URL.createObjectURL(event.target.files[0]);
    };


    // new_di.setAttribute("style",'center/cover; position: absolute; left: -10vw; top: 10vh; width: 50vw; height: 50vh;');
    // new_di.setAttribute("class","image movable");

    // nbr_id = nbr_id + 1;
    // for (let i = 0; i < 100; i++) {
    //   new_di.setAttribute("name", nbr_id); 
    // }
});


// zone formes //

addForme.addEventListener('click', () => {
    const new_df = document.createElement('div');
    new_df.setAttribute("class"," forme exemple movable");
    page.appendChild(new_df);

    let maxId = findLastId();
    new_df.setAttribute("id", maxId); 
});


//boutton //

addBtns.addEventListener('click', () => {
    console.log("click");
    const new_dd = document.createElement('div');
    new_dd.setAttribute("class"," movable");
    
    const new_db = document.createElement('button');
    new_db.setAttribute("class", "boutton movable");
    new_dd.appendChild(new_db);
    page.appendChild(new_dd);

    let maxId = findLastId();
    new_db.setAttribute("id", maxId);
});

//Ajout des éléments w/ section -----------------------------------------------
addElems.forEach(item => {
    item.addEventListener("mousedown", (e) => {
        const newElem = item.cloneNode(true);
        console.log(newElem);
        newElem.style.position = "absolute";
        newElem.style.top = "5px";
        newElem.style.left = "5px";
        newElem.style.zIndex = "2000";
        newElem.style.color = "black";

        page.appendChild(newElem);

        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);

        let prevX = e.clientX;
        let prevY = e.clientY;

        function mousemove(e) {
            
            let newX = prevX - e.clientX;
            let newY = prevY - e.clientY;
            
            const rect = getRect(newElem, page);
            console.log("sep");
            console.log(prevX);
            console.log(e.clientX);
            console.log(newX);

            newElem.style.left = rect.left - newX + "px";
            newElem.style.top = rect.top - newY + "px";

            prevX = e.clientX;
            prevY = e.clientY;
        }

        function mouseup(e) {

        }
    });
});

// Fonctions d'automatisation -------------------------------------------------
function findLastId() {
    let maxId;
    movable.forEach(item => {
        if(Number(item.id) > maxId) {
            maxId = Number(item.id);
        }
    });
    return maxId + 1;
}

