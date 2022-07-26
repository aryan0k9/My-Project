const ul = document.querySelector('ul');
const li = document.querySelectorAll('ul li');
const header = document.querySelector('header');
const body = document.querySelector('body');
const p = document.querySelector('#main #mainFirst #detail p');
const h1 = document.querySelector('#main #mainFirst #detail h1');
const button = document.querySelector('#main #mainFirst #detail button');
const i = document.querySelectorAll('#main #mainFirst #socialMedia i');
const socialMedia = document.querySelector('#main #mainFirst #socialMedia');
const bars = document.querySelector('header i:nth-of-type(1)');
const cross = document.querySelector('header i:nth-of-type(2)');
const mediaQuery768 = window.matchMedia('(max-width:768px)');
const mediaQuery768Min = window.matchMedia('(min-width:768px)');

const imgDay = document.createElement('img');
const imgNight = document.createElement('img');

const logoDay = document.createElement('img');
const logoNight = document.createElement('img');

header.prepend(logoDay);
header.prepend(logoNight);
ul.append(imgDay);
ul.append(imgNight);

imgDay.classList.add('moon_sun_img');
imgNight.classList.add('moon_sun_img');

logoDay.setAttribute('src', 'image/logoWhite.png');
logoNight.setAttribute('src', 'image/logoBlack.png');
logoDay.classList.add('logo');
logoNight.classList.add('logo');
logoNight.classList.add('logoNightNone');
imgDay.setAttribute('src', 'image/sun.png');
imgNight.setAttribute('src', 'image/moon.png');

imgDay.style.display = 'none';
imgNight.addEventListener('click', () => {
    for (let list of li) {
        list.style.color = '#FF4321';
    }
    logoDay.style.display = 'none';
    imgDay.style.display = 'block';
    body.style.backgroundColor = 'black';
    imgNight.style.display = 'none';
    logoNight.style.display = 'block'
    p.style.color = '#fff';
    h1.style.color = '#fff';
    button.style.color = '#000';
    button.style.backgroundColor = '#fff';

    for (let it of i) {
        it.style.color = '#fff';
    }
    socialMedia.addEventListener('mouseover', (e) => {
        if (e.target) {
            for (let it of i) {
                e.target.style.color = '#FF4321';
            }
        }
    });
    socialMedia.addEventListener('mouseout', (e) => {
        if (e.target) {
            for (let it of i) {
                e.target.style.color = '#fff';
            }
        }
    });
    if (mediaQuery768.matches) {
        ul.style.display = 'none';
        cross.style.display = 'none';
        bars.style.display = 'block';
    }

})
imgDay.addEventListener('click', () => {
    for (let list of li) {
        list.style.color = 'black';
    }
    logoNight.style.display = 'none';
    imgNight.style.display = 'block';
    body.style.backgroundColor = 'white';
    imgDay.style.display = 'none';
    logoDay.style.display = 'block';
    p.style.color = 'rgb(83, 86, 89)';
    h1.style.color = '#000';
    button.style.color = '#fff';
    button.style.backgroundColor = '#000';
    for (let it of i) {
        it.style.color = '#000';
    }
    socialMedia.addEventListener('mouseover', (e) => {
        if (e.target) {
            for (let it of i) {
                e.target.style.color = '#FF4321';
            }
        }
    });
    socialMedia.addEventListener('mouseout', (e) => {
        if (e.target) {
            for (let it of i) {
                e.target.style.color = '#000';
            }
        }
    });
    if (mediaQuery768.matches) {
        for (let list of li) {
            list.style.color = '#FF4321';
            ul.style.display = 'none';
            cross.style.display = 'none';
            bars.style.display = 'block';
        }
    }
})

cross.style.display = 'none';
bars.addEventListener('click', () => {
    ul.style.display = 'block';
    bars.style.display = 'none';
    cross.style.display = 'block';
})
cross.addEventListener('click', () => {
    ul.style.display = 'none';
    bars.style.display = 'block';
    cross.style.display = 'none';
})
