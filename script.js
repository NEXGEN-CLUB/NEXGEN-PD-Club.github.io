
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const divs = document.querySelectorAll('.content-div');

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetdiv = document.getElementById(targetId);

            divs.forEach(div => {
                div.style.display = 'none';
            });

            targetdiv.style.display = 'block';

            window.scrollTo({
                top: targetdiv.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Show the home div by default
    document.getElementById('home').style.display = 'block';
});
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    navbar.style.display = 'none';  // Hide the navbar initially

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {  // Show navbar after scrolling down 50px
            navbar.style.display = 'flex';
            navbar.style.transition = 'top 0.3s';
        } else {
            navbar.style.display = 'none';
        }
    });
});
