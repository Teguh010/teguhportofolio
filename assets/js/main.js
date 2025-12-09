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
// Disable ScrollReveal for home__title and home__img to prevent blur issues
// sr.reveal('.home__title', { delay: 200, origin: 'left' });
sr.reveal('.button', { delay: 400, origin: 'bottom' });
// sr.reveal('.home__img', { delay: 600, origin: 'right' });
sr.reveal('.home__social-icon', { interval: 100, origin: 'left' });

/*===== FIX SCROLLREVEAL BLUR ISSUE =====*/
// Remove inline styles from ScrollReveal that cause blur
const fixScrollRevealBlur = () => {
  const homeTitle = document.querySelector('.home__title');
  const homeImg = document.querySelector('.home__img');
  const homeImgImg = document.querySelector('.home__img img');
  
  if (homeTitle) {
    homeTitle.style.opacity = '1';
    homeTitle.style.visibility = 'visible';
    homeTitle.style.transform = 'none';
    homeTitle.style.webkitTransform = 'none';
  }
  
  if (homeImg) {
    homeImg.style.opacity = '1';
    homeImg.style.visibility = 'visible';
    homeImg.style.transform = 'none';
    homeImg.style.webkitTransform = 'none';
  }
  
  if (homeImgImg) {
    homeImgImg.style.opacity = '1';
    homeImgImg.style.visibility = 'visible';
    homeImgImg.style.transform = 'none';
    homeImgImg.style.webkitTransform = 'none';
  }
};

// Run immediately and after a delay to catch ScrollReveal
fixScrollRevealBlur();
setTimeout(fixScrollRevealBlur, 100);
setTimeout(fixScrollRevealBlur, 500);
setTimeout(fixScrollRevealBlur, 1000);
setTimeout(fixScrollRevealBlur, 2000);

// Also run on scroll to catch any re-applied styles
window.addEventListener('scroll', () => {
  fixScrollRevealBlur();
}, { passive: true });

/*SCROLL ABOUT*/
sr.reveal('.about__img', { delay: 200, origin: 'left' });
sr.reveal('.about__subtitle', { delay: 400, origin: 'right' });
sr.reveal('.about__text', { delay: 600, origin: 'right' });

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', { delay: 200 });
sr.reveal('.skills__text', { delay: 300 });
sr.reveal('.skills__data', { interval: 150, origin: 'left' });
sr.reveal('.skills__visual', { delay: 400, origin: 'right' });
sr.reveal('.skill-badge', { interval: 100, origin: 'bottom' });
sr.reveal('.circle-card', { interval: 200, origin: 'bottom' });
sr.reveal('.stat-card', { interval: 150, origin: 'bottom' });
sr.reveal('.tag', { interval: 50, origin: 'bottom' });
sr.reveal('.achievement-item', { interval: 150, origin: 'right' });

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
const typingElement = document.querySelector('.typing-text');
if (typingElement) {
    const roles = ['Fullstack Developer', 'Frontend Developer', 'Mobile Developer'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const typeWriter = () => {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 500; // Pause before starting new word
        }
        
        setTimeout(typeWriter, typeSpeed);
    };
    
    setTimeout(() => {
        typeWriter();
    }, 1500);
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

/*===== CIRCULAR PROGRESS ANIMATION =====*/
const circleProgressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const circle = entry.target;
            const percent = circle.getAttribute('data-percent');
            const circleElement = circle.querySelector('.progress-ring__circle');
            
            if (circleElement) {
                const radius = circleElement.r.baseVal.value;
                const circumference = radius * 2 * Math.PI;
                const offset = circumference - (percent / 100) * circumference;
                
                circleElement.style.strokeDasharray = `${circumference} ${circumference}`;
                circleElement.style.strokeDashoffset = circumference;
                
                setTimeout(() => {
                    circleElement.style.transition = 'stroke-dashoffset 2s ease-out';
                    circleElement.style.strokeDashoffset = offset;
                }, 200);
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.circle-progress').forEach(circle => {
    circleProgressObserver.observe(circle);
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




