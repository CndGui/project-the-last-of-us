const button = document.getElementsByClassName("button");
const image = document.getElementsByClassName("image");

changeCarousel(button, image);

function changeCarousel(button, image) {
    for (let i = 0; i<6; i++) {
        button[i].addEventListener("click", () => {
            if(button[i].classList.value !== "button on") {
                removeImageAndButton();
                addImageAndButton(button, image, i);
            }
        });
    }
}

function removeImageAndButton() {
    document.getElementsByClassName("image on")[0].classList.remove("on");
    document.getElementsByClassName("button on")[0].classList.remove("on");
}

function addImageAndButton(button, image, array) {
    button[array].classList.add("on");
    image[array].classList.add("on");
}