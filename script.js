window.addEventListener("scroll",()=>{
navbar.classlist.remove("scrolled");}});

const profileIcon=document.querySelector(".profile-icon");
profileIcon.addEventListener("click",()=>{
window.location.href="profiledetails.html";}});


const movieCard=document.querySelectorAll(".content-card");
movieCard.forEach(card)=>{
card.addEventListener("mouseEnter",()=>{
card.style.transform="scale(1.05)";});

card.addEventListener("mouseleave",()=>{
card.style.transform="scale(1)";});
});















