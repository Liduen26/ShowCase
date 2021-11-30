const img = document.querySelector(".item");

img.addEventListener("mousedown", (e) => {

    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);

    let prevX = e.clientX;
    let prevY = e.clientY;
    
    
    function mousemove(e) {
        let newX = prevX - e.clientX;
        let newY = prevY - e.clientY;

        const rect = img.getBoundingClientRect();

        img.style.left = rect.left - newX + 'px';
        img.style.top = rect.top - newY + 'px';

        prevX = e.clientX;
        prevY = e.clientY;
    }

    function mouseup() {
        window.removeEventListener("mousemove", mousemove);
        window.removeEventListener("mouseup", mouseup);
    }
});
