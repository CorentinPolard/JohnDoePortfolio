const images = document.querySelectorAll(".image");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modalContent");
const closeModal = document.querySelector("#closeModal");

function showModal(event) {
    modal.classList.remove("hidden");
    modal.classList.add("show");
    let image = document.querySelector("#displayedImg");
    if (image) {
        image.setAttribute('src', event.target.getAttribute('src'));
        image.setAttribute('alt', event.target.getAttribute('alt'));
    } else {
        image = document.createElement('img');
        image.setAttribute('id', 'displayedImg');
        image.setAttribute('src', event.target.getAttribute('src'));
        image.setAttribute('alt', event.target.getAttribute('alt'));
        modalContent.appendChild(image);
    }
}

for (image of images) {
    image.addEventListener("click", showModal);
}

closeModal.addEventListener('click', () => {
    modal.classList.remove("show");
    modal.classList.add("hidden");
})