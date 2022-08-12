window.addEventListener("DOMContentLoaded", function(e) {
    console.log("DOM fully loaded and parsed");

    const mainComponent = document.getElementById('page-wrap');
    const lottie = document.getElementById('lottie-pre');
    const header = document.getElementById('header');

    function contentLoad() {
        setTimeout(() => {
            header.classList.add("active");
        }, 1000);
        setTimeout(() => {
            mainComponent.classList.add("active");
        }, 3000); 
        setTimeout(() => {
            lottie.classList.remove("active");
            lottie.classList.add("fade-out");
        }, 2000);
    }
    contentLoad();

    
  });