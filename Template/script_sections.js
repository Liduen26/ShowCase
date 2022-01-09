const sections = document.querySelectorAll(".section");

sections.forEach(item => {
    item.addEventListener("mouseover", (e) => {
        //la souris est sur une section, on lui affiche ses btns
        // item.style.background = "black";

        const cont = document.createElement("div");
        cont.classList.add("btnSizeContainer");
        item.appendChild(cont);
    });

    item.addEventListener("mouseout", (e) => {
        //la souris n'est plus sur la section, on retire les btns
        // item.style.background = "white";

        // const contSize = document.querySelectorAll(".btnSizeContainer");
        // contSize.forEach(item => {
        //     item.remove();
        // });
    });
});