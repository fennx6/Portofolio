document.addEventListener('DOMContentLoaded', ()=>{
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    if(navToggle){
        navToggle.addEventListener('click', ()=>{
            navList.style.display = navList.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
        a.addEventListener('click', (e)=>{
            const target = document.querySelector(a.getAttribute('href'));
            if(target){
                e.preventDefault();
                target.scrollIntoView({behavior:'smooth',block:'start'});
                if(window.innerWidth <= 800) navList.style.display = 'none';
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
