const images = [
    '/city/1.jpg', '/city/2.jpg', '/city/3.jpg', '/city/4.jpg','/city/5.jpg','/city/6.jpg','/city/7.jpg','/city/8.jpg','/city/9.jpg','/city/10.jpg','/city/11.jpg','/city/12.jpg','/city/13.jpg','/city/14.jpg'
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
