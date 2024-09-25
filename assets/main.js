window.onload = adjustingForMobile;
window.onresize = adjustingForMobile;

function adjustingForMobile() {
        if (window.innerWidth <= 1200) {
        const images = document.querySelectorAll('.side-logo');
        const navbarLinks = document.querySelectorAll('.navbar li a');
        const logos = document.querySelectorAll('.logo');
        const socials = document.querySelectorAll('.socials img');
        const social = document.querySelectorAll('.socials');
        const homeStuff = document.querySelectorAll('.cont');
        const experience = document.querySelectorAll('.experience p');
        
        navbarLinks.forEach(function(link) {
            link.style.fontSize = '16px'; 
        });
        logos.forEach(function(logo) {
            logo.style.height = "125px";
            logo.style.width = '80px';
            logo.style.backgroundSize = '80px';
        });
        experience.forEach(function(experience){
            experience.style.fontSize = '8px';
        })
        images.forEach(function(image) {
            image.style.display = 'none';
        });
        socials.forEach(function(socials) {
            socials.style.padding = '20px';
            socials.style.height = '80px';
            socials.style.width = '80px';
        });
        social.forEach(function(social){
            social.style.position = 'absolute';
            social.style.bottom = '0';
        })
        homeStuff.forEach(function(card) {
            card.style.fontSize = '10px'
            card.style.padding = '5px';  
            card.style.paddingBottom = '5px';
        });
    } else {
        const socials = document.querySelectorAll('.socials img');
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
        socials.forEach(function(socials) {
            socials.style.padding = '';
            socials.style.height = '';
            socials.style.width = '';
        });
    }
}