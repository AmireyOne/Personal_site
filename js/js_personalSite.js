const headerNav = document.querySelector(".header-nav");
const bergerBotton = document.querySelector(".burger-btn-wrapper");
const nav_links = document.querySelectorAll(".nav-link");
const nav_items = document.querySelectorAll(".nav-item");
const header = document.querySelector(".header");
const home_section = document.querySelector("#home");
const skill_level = document.querySelectorAll(".skill-level");
const btn_contact = document.querySelectorAll(".btn-contact")
const contact_me = document.getElementById("contact-me")
const btn_change_mode = document.querySelector(".btn-change-mode")



// refresh site

window.addEventListener("DOMContentLoaded", () => {
  let siteMood = localStorage.getItem("siteMood");

  if (siteMood === "day") {
    document.body.classList.remove("dark-them");
  } else {
    document.body.classList.add("dark-them");
    btn_change_mode.classList.add('night-mode')
  }
});
// close and open menu mobile

bergerBotton.addEventListener("click", () => {
  headerNav.classList.toggle("open-list");
  bergerBotton.classList.toggle("change-icon");
});

// close menu mobile when click in nav item

nav_items.forEach((item) => {
  item.addEventListener("click", () => {
    headerNav.classList.remove("open-list");
    bergerBotton.classList.remove("change-icon");
  });
});



// nigth and day mood
// nigthMoodBotton.addEventListener("click", () => {
//   document.body.classList.add("dark-them");
//   localStorage.setItem("siteMood", "nigtht");
// });

// dayMoodBotton.addEventListener("click", () => {
//   document.body.classList.remove("dark-them");
//   localStorage.setItem("siteMood", "day");
// });

nav_links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - header.getBoundingClientRect().height,
    });
  });
});

btn_change_mode.addEventListener("click" , ()=>{
  btn_change_mode.classList.toggle('night-mode')

  if (btn_change_mode.classList.contains('night-mode')){

    document.body.classList.add("dark-them");
    localStorage.setItem("siteMood", "night");

  }else{

    document.body.classList.remove("dark-them");
    localStorage.setItem("siteMood", "day");

  }
})


// skill-level-scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      skill_level.forEach((item) => {
        item.classList.add("active");
      });
    }
  });
});

observer.observe(document.getElementById("personal-skill"));



// show link for contact me

contact_me.addEventListener('click' , ()=>{
  
  btn_contact.forEach((btn)=>{
    btn.classList.add('active-style');

    setTimeout(()=>{
      btn.classList.remove('active-style')
    } ,1500)
  })
})
