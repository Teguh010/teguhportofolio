/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

//toggle-button-start
const btntgle = document.getElementById("menu-toggle");
const lines = btntgle.querySelectorAll(".line");
const cls = { open: "open", close: "close" };
let btnClass = cls.open;


btntgle.addEventListener("click", () => {
    if (btntgle.classList.contains(cls.open)) {
        btntgle.classList.remove(btnClass);
        btnClass = cls.close;

    } else if (btntgle.classList.contains(cls.close)) {
        btntgle.classList.remove(cls.close);
        btntgle.classList.remove(btnClass);
        btnClass = cls.open;
    }

    void btntgle.offsetWidth;
    btntgle.classList.add(btnClass);
});

//toggle-button-end


showMenu('nav-toggle', 'nav-menu')
showMenu('menu-toggle', 'nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    const btntogleku = document.getElementsByClassName('btn-toggle')
    const cls = { open: "open", close: "close" };
    let btnClass = cls.open;
    navMenu.classList.remove('show')
    for (var i = 0; i < btntogleku.length; i++) {
        if (btntogleku[i].classList.contains(cls.open)) {
            btntogleku[i].classList.remove(btnClass)
            btnClass = cls.close;
            console.log(btntogleku[i].className);
        }
        else if (btntogleku[i].classList.contains(cls.close)) {
            btntogleku[i].classList.remove(btnClass);
            btnClass = cls.open;
        }
        void btntgle.offsetWidth;
        btntgle.classList.add(btnClass);
    }


}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 400 });
sr.reveal('.about__text', { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {});
sr.reveal('.skills__data', { interval: 200 });
sr.reveal('.skills__img', { delay: 600 });

/*SCROLL WORK*/
sr.reveal('.work__img', { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal('.contact__input', { interval: 200 });




