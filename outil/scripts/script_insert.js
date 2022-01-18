const addTexte = document.querySelector('#btn_a');
const addImg = document.querySelector('#btn_b_2');
const addForme = document.querySelector('#btn_c');
const addBtns = document.querySelector('#btn_d');

const text = document.querySelectorAll('.text');
const div1_parent = document.querySelector('.page');

let nbr_id = 0;
console.log(nbr_id);

// // zone texte //

addTexte.addEventListener('click', () => {

    const new_dt = document.createElement('div');
    new_dt.setAttribute("class","text movable");

    const new_p= document.createElement('p');
    var newContent = document.createTextNode('inserer text')
    new_p.appendChild(newContent);
    new_dt.appendChild(new_p);
    div1_parent.appendChild(new_dt);

    let maxId = findLastId();
    for (let i = 0; i < 100; i++) {
        new_dt.setAttribute("id", maxId); 
        
    }
});

// //zone image //


addImg.addEventListener('click', () => {
  
    console.log("test btn2.5");
    
    var new_di = document.getElementById("image");


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
    div1_parent.appendChild(new_df);

    let maxId = findLastId();
    
    for (let i = 0; i < 100; i++) {
        new_df.setAttribute("id", maxId); 
        
    }
});


//boutton //

addBtns.addEventListener('click', () => {
    console.log("click");
    const new_dd = document.createElement('div');
    new_dd.setAttribute("class"," movable");
    
    const new_db = document.createElement('button');
    new_db.setAttribute("class"," boutton movable"); 
    new_dd.appendChild(new_db);
    div1_parent.appendChild(new_dd);

    let maxId = findLastId();
    for (let i = 0; i < 100; i++) {
        new_db.setAttribute("id", maxId); 
        
    }
});


// Fonctions d'automatisation
function findLastId() {
    movable.forEach(item => {
        console.log(item.id);
        if(Number(item.id) > maxId) {
            maxId = Number(item.id);
        }
    });
    return maxId + 1;
}