images = document.querySelectorAll("img");
images.forEach((image) =>
    image.getAttribute("alt") === null
        ? (image.alt = "Elzero New")
        : (image.alt = "Old")
);
