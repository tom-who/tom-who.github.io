function adjustingForMobile() {
        if (window.innerWidth <= 1200) {
        const images = document.querySelectorAll('.side-logo');
        const navbarLinks = document.querySelectorAll('.navbar li a');
        const logos = document.querySelectorAll('.logo');
        
        navbarLinks.forEach(function(link) {
            link.style.fontSize = '16px'; 
        });
        logos.forEach(function(logo) {
            logo.style.height = "125px";
            logo.style.width = '80px';
            logo.style.backgroundSize = '80px';
        });
        images.forEach(function(image) {
            image.style.display = 'none';
        });
    } else {
        const images = document.querySelectorAll('.side-logo');
        const navbarLinks = document.querySelectorAll('.navbar li a');
        const logos = document.querySelectorAll('.logo');

        navbarLinks.forEach(function(link) {
            link.style.fontSize = '';
        });
        logos.forEach(function(logo) {
            logo.style.height = '';
            logo.style.width = '';
            logo.style.backgroundSize = '';
        });
        images.forEach(function(image) {
            image.style.display = '';
        });
    }
}

window.onload = adjustingForMobile;
window.onresize = adjustingForMobile;
