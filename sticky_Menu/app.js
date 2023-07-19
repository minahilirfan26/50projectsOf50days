//let navBar = document.getElementById//("menu-bar");
//window.addEventListener("scroll", //function () {
//    if (window.scrollY > navBar.//offsetHeight + 150) {
//        navBar.classList.add("active")
//    } else{
//        navBar.classList.remove//("active");
//    }
//})


window.addEventListener('scroll', function (){
    let navBar = document.getElementById("menu-bar")
if (window.pageYOffset >= 150) {
    navBar.classList.add('sticky')
} else{
    navBar.classList.remove('sticky');
}
})