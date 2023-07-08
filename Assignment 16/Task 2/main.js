let images = document.querySelectorAll("img");
document.body.style.backgroundColor = "black";
images.forEach((image) => {
    image.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    image.alt = "Elzero Logo";
});
// Another Soultion
/*
    for (let i = 0; i < images.length; i++) {
        document.images[i].src =
            "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
        document.images[i].alt = "Elzero Logo";
    }
*/
