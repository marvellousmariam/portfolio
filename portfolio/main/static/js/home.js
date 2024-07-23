// SHOW MENU
const navMenu=document.getElementById('nav-menu'),
navToggle=document.getElementById('nav-toggle'),
navClose=document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
        })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
        })
}



// REMOVE MENU MOBILE
const navLink=document.querySelectorAll('.nav_link');
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));
//Add blur header

const blurHeader=()=>{
    const header=document.getElementById('header');
    this.scrollY>=50? header.classList.add('blur-header'):header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader)



//Email
const contactForm=document.getElementById('contact-form');
 contactMessage=document.getElementById('contact-message')

 const sendEmail = (e) =>{
    e.preventDefault();
    emailjs.sendForm('service_fk1silz','template_5re21qq',"")
    .then((result) => {
        
    })

 }
 contactForm.addEventListener('submit',sendEmail)

















// document.addEventListener("DOMContentLoaded",function(){
//     const nameSearch=document.getElementById("name-search")
//     const tags = document.getElementsByClassName(".tag")
//     const projects = document.querySelectorAll(".project")

//     function filterProject(){

//         const nameQuery = nameSearch.value.toLowerCase();
//         projects.forEach((project)=>{
//             const name = project.getAttribute("data-name")
//             const nameMatch = name.includes(nameQuery)
//             if(nameMatch){
//                 project.style.display="";
//             }else{
//                 project.style.display="none";
//             }
//         })
       
        
//     }
//    tags.forEach((tag)=>{
//     tag.addEventListener("click",function (){
//         const selectedTag = this.getAttribute("data-tag")
//         projects.forEach((project)=>{
//             const projectTag = project.getAttribute("data-tags")
//             if(projectTag.includes(selectedTag)){
//                 project.style.display="";
//             }else{
//                 project.style.display="none";
//             }
//         })
//     })
//    })
//     nameSearch.addEventListener("keyup",filterProject)

// })