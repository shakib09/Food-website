let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let flag =false;

menu.onclick= () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle("active");
    flag = !flag;
    if (flag){
         navbar.style.display="block";
    }
    else{
         navbar.style.display="none";
    }
};

// window.onscroll = () => {
//     // navbar.style.display="none";
// };

