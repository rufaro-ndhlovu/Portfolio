// assigning the scroll button in html to the variable mybutton

let mybutton = document.getElementById("scroll-button");

// When the user scrolls down 200px from the top of the document, show the button

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Show and hide menus when you click on the menu icon

function show() {

    let menu = document.getElementById('responsive-list');
    if (menu.style.display === "none") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }

}