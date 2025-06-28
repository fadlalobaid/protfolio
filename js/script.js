let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let section = document.querySelector("section");
let navLinks = document.querySelector("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a [href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

function sendMassege(){
  const name=document.getElementById('name').value
  const massege = document.getElementById('massege').value;
  const phone=+9647800271337
  if(!massege && !name ){
    alert('ادخل الاسم والرسالة من فضلك')
    return;
  }
  const url=`https://wa.me/${phone}?text=مرحباً انا:${name} 
   ${massege}`

  open(url,"_blank")
  console.log(url);
  
}