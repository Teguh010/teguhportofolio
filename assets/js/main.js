/*===== PAGE LOADER =====*/
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 800);
    }
});

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
    reset: false,
    easing: 'ease-out',
    scale: 1,
    viewFactor: 0.2
});

/*SCROLL HOME*/
sr.reveal('.home__title', { delay: 200, origin: 'left' });
sr.reveal('.button', { delay: 400, origin: 'bottom' });
sr.reveal('.home__img', { delay: 600, origin: 'right' });
sr.reveal('.home__social-icon', { interval: 100, origin: 'left' });

/*SCROLL ABOUT*/
sr.reveal('.about__img', { delay: 200, origin: 'left' });
sr.reveal('.about__subtitle', { delay: 400, origin: 'right' });
sr.reveal('.about__text', { delay: 600, origin: 'right' });

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', { delay: 200 });
sr.reveal('.skills__text', { delay: 300 });
sr.reveal('.skills__data', { interval: 150, origin: 'left' });
sr.reveal('.skills__img', { delay: 600, origin: 'right' });

/*SCROLL WORK*/
sr.reveal('.work__img', { interval: 200, origin: 'bottom' });
sr.reveal('.effect-sarah', { interval: 200, origin: 'bottom' });

/*SCROLL CONTACT*/
sr.reveal('.contact__form', { delay: 200, origin: 'bottom' });
sr.reveal('.contact__input', { interval: 100, origin: 'bottom' });

/*===== SCROLL PROGRESS BAR =====*/
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

/*===== HEADER SCROLL EFFECT =====*/
const header = document.querySelector('.l-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

/*===== TYPING ANIMATION FOR HOME TITLE =====*/
const typingElement = document.querySelector('.home__title-color');
if (typingElement) {
    const text = typingElement.textContent;
    typingElement.textContent = '';
    typingElement.style.borderRight = '3px solid';
    typingElement.style.animation = 'blink 1s infinite';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(() => {
                typingElement.style.borderRight = 'none';
            }, 500);
        }
    };
    
    setTimeout(() => {
        typeWriter();
    }, 1000);
}

/* Add blink animation for cursor */
const style = document.createElement('style');
style.textContent = `
    @keyframes blink {
        0%, 50% { border-color: transparent; }
        51%, 100% { border-color: var(--first-color); }
    }
`;
document.head.appendChild(style);

/*===== SKILLS BAR ANIMATION ON SCROLL =====*/
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBar = entry.target.querySelector('.skills__bar');
            if (skillBar) {
                const width = skillBar.style.width || getComputedStyle(skillBar).width;
                skillBar.style.width = '0';
                setTimeout(() => {
                    skillBar.style.transition = 'width 1.5s ease-out';
                    skillBar.style.width = width;
                }, 100);
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.skills__data').forEach(skill => {
    skillsObserver.observe(skill);
});

/*===== PARALLAX EFFECT FOR HOME IMAGE =====*/
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const homeImg = document.querySelector('.home__img');
    if (homeImg && scrolled < window.innerHeight) {
        homeImg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

/*===== SMOOTH SCROLL FOR ANCHOR LINKS =====*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});




