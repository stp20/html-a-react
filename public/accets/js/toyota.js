
// Imágenes de diferentes perfiles del auto
const images = [
    'accets/img/toyota.webp',
    'accets/img/toyota3.webp',
    'accets/img/toyota4.webp',
    'accets/img/toyota5.webp'
];
let current = 0;
function changeImage() {
    current = (current + 1) % images.length;
    document.getElementById('carImage').src = images[current];
}