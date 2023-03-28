function downloadResume(){
    window.open("../assets/images/fw19_0604-Bhawana-Chadda-Resume.pdf","_blank")
}


// close nav 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show")
    })
})