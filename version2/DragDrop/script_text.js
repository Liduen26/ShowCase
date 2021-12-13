const addText = document.querySelector(".addText");
const div1_parent = document.querySelector('.page');
let nbr_id = 0;
console.log(nbr_id);

//boutton permettant d'ajouter une zone de texte, voué à être rennomé
addText.addEventListener('click', () => {

	const new_d = document.createElement('div');
	new_d.setAttribute("class","text movable");

	const new_p= document.createElement('p');
	var newContent = document.createTextNode('inserer text');
	new_p.classList.add("intText");
	new_p.appendChild(newContent);
	new_d.appendChild(new_p);
	div1_parent.appendChild(new_d);

	console.log(new_d);
	console.log(new_p);

	nbr_id = nbr_id + 1;
	console.log(nbr_id);
	
	for (let i = 0; i < 100; i++) {
		new_d.setAttribute("id", nbr_id); 
		
	}

});



document.body.addEventListener('click',(e) =>{
	console.log("click");
	let targP = e.target;
	do {
		if(targP.classList.contains("movable")) {
			//c'est bon
		} else {
			targP = targP.parentNode;
		}

		if(targP == document.body) {
			break;
		}
	} while(!targP.classList.contains("movable"));
	console.log(targP);
	if(!targP.classList.contains("text")){
		console.log("clicktext");
		const texts = document.querySelectorAll('[contenteditable]');

		texts.forEach (item => {
			item.setAttribute("contentEditable","false");
			remClass('editable');
		});

	}
	console.log(e.target);
});


document.body.addEventListener('dblclick',(e) =>{
  	console.log("doubleclick");
	let targP = e.target;
	do {
		if(targP.classList.contains("movable")) {
			//c'est bon
		} else {
			targP = targP.parentNode;
		}

		if(targP == document.body) {
			break;
		}
	} while(!targP.classList.contains("movable"));
	console.log(targP);
	if(targP.classList.contains("text")){
		//entrée en mode texte
		targP.setAttribute("contentEditable","true");
		targP.style.height = "auto";
		remClass('selected');
		remClass("depl");
		targP.classList.add("editable");
		remDivDepl();

	} else {
		//sortie du mode texte
		remClass('editable');
		targP.setAttribute("contentEditable","false");
	}
}); 


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
