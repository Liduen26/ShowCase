const boutons = document.getElementsByClassName("bouton");

const palette_1 = document.getElementById("btn_style1");
const palette_2 = document.getElementById("btn_style2");
const palette_3 = document.getElementById("btn_style3");

palette_1.addEventListener("click", (e) => {
    for(let i=0; i<boutons.length; i++){
        boutons[i].classList.add("style_bouton1");
        boutons[i].classList.remove("style_bouton2");
        boutons[i].classList.remove("style_bouton3");
    }
});