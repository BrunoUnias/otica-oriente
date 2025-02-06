var remove = document.getElementById('tm').addEventListener("click", function(){
    var rw = document.getElementById('tn');
    rw.remove();

    
})

const menu = document.querySelector('.mainMenu');
const vertical = document.querySelector('.vertical');

menu.onclick = () => {
    vertical.classList.toggle('.ativo');

}


