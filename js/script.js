window.addEventListener("DOMContentLoaded", function(e) {
    console.log("DOM fully loaded and parsed");

    const mainComponent = document.getElementById('page-wrap');
    const lottie = document.getElementById('lottie-pre');
    const header = document.querySelector('.header__navbar');

    function contentLoad() {
        setTimeout(() => {
            mainComponent.classList.add("active");
            header.classList.add("active");
        }, 3500); 
        setTimeout(() => {
            lottie.classList.remove("active");
            lottie.classList.add("fade-out");
        }, 2000);
    }
    contentLoad();
    
  });