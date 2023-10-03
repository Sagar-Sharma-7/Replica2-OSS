const backToTop = document.querySelector(".back-to-top");
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