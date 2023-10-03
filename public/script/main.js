const backToTop = document.querySelector(".back-to-top"),
      logoWrap = document.querySelector(".logo"),
      info_box = document.querySelector(".info_box"),
      cross_btn = document.querySelector("#cross_info_btn"),
      sign_in_btn = document.querySelector(".sign-in-btn"),
      start_today = document.querySelector(".start-btn");


// timer to show info box
const timer = () => {
    setTimeout(() => {
        info_box.style.display = "flex";
    }, 1000);
};

cross_btn.addEventListener("click", () => {
    info_box.style.display = "none";
});

timer();


// sign in btn
sign_in_btn.addEventListener("click", () => {
    let name = prompt("Enter your first name: ");
    if(name == null || name == ""){
        name = "Sign In";
    }
    sign_in_btn.innerHTML = name;
});

// start btn
start_today.addEventListener("click", () => {
    let name = prompt("Enter your first name: ");
    if(name == null || name == ""){
        start_today.innerHTML = "Start Today";
    }else{
        start_today.innerHTML = `Welcome ${name}`; 
    }
})

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