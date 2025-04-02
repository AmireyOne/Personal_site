const headerNav = document.querySelector('.header-nav')
const bergerBotton = document.querySelector('.burger-btn-wrapper')

bergerBotton.addEventListener('click' , ()=>{
    headerNav.classList.toggle('open-list')
    bergerBotton.classList.toggle('change-icon')
})