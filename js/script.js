/*====================== toggle icon navbar =====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*====================== scroll sections active link =====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    /*============================= sticky navbar ==========================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
};

/*====================== remove toggle icon and navbar when click navbar link (scroll) =====================*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

/*============================= scroll reveal ==========================*/
ScrollReveal({
    reset: true,
	distance: '80px',
	duration: 2000,
	delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box .contact form', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// ScrollReveal effect for the portfolio section (added recently)
ScrollReveal().reveal('.scroll-reveal-portfolio .portfolio-box', {
    origin: 'bottom',
    distance: '80px',
    duration: 1000,
    delay: 200,
    interval: 200,
  });



/*======================== typed js =======================*/
// Typed.js library should be loaded before this script

const typed = new Typed('.multiple-text', {
    strings: ['chéngxù yuán (programmer)', 'xuéshēng (student)', 'piàoliàng (pretty)'],
    typeSpeed: 100,
	backSpeed: 100,
	backDelay: 1000,
	loop: true
});



/*======================== modal dialogs for prompts and validation =======================*/

function showSuccessModal() {
    var modal = document.getElementById("successModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("successModal");
    modal.style.display = "none";
}


function submitForm() {
    // initialization to get objects from html file
    var fullName = document.getElementById("fullName").value.trim();
    var emailAddress = document.getElementById("emailAddress").value.trim();
    var mobileNumber = document.getElementById("mobileNumber").value.trim();
    var emailSubject = document.getElementById("emailSubject").value.trim();
    var message = document.getElementById("message").value.trim();
    var errorMessage = document.getElementById("errorMessage");

    // Simple validation for missing field/s
    if (fullName === "" || emailAddress === "" || mobileNumber === "" || emailSubject === "" || message === "") {
        errorMessage.textContent = "System: Missing Field/s";
        return;
    }

    // Clear previous error message
    errorMessage.textContent = "";

    // Existing logic after successful validation
    showSuccessModal();

    // Reset the form or redirect to another page if needed
    document.getElementById("contactForm").reset();
}

document.getElementById("contactForm").addEventListener("submit", function (event) {
event.preventDefault();
submitForm();
});

  


/*12.13.23*/

function showFallbackContent() {
    // Hide the YouTube player
    document.getElementById('youtubePlayer').style.display = 'none';

    // Show the fallback content
    document.getElementById('youtubePlayerFallback').style.display = 'block';
  }



