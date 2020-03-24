var imagemodal = document.querySelector("div.image-modal");
var imagecontainer = document.querySelector("div.image-container");


function openImage() {
    imagemodal.classList.add("image-modal-active");
}

function closeImage() {
    imagemodal.classList.remove("image-modal-active");
}

function setImage(img) {
    openImage();
    imagecontainer.innerHTML = ` <img src="${img}" /> `;
}

var images = document.querySelectorAll('div.imgcontainer img');
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function(e) {
        setImage(e.target.getAttribute('src'));
    }
}


document.querySelector("button.closeimage").onclick = function() {
    closeImage();
}