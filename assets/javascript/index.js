function downloadResume(){
    window.open("https://drive.google.com/file/d/1D3OEkjxrA-80wjzR-Ep9w3zF_WT5TDKV/view?usp=sharing","_blank")
}


// close nav 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show")
    })
})