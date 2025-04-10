window.addEventListener('DOMContentLoaded' , ()=>{
  const user_language = localStorage.getItem('lang') 
  window.location.hash = `#${user_language}`
  set_language()
})




let language = {
  en: {
    contact_me: "Contact Me",
    about_me: "About Me",
    skills: "Skills ",
    sampels: "Example of work",
    setting: "Setting" ,
    siteMood: "Site mode :" ,
    siteLanguage: "Site language :" ,
    siteBaner: `I am a <span class="text-danger">Front-end</span> Developer ...` ,
    info_us: "About Me" ,
    p_about: `Hello. I am <b>Amir Mohammad Sandoughsaz</b>, born in 2005 (1384 Solar Hijri) in the historic city of Yazd. That means I am currently 20 years old and a Computer Science student at Shahid Sadoughi Technical and Vocational University in Yazd. <br />  
              Currently, I’m focused on front-end development and have mastered related technologies like <b>HTML, CSS, JavaScript</b>, and <b>relevant libraries</b>. However, my future goal is to become a <b>Full-Stack Web Developer</b>, and I am eager and determined to achieve this. <br />` ,
    personal_characteristic: "~ Personality Traits & Characteristics ~ ",
    personal_characteristic_item1: "✔ I love teamwork and believe that collaboration and exchanging ideas are the path to creating better solutions and collective growth." ,
    personal_characteristic_item2: "✔ I'm curious and eager to learn, always seeking opportunities to expand my knowledge and skills.  " ,
    personal_characteristic_item3: "✔ I'm flexible and patient, and I welcome new challenges with eagerness." ,
    personal_characteristic_item4: "✔ I love creativity and design, and aim to build engaging, user-friendly products while coding." ,
    my_skills: "My Skills" ,
    my_sampels: "My Portfolio" ,

  },
  fa: {
    contact_me: "ارتباط با من",
    about_me: "درباره من",
    skills: "مهارت ها",
    sampels: "نمونه کار",
    setting: "تنظیمات" ,
    siteMood: "حالت سایت :" ,
    siteLanguage: "زبان سایت :" ,
    siteBaner: `من یک توسعه دهنده <span class="text-danger">فرانت اند</span> هستم ...` ,
    info_us: "درباره من" ,
    p_about:`سلام . <b>امیر محمد صندوقساز</b> هستم ، سال 1384 و در شهر تاریخی یزد
    به دنیا اومدم . یعنی در حال حاضر بیست سالمه و دانشجوی رشته کامپیوتر
    در دانشگاه فنی حرفه ای شهید صدوقی یزد هستم . <br />
    در حال حاضر روی توسعه فرانت اند تمرکز کردم و آموزش های مربوط به
    فرانت اند را مانند <b>html , css , javascript</b> , و
    <b>کتابخانه های مربوطه</b> را فرا گرفتم ، اما هدفم برای آینده تبدیل
    شدن به یک <b>توسعه دهنده وب فول استک (Full-Stack Developer) </b>هست
    و برای رسیدن به هدفم مشتاق و مصمم هستم . <br />` ,

    personal_characteristic: "~ روحیه و ویژگی‌های شخصی ~" ,
    personal_characteristic_item1: "✔ عاشق کار تیمی هستم و معتقدم همکاری و تبادل نظر، راهی برای خلق ایده‌های بهتر و رشد جمعی است" ,
    personal_characteristic_item2: "✔ کنجکاو و مشتاق یادگیری هستم و همیشه به دنبال فرصت‌هایی برای توسعه دانش و مهارت‌هایم می‌گردم " ,
    personal_characteristic_item3: "✔ انعطاف‌پذیر و صبور هستم و چالش‌های جدید را با اشتیاق پذیرا می‌شوم" ,
    personal_characteristic_item4: "✔ به خلاقیت و طراحی علاقه دارم و سعی می‌کنم در کنار کدنویسی، محصولات کاربرپسند و جذاب خلق کنم" ,
    my_skills: "مهارت های من" ,
    my_sampels: "نمونه کار های من" ,
  },
  ar: {
    contact_me: "اتصل بي",
    about_me: "ْعَنِّي",
    skills: "مهارات",
    sampels: "مثال للعمل ",
    setting: "إعدادات" ,
    siteMood: "وضع الموقع :" ,
    siteLanguage: "لغة الموقع :" ,
    siteBaner: `أنا <span class="text-danger">مطور واجهات أمامية</span> ...` ,
    info_us: "ْعَنِّي" ,
    p_about: `مرحبًا. أنا <b>أمير محمد صندوق ساز</b>، وُلدت عام 2005 (1385 هجري شمسي) في مدينة يزد التاريخية. عمري الآن 20 عامًا وأدرس علوم الحاسوب في الجامعة التقنية والمهنية شهيد صدوقي في يزد.<br/>
             أركز على تطوير الواجهات الأمامية وقد أتقنت التقنيات ذات الصلة مثل <b>HTML، CSS، JavaScript</b> و<b>المكتبات المرتبطة</b>. هدفي المستقبلي هو أن أصبح <b>مطور ويب فول ستاك</b>، وأنا متحمس ومصمم لتحقيق هذا الهدف.<br/>` ,
    personal_characteristic: "~ السمات والخصائص الشخصية ~" ,
    personal_characteristic_item1: "✔ أحب العمل الجماعي وأؤمن أن التعاون وتبادل الأفكار هو الطريق لخلق حلول أفضل ونمو جماعي." ,
    personal_characteristic_item2: "✔ أنا فضولي ومتحمس للتعلم، دائمًا أبحث عن فرص لتوسيع معرفتي ومهاراتي.  " ,
    personal_characteristic_item3: "✔ أنا مرن وصبور، وأتقبل التحديات الجديدة بحماس." ,
    personal_characteristic_item4: "✔ أنا شغوف بالإبداع والتصميم، وأسعى لإنشاء منتجات سهلة الاستخدام وجذابة بجانب البرمجة." ,
    my_skills: "مهاراتي" ,
    my_sampels: "أمثلة على الأعمال" ,
  },
};

// TEXTS ELEMENT

const language_btn = document.querySelector(".language-btn");
const languages = document.querySelectorAll(".languages");
const about_me = document.getElementById("about-me");
const skills = document.getElementById("skills");
const sampels = document.getElementById("sampels");
const setting = document.getElementById("setting");
const siteMood = document.getElementById("siteMood");
const siteLanguage = document.getElementById("siteLanguage");
const siteBaner = document.getElementById("siteBaner");
const info_us = document.getElementById("info-us");
const p_about = document.getElementById("p-about");
const personal_characteristic = document.getElementById("personal-characteristic");
const personal_characteristic_class = document.querySelector(".personal-characteristic");
const text_about = document.querySelector(".text-about");
const modal_head = document.querySelector(".modal-header-coustom");
const mpdal_body = document.querySelector(".modal-body-coustom");
const header_list = document.querySelector(".header-list");
const burger_btn_wrapper = document.querySelector(".burger-btn-wrapper");
const personal_characteristic_list = document.querySelector(".personal-characteristic-list");
const personal_characteristic_item1 = document.getElementById("personal-item1");
const personal_characteristic_item2 = document.getElementById("personal-item2");
const personal_characteristic_item3 = document.getElementById("personal-item3");
const personal_characteristic_item4 = document.getElementById("personal-item4");
const my_skills = document.getElementById("my-skills");
const my_sampels = document.getElementById("my-sampels");



const set_language = () =>{
  if (window.location.hash) {
    if (window.location.hash === "#fa") {
      localStorage.setItem('lang' , 'fa')
      language_btn.textContent = "فارسی";
      
  
      contact_me.textContent = language.fa.contact_me;
      about_me.textContent = language.fa.about_me;
      skills.textContent = language.fa.skills;
      sampels.textContent = language.fa.sampels;
      setting.textContent = language.fa.setting;
      siteMood.textContent = language.fa.siteMood;
      siteLanguage.textContent = language.fa.siteLanguage;
      siteBaner.innerHTML = language.fa.siteBaner;
      info_us.innerHTML = language.fa.info_us;
      p_about.innerHTML = language.fa.p_about;
      personal_characteristic.textContent = language.fa.personal_characteristic;
      personal_characteristic_item1.textContent = language.fa.personal_characteristic_item1;
      personal_characteristic_item2.textContent = language.fa.personal_characteristic_item2;
      personal_characteristic_item3.textContent = language.fa.personal_characteristic_item3;
      personal_characteristic_item4.textContent = language.fa.personal_characteristic_item4;
      my_skills.textContent = language.fa.my_skills;
      my_sampels.textContent = language.fa.my_sampels;
  
  
  
    } else if (window.location.hash === "#en") {
      localStorage.setItem('lang' , 'en')
      language_btn.textContent = "English";
      header.style.direction = "rtl";
      p_about.style.direction = "ltr";
      p_about.style.marginLeft = "20px";
      text_about.style.textAlign = "left";
      personal_characteristic_class.style.textAlign = "left";
      personal_characteristic_list.style.direction = "rtl !important";
      modal_head.style.direction = "ltr";
      mpdal_body.style.direction = "ltr";
      personal_characteristic_list.style.marginLeft = "40px";
      personal_characteristic_list.style.direction = "ltr";
      personal_characteristic.style.marginLeft = "20px";
      burger_btn_wrapper.style.transform = "rotate(180deg)";
      
      
  
  
      
      contact_me.textContent = language.en.contact_me;
      about_me.textContent = language.en.about_me;
      skills.textContent = language.en.skills;
      sampels.textContent = language.en.sampels;
      setting.textContent = language.en.setting;
      siteMood.textContent = language.en.siteMood;
      siteLanguage.textContent = language.en.siteLanguage;
      siteBaner.innerHTML = language.en.siteBaner;
      info_us.innerHTML = language.en.info_us;
      p_about.innerHTML = language.en.p_about;
      personal_characteristic.textContent = language.en.personal_characteristic;
      personal_characteristic_item1.textContent = language.en.personal_characteristic_item1;
      personal_characteristic_item2.textContent = language.en.personal_characteristic_item2;
      personal_characteristic_item3.textContent = language.en.personal_characteristic_item3;
      personal_characteristic_item4.textContent = language.en.personal_characteristic_item4;
      my_skills.textContent = language.en.my_skills;
      my_sampels.textContent = language.en.my_sampels;
  
  
  
    } else if (window.location.hash === "#ar") {
      localStorage.setItem('lang' , 'ar')
      language_btn.textContent = "العربی";
      
  
      contact_me.textContent = language.ar.contact_me;
      about_me.textContent = language.ar.about_me;
      skills.textContent = language.ar.skills;
      sampels.textContent = language.ar.sampels;
      setting.textContent = language.ar.setting;
      siteMood.textContent = language.ar.siteMood;
      siteLanguage.textContent = language.ar.siteLanguage;
      siteBaner.innerHTML = language.ar.siteBaner;
      info_us.innerHTML = language.ar.info_us;
      p_about.innerHTML = language.ar.p_about;
      personal_characteristic.textContent = language.ar.personal_characteristic;
      personal_characteristic_item1.textContent = language.ar.personal_characteristic_item1;
      personal_characteristic_item2.textContent = language.ar.personal_characteristic_item2;
      personal_characteristic_item3.textContent = language.ar.personal_characteristic_item3;
      personal_characteristic_item4.textContent = language.ar.personal_characteristic_item4;
      my_skills.textContent = language.ar.my_skills;
      my_sampels.textContent = language.ar.my_sampels;
    }
  }
}

set_language()

languages.forEach((lang) => {
  lang.addEventListener("click", () => {
    window.location.hash = lang.getAttribute("href");
    window.location.reload();
  });
});
