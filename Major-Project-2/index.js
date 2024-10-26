// let navList = document.getElementsByClassName(nav-list);
document.addEventListener(
    "DOMContentLoaded",
    function(){
        let menuList = document.getElementById("menuList");
        if (menuList) {
            menuList.style.visibility = "hidden";
        }
    }
);
// menuList.style.visibility = "hidden";
function toggleMenu(){
    if(menuList.style.visibility == "hidden"){
        menuList.style.visibility = "visible";
    }else{
        menuList.style.visibility = "hidden";
    }
}
