const backToTop = document.querySelector(".back-to-top");
const logoWrap = document.querySelector(".logo");

// github link
logoWrap.addEventListener("click", () => {
    window.open("https://github.com/Sagar-Sharma-7/Replica2-OSS");
})

// back to top button script
window.onscroll = function() {
    scrollBackToTop();
}

function scrollBackToTop(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        backToTop.style.display = "flex";
    }else{
        backToTop.style.display = "none";
    }
}