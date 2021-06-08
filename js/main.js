import { reviews } from './reviewsData.js';

const review1 = reviews[0];
const review2 = reviews[1];
const review3 = reviews[2];
const review4 = reviews[3];

const reviewsDOM = document.querySelector('.reviews');
const rightArrowDOM = document.querySelector('.fa-angle-double-right');
let HTML = '';
let clickRightCount = 0;

reviewsDOM.innerHTML = `<img src=${review1.src}>
                 <div class="name">${review1.vardas}</div>
                 <div class="review">${review1.text}</div>`;

rightArrowDOM.addEventListener('click', () => {
    clickRightCount++;
    if (clickRightCount === 1 || clickRightCount % 4 === 1) {
        HTML = `<img src=${review2.src}>
                 <div class="name">${review2.vardas}</div>
                 <div class="review">${review2.text}</div>`;
    }
    if (clickRightCount === 2 || clickRightCount % 4 === 2) {
        HTML = `<img src=${review3.src}>
                 <div class="name">${review3.vardas}</div>
                 <div class="review">${review3.text}</div>`;
    }
    if (clickRightCount === 3 || clickRightCount % 4 === 3) {
        HTML = `<img src=${review4.src}>
                 <div class="name">${review4.vardas}</div>
                 <div class="review">${review4.text}</div>`;
    }
    if (clickRightCount === 4 || clickRightCount % 4 === 0) {
        HTML = `<img src=${review1.src}>
                 <div class="name">${review1.vardas}</div>
                 <div class="review">${review1.text}</div>`;
    }
    reviewsDOM.innerHTML = HTML;
})






