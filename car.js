const images = [
    '/car/1.jpg', '/car/2.jpg', '/car/3.jpg', '/car/4.jpg','/car/5.jpg','/car/6.jpg','/car/7.jpg'
];

const container = document.getElementById('imageContainer');
const overlay = document.getElementById('overlay');
const enlargedImage = document.getElementById('enlargedImage');
const closeBtn = document.getElementById('closeBtn');

images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Photo';
    img.onclick = () => {
        enlargedImage.src = src; 
        overlay.style.display = 'flex';
    };
    container.appendChild(img);
});
closeBtn.onclick = () => {
    overlay.style.display = 'none'; 
};


overlay.onclick = (e) => {
    if (e.target === overlay) {
        overlay.style.display = 'none'; 
    }
};
