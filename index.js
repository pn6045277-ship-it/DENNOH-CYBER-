const showMenu = document.getElementById("showMenu");
const hideMenu = document.getElementById("hideMenu");
const whatsapp = document.querySelector("#whatsapp");
const whatsapp1 = document.querySelector("#whatsapp1");
const whatsapp2 = document.querySelector("#whatsapp2");
// const nav = document.querySelector(".navlinks-phone a");
let phone;
let message;
const myName = "Dennoh Cyber Services"
showMenu.onclick = function(){
  document.querySelector(".navlinks-phone").style.display = "block";
  showMenu.style.display = "none";
  // document.body.classList.add("no-scroll");
}
hideMenu.onclick = function(){
  document.querySelector(".navlinks-phone").style.display = "none";
  showMenu.style.display = "block";
  // document.body.classList.remove("no-scroll");
}
// nav.forEach(function(link){
//   link.onclick = function(){
//     side.classList.remove("active");
//     document.body.classList.remove("no-scroll");
//   };
// });
whatsapp.onclick = function(){
  phone = "254711448865";
  message = `Hello ${myName}, I would like to enquire about your services.`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
whatsapp1.onclick = function(){
   phone = "254711448865";
   message = `Hello ${myName}, I would like to enquire about your services.`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
whatsapp2.onclick = function(){
   phone = "254711448865";
   message = `Hello ${myName}, I would like to enquire about where you are located.`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
console.log(message);