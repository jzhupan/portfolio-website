
document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.getElementById("theme-button");

    

    themeButton.addEventListener("click", () => {

        const currentTheme = document.body.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        document.body.setAttribute("data-theme", newTheme);


             const icon = document.getElementById('iconImage');
             const darkTheme = document.getElementById('iconImage').src = './images/logo-icons/bxs-moon.png';
             const lightTheme = document.getElementById('iconImage').src = './images/logo-icons/bxs-sun.png';

            if(newTheme === "light"){
                icon.src = darkTheme
            } else if(newTheme === "dark"){
                icon.src = lightTheme
            }

            


    });
   

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            //console.log(entry)
            if(entry.isIntersecting) {
                entry.target.classList.add('show')
            } else {
                entry.target.classList.remove('show')
            }
        })
    })
    
    
    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((el) => observer.observe(el))

    
});

function navFunction(){
    let x = document.getElementById('nav-bar');
    if(x.className === 'topnav'){
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}

function submitFunction(){
    document.getElementById('myForm').submit();
    alert('Thank you for submitting! This is just a demo, please contact me through jzhupan@gmail.com for real inquiries.')
}


//Browser Icon
let link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = './images/logo-icons/black-icon-transparentbg.png'
