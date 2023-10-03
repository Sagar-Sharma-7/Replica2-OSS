const backToTop = document.querySelector(".back-to-top"),
      logoWrap = document.querySelector(".logo"),
      info_box = document.querySelector(".info_box"),
      cross_btn = document.querySelector("#cross_info_btn");


// timer to show info box
const timer = () => {
    setTimeout(() => {
        info_box.style.display = "flex";
    }, 1000);
};

// closing the info box
cross_btn.addEventListener("click", () => {
    info_box.style.display = "none";
});

timer();


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