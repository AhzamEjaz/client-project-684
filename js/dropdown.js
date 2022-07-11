count = 0;

function manageMenu(){
    if (count == 0 ){
        displayMenu()
    }else{
        hideMenu()
    }
}

function displayMenu(object){
    console.log('Menu Open');
    document.getElementById('dropdown-menu').style.display = "block"
    document.getElementById('background').style.display = "block"
    toggleHam(object)
    count = 1

}

function hideMenu(){
    console.log('Menu Closed');
    document.getElementById('dropdown-menu').style.display = "None"
    document.getElementById('background').style.display = "None"
    count = 0
}

function toggleHam(object){
    object.classList.toggle("is-active")
}

function dropHover(object){
    object.children[1].style.display = "block";
}
function leaveHover(object){
    object.children[1].style.display = "None";

}

