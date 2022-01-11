const btn = document.querySelector(".btn");
const div = document.querySelector(".tropClasse");

let emp1 = {};

emp1.id = 1;
emp1.name = "Robin";

btn.addEventListener("click", (e) => {
    console.log(emp1);

    $.ajax({
        url:"readJson.php",
        method: "post",
        data: emp1,
        success: function(res) {
            console.log(res);
        }
    })
});