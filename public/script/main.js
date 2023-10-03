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


// team info in console
function Person(name, email, regno) {
    this.name = name;
    this.email = email;
    this.regno = regno;
  }
  
  const sagar = new Person("Sagar Sharma", "sagarsharma_230113@aitpune.edu.in", 230113);
  const raghav = new Person("Raghav Jha", "raghavjha_230020@aitpune.edu.in", 230020);
  const aayush = new Person("Aayush Kumar", "aayushkumar_230197@aitpune.edu.in", 230197);
  
  console.table([sagar, raghav, aayush]);