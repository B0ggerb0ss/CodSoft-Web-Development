document.addEventListener('DOMContentLoaded', function () {
    // Typing effect
    const typingElements = document.querySelectorAll('.text-animate');
    typingElements.forEach(typingElement => {
        if (typingElement) {
            const text = typingElement.innerText;
            typingElement.innerText = ''; // Clear the original text
            let index = 0;

            function type() {
                const span = document.createElement('span');
                span.textContent = text[index];
                typingElement.appendChild(span);
                index++;

                if (index < text.length) {
                    setTimeout(type, 50);
                }
            }

            setTimeout(type, 1000);
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });

            toggleNav();
        });
    });

    document.querySelector('.hamburg-menu button').addEventListener('click', toggleNav);

    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });

        animateOnScroll();
    });
});

function animateOnScroll() {
    const animatedElements = document.querySelectorAll('.animate');

    animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 50) {
            element.classList.add('active');
        }
    });
}

function toggleNav() {
    const navList = document.querySelector('.navbar ul');
    if (navList) {
        navList.classList.toggle('active');
    }
}
