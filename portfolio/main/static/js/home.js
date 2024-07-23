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
    emailjs.sendForm('service_fk1silz','template_gcqczjf','#contact-form','3hK53InNEp0NJIPdg')
    .then(() => {
     contactMessage.textContext=' Message sent successfully ✅'
   
   //Remove sfter five sec
   setTimeout(() => {
    contactMessage.textContent='';
    }, 5000);
    // clear input field
    contactForm.reset();
    })

 }
 contactForm.addEventListener('submit',sendEmail)

//scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    delay:400,
    //reset:true//Animations reapeat

})
sr.reveal(`.home_data,.experience,.skills,.contact_container`)
sr.reveal(`.home_img`,{delay:600})
sr.reveal(`.home_scroll`,{delay:800})
sr.reveal(`.work_card,.service_card`,{interval:100})
sr.reveal(`.about_content`,{origin:'right'})
sr.reveal(`.about_img`,{origin:'left'})

















// docu ment.addEventListener("DOMContentLoaded",function(){
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