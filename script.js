const link = document.getElementById("home");
link.addEventListener("click",()=>{
    window.location.href="home.html";
});
const menus = document.getElementById("menu");

menus.addEventListener("click",()=>{
    window.location.href="menus.html";
});

const item1 = document.getElementById("item1");
item1.addEventListener("click",()=>{
    window.location.href="veg.html";
});
const item2 = document.getElementById("item2");
item2.addEventListener("click",()=>{
    window.location.href="nonVeg.html";
});
