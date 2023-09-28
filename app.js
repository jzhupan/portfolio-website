
document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.getElementById("theme-button");

    themeButton.addEventListener("click", () => {
        const currentTheme = document.body.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        document.body.setAttribute("data-theme", newTheme);
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