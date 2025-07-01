let drop = document.getElementById("drop");
let down = document.getElementById("down");

drop.addEventListener("click", () => {
    if(down.style.display === "block") {
        down.style.display = "none";

    } else {
        down.style.display = "block";
    }

})