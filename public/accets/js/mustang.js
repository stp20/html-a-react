// Imágenes de diferentes perfiles del auto
const images = [
    'accets/img/mustang2.webp',
    'accets/img/mustang3.webp',
    'accets/img/mustang4.webp',
    'accets/img/mustang5.webp'
];
let current = 0;
function changeImage() {
    current = (current + 1) % images.length;
    document.getElementById('carImage').src = images[current];
}
