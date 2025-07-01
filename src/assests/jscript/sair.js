var remove = document.getElementById('tm').addEventListener("click", () => {
    var rw = document.getElementById('tn');
    rw.remove();

    
})

let drop = document.getElementById("drop");
let down = document.getElementById("down");

drop.addEventListener("click", () => {
    if(down.style.display === "block") {
        down.style.display = "none";

    } else {
        down.style.display = "block";
    }
})


