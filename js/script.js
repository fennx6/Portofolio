document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    const closeNav = () => {
        if (!navToggle || !navList) return;
        navList.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    };

    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            const isOpen = navList.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });
    }

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
        a.addEventListener('click', (e)=>{
            const target = document.querySelector(a.getAttribute('href'));
            if(target){
                e.preventDefault();
                target.scrollIntoView({behavior:'smooth',block:'start'});
                if (window.innerWidth <= 800) closeNav();
            }
        });
    });

    // Contact form handler (no backend) — shows a confirmation
    const form = document.getElementById('contactForm');
    if(form){
        form.addEventListener('submit', (e)=>{
            e.preventDefault();
            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const message = form.message.value.trim();
            if(!name || !email || !message){
                alert('Mohon isi semua bidang formulir.');
                return;
            }
            alert('Terima kasih, ' + name + '! Pesan Anda telah dikirim (simulasi).');
            form.reset();
        });
    }
});
