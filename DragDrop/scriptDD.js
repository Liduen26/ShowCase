const elem = document.querySelector(".item");

const resizer = document.querySelectorAll(".resizer");
let currentResizer;
let isResizing = false;

elem.addEventListener("mousedown", (e) => {

    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);

    let prevX = e.clientX;
    let prevY = e.clientY;
    
    
    function mousemove(e) {
        // ------ mousedown de Drag and Drop ------
        if(!isResizing) {
            let newX = prevX - e.clientX;
            let newY = prevY - e.clientY;

            const rect = elem.getBoundingClientRect();

            elem.style.left = rect.left - newX + 'px';
            elem.style.top = rect.top - newY + 'px';

            prevX = e.clientX;
            prevY = e.clientY;
        }
        
    }

    function mouseup() {
        window.removeEventListener("mousemove", mousemove);
        window.removeEventListener("mouseup", mouseup);
    }
});



resizer.forEach(item => {
    item.addEventListener("mousedown", mousedown);

    function mousedown(e) {
        // ------ mousedown de Resizer ------
        currentResizer = e.target;
        isResizing = true;

        let prevX = e.clientX;
        let prevY = e.clientY;

        window.addEventListener("mousemove", mousemove);
        window.addEventListener("mouseup", mouseup);

        function mousemove(e) {
            const rect = elem.getBoundingClientRect();

            if(currentResizer.classList.contains("se")) {
                //curs bas droite
                elem.style.width = rect.width - (prevX - e.clientX) + "px";
                elem.style.height = rect.height - (prevY - e.clientY) + "px";

            } else if(currentResizer.classList.contains("sw")) {
                //curs bas gauche
                elem.style.width = rect.width + (prevX - e.clientX) + "px";
                elem.style.height = rect.height - (prevY - e.clientY) + "px";

                elem.style.left = rect.left - (prevX - e.clientX) + "px";
            } else if(currentResizer.classList.contains("ne")) {
                //curs haut droite
                elem.style.width = rect.width - (prevX - e.clientX) + "px";
                elem.style.height = rect.height + (prevY - e.clientY) + "px";

                elem.style.top = rect.top - (prevY - e.clientY) + "px";
            } else if(currentResizer.classList.contains("nw")) {
                //curs haut gauche
                elem.style.width = rect.width + (prevX - e.clientX) + "px";
                elem.style.height = rect.height + (prevY - e.clientY) + "px";

                elem.style.top = rect.top - (prevY - e.clientY) + "px";
                elem.style.left = rect.left - (prevX - e.clientX) + "px";
            }

            // switch (currentResizer.classList.contains()) {
            //     case "se" : 
            //         //curs bas droite
            //         elem.style.width = rect.width - (prevX - e.clientX) + "px";
            //         elem.style.height = rect.height - (prevY - e.clientY) + "px";

            //         break;
            //     case "sw" : 
            //         //curs bas gauche
            //         elem.style.width = rect.width + (prevX - e.clientX) + "px";
            //         elem.style.height = rect.height - (prevY - e.clientY) + "px";

            //         elem.style.left = rect.left - (prevX - e.clientX) + "px";

            //         break;
            //     case "ne" : 
            //         //curs haut droite
            //         elem.style.width = rect.width - (prevX - e.clientX) + "px";
            //         elem.style.height = rect.height + (prevY - e.clientY) + "px";

            //         elem.style.top = rect.top - (prevY - e.clientY) + "px";

            //         break;
            //     case "nw" : 
            //         //curs haut gauche
            //         elem.style.width = rect.width + (prevX - e.clientX) + "px";
            //         elem.style.height = rect.height + (prevY - e.clientY) + "px";

            //         elem.style.top = rect.top - (prevY - e.clientY) + "px";
            //         elem.style.left = rect.left - (prevX - e.clientX) + "px";

            //         break;
            // }

            prevX = e.clientX;
            prevY = e.clientY;
        }
        
        function mouseup() {
            window.removeEventListener("mousemove", mousemove);
            window.removeEventListener("mouseup", mouseup);
            isResizing = false;
        }
    }
})
