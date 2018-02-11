//section burgers

// const left = document.querySelector('.burgers__arrow-left');
// const right = document.querySelector('.burgers__arrow-right');
// const items = document.querySelector('.burgers__item');

// let currentItem = 0;

// left.addEventListener('click', function(e) {
//     e.preventDefault();
// });

// right.addEventListener('click', function(e) {
//     e.preventDefault();
// });


$(document).ready(() => {
    $('.burgers__arrow-left').on('click', e => {
        e.preventDefault();
    });
});

$(document).ready(() => {
    $('.burgers__arrow-right').on('click', e => {
        e.preventDefault();
    });
});