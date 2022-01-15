const btn_save = document.getElementById("btn_save");
// const div = document.querySelector(".tropClasse");


btn_save.addEventListener("click", (e) => {
    let emp1 = {};
    
    emp1.id = 1;
    emp1.name = "Robin";
    console.log(emp1);

    $.ajax({
        url:"lireJson.php",
        method: "post",
        data: emp1,
        success: function(res) {
            console.log(res);
        }
    })
});