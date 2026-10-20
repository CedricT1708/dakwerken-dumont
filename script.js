const mainNav = document.getElementById('mainNav');
const parallaxBg = document.getElementById('parallaxBg');
const revealCards = document.querySelectorAll('.scroll-reveal');

const materialGrade = document.getElementById('materialGrade');
const m2Slider = document.getElementById('m2Slider');
const m2Val = document.getElementById('m2Val');
const priceOutput = document.getElementById('priceOutput');

function updateLuxuryPrice() {
    const pricePerMeter = parseInt(materialGrade.value);
    const totalMeters = parseInt(m2Slider.value);
    m2Val.innerText = totalMeters;
    
    const finalSum = pricePerMeter * totalMeters;
    priceOutput.innerText = "€ " + finalSum.toLocaleString('nl-NL');
}

materialGrade.addEventListener('input', updateLuxuryPrice);
m2Slider.addEventListener('input', updateLuxuryPrice);

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;

    if(scrollPosition > 60) {
        mainNav.classList.add('scrolled');
    } else {
        mainNav.classList.remove('scrolled');
    }

    if (window.innerWidth > 992) {
        parallaxBg.style.transform = `translateY(${scrollPosition * 0.30}px)`;
    }

    revealCards.forEach(card => {
        let cardTop = card.getBoundingClientRect().top;
        if(cardTop < window.innerHeight - 80) {
            card.classList.add('visible');
        }
    });
});
