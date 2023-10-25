document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const side_bar = document.getElementById("side_bar");
    const close_sidebar = document.getElementById("close_sidebar");
    hamburger.addEventListener("click", function () {
        side_bar.style.display = "block";
        side_bar.style.opacity = 1;
        side_bar.style.right = "0";
    });


    close_sidebar.addEventListener("click", function(){
        side_bar.style.display = "none";
        side_bar.style.opacity = 0;
        side_bar.style.right = "-100%";
    })
});