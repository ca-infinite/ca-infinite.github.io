const images = [
    '/animal/1.jpg', '/animal/2.jpg', '/animal/3.jpg', '/animal/4.jpg','/animal/5.jpg','/animal/6.jpg','/animal/7.jpg','/animal/8.jpg','/animal/9.jpg','/animal/10.jpg','/animal/11.jpg','/animal/12.jpg','/animal/13.jpg','/animal/14.jpg','/animal/15.jpg','/animal/16.jpg'
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
