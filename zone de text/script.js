const btn = document.querySelector('#btn');
const list = document.getElementById('list');
const form = document.querySelector('form');
const item = document.getElementById('item');
const cont = document.querySelectorAll('.container');
const text = document.querySelectorAll('.text');
const div1_parent = document.querySelector('.page');
let nbr_id = 0;
console.log(nbr_id);

btn.addEventListener('click', () => {

  const new_d = document.createElement('div');
  new_d.setAttribute("class","text movable");

  const new_p= document.createElement('p');
  var newContent = document.createTextNode('inserer text')
  new_p.appendChild(newContent);
  new_d.appendChild(new_p);
  div1_parent.appendChild(new_d);

  console.log(new_d);
  console.log(new_p);

  nbr_id = nbr_id + 1;
  console.log(nbr_id)
  
  for (let i = 0; i < 100; i++) {
    new_d.setAttribute("id", nbr_id); 
    
  }

});



document.body.addEventListener('click',(e) =>{
  console.log("click");
  if(!e.target.parentNode.classList.contains("text")){
    console.log("clicktext");
    const texts = document.querySelectorAll('[contenteditable]');

    texts.forEach (item => {
      item.setAttribute("contentEditable","false");
      remClass('editable');
    }) 
  }
  console.log(e.target);
});

document.body.addEventListener('dblclick',(e) =>{
  console.log("doubleclick");
   if(e.target.parentNode.classList.contains("text")){
  
    e.target.parentNode.setAttribute("contentEditable","true");
    console.log(e);   
    remClass('selected');
    e.target.parentNode.classList.add("editable");
    }
    else{
      remClass('editable');
      e.target.setAttribute("contentEditable","false");
  
    }
  }); 

document.body.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    // e.preventDefault(); 
   
    div.className = 'text id1 movable editable selected depl';
    div.contentEditable = 'true';
    let texte = document.createTextNode('CreateElement example');

    console.log("entrer");
    console.log(e);
    
  }
});


function remClass(classToRem) {
  const cl = document.body.querySelectorAll("."+classToRem);
  cl.forEach((item) => {
      item.classList.remove(classToRem);
  });
}