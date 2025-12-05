const scrollContainer = document.querySelectorAll('.scroll-container');
const btnLightDark = document.querySelector('.btn-light-dark');
const allArticle = document.querySelectorAll('article');
const allAside = document.querySelectorAll('aside');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    
    if (btnLightDark) {
        btnLightDark.classList.add('toggle-btn-t');
    }
    
    allArticle.forEach(article => article.classList.add('dark-theme-box'));
    allAside.forEach(aside => aside.classList.add('dark-theme-box'));
}

scrollContainer.forEach(card => {
    card.addEventListener('click', function(e) {
        e.stopPropagation(); 
        const isActive = this.classList.contains('active');
        scrollContainer.forEach(c => c.classList.remove('active'));
        if (!isActive) {
            this.classList.add('active');
        }
    });
});


if (btnLightDark) {
    btnLightDark.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        btnLightDark.classList.toggle('toggle-btn-t');
        allArticle.forEach(article => article.classList.toggle('dark-theme-box'));
        allAside.forEach(aside => aside.classList.toggle('dark-theme-box'));
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}