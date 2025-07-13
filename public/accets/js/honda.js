
// Imágenes de diferentes perfiles del auto
const images = [
    'accets/img/Honda.webp',
    'accets/img/honda2.jpg',
    'accets/img/honda3.jpg'

];
let current = 0;
function changeImage() {
    current = (current + 1) % images.length;
    document.getElementById('carImage').src = images[current];
}

