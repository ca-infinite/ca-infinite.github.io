const images = [
    '/nature/1.jpg','/nature/2.jpg','/nature/3.jpg','/nature/4.jpg','/nature/5.jpg','/nature/6.jpg','/nature/7.jpg','/nature/8.jpg'
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
