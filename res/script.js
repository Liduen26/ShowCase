const z_texte = document.querySelectorAll(".z-texte");
const btnAdd = document.querySelectorAll(".btn-add-line");
const selectable = document.querySelectorAll(".selectable");
const check_acc = document.querySelectorAll(".check-acc");

console.log(z_texte);
console.log(btnAdd);

//remplissage du texte
z_texte.forEach(item => {
    item.addEventListener('input', (e) => {
        console.log(e.target.value);

        let parent = e.target.parentElement.id;
        parent = parent.replace('z-', '');
        // console.log(parent);
        
        switch (parent) {
            case "date":
                add_date(parent, e);
                break;
            default:
                add_Z_text(parent, e);
        }
    });
});

function add_date(parent, e) {
    const z_date = document.getElementById("jour-mois");
    const z_num = document.getElementById("jour-nbr");
    let date1 = new Date(e.target.value);
    let useDate = "";
    
    console.log(date1);

    let dateLocale = date1.toLocaleString("fr-FR", {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    });

    console.log(dateLocale);
    useDate = dateLocale.split(' ');

    useDate[0] = MajFirst(useDate[0]);
    useDate[2] = MajFirst(useDate[2]);

    z_date.innerHTML = useDate[0] + '<br>' + useDate[2];
    z_num.innerHTML = useDate[1];
}

function add_Z_text(parent, e) {
    document.getElementById(`${parent}-txt`).innerHTML = e.target.value; 
}

function MajFirst (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// add de la zone de texte
btnAdd.forEach((item) => {
    console.log(item);
    item.addEventListener("click", (e) => {
        alert("ça viendra plus tard ;)");
        console.log(e);
        
        //création de la div
        const newDiv = document.createElement("div");
        //ajout d'une class
        newDiv.classList.add("z-line"); 
        
        //ajout de l'input checkbox
        const newInputCheck = document.createElement("input");
        newInputCheck.setAttribute("type", "checkbox");
        //class
        newInputCheck.classList.add("check-acc"); 
        //ajout de l'input à la div
        newDiv.appendChild(newInputCheck); 

        const newInputText = document.createElement("input");
        newInputText.setAttribute("type", "text");
        // ajout de l'id
        newInputText.setAttribute("id", "z-titre"); 
        newDiv.appendChild(newInputText);

        //ajout du button
        const newButton = document.createElement("button");
        newButton.setAttribute("onclick", "add_Z_text()");
        //création du texte que contient le button 
        const txtButton = document.createTextNode("+"); 
        //ajout du texte créé au button
        newButton.appendChild(txtButton); 
        //ajout du button à la div
        newDiv.appendChild(newButton); 

        parent.appendChild(newDiv);         
    })
});


selectable.forEach((item) => {
    item.addEventListener("click", (e) => {
        let targ = document.getElementById(e.target.id);
        let parent = document.getElementById(e.target.parentElement.id);
        
        elements = parent.getElementsByClassName('selected');

        for(element of elements){
            element.classList.remove('selected');
        }

        targ.classList.add("selected");
    })
})

check_acc.forEach((item) => {

    item.addEventListener("click", (e) => {
        alert("ça viendra plus tard ;)");
    });
});