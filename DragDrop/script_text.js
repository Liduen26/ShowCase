const btn = document.querySelector(".btn");
const div1_parent = document.querySelector('.page');
let nbr_id = 0;
console.log(nbr_id);

//boutton permettant d'ajouter une zone de texte, voué à être rennomé
btn.addEventListener('click', () => {

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
		remEdit();

	}
	console.log(e.target);
	
	function remEdit() {
		const div = document.querySelectorAll(".divEdit");
		div.forEach((item) => {
			item.remove();
		});	
	}
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
		targP.style.height = "fit-content";
		remClass('selected');
		remClass("depl");
		targP.classList.add("editable");
		remDivDepl();
		remSelectedBtns(document.body);

		// spawnEdit(targP);

	} else {
		//sortie du mode texte
		remClass('editable');
		targP.setAttribute("contentEditable","false");
	}

	function spawnEdit(div) {
		const divEdit = document.createElement("div");
		divEdit.classList.add("divEdit");
		div.appendChild(divEdit);
	}
	
}); 

