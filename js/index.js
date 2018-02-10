const openButton = document.querySelector(".burger");

const navPanel = document.querySelector(".nav-panel");

const menuLink = document.querySelectorAll(".nav-panel__item");

const bodyModal = document.body;





const mobileMenu = function() {
    openButton.addEventListener('click', function(){
    openButton.classList.toggle("burger-active");
    navPanel.classList.toggle("nav-panel-active");
    bodyModal.classList.toggle("body-modal-open");
});

for (let i = 0; i < menuLink.length; i++) {
        menuLink[i].addEventListener('click', function(){
        openButton.classList.toggle("burger-active");
        navPanel.classList.toggle("nav-panel-active");
        bodyModal.classList.toggle("body-modal-open");
});
}
};

mobileMenu();