const images = [
    '/disney/1.jpg', '/disney/2.jpg', '/disney/3.jpg', '/disney/4.jpg','/disney/5.jpg','/disney/6.jpg','/disney/7.jpg','/disney/8.jpg'
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
