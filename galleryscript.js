//import * as THREE from 'three';
import * as THREE from 'node_modules/three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const spaceTexture = new THREE.TextureLoader().load('galleryBackground.jpg');
scene.background = spaceTexture;
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#app'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);


const geometry = new THREE.BoxGeometry( 20, 20, 20 );
var textureLoader = new THREE.TextureLoader();
var textures = [
    textureLoader.load('/cubePhoto/flower.jpg'),
    textureLoader.load('/cubePhoto/street.jpg'),
    textureLoader.load('/cubePhoto/disney.jpg'),
    textureLoader.load('/cubePhoto/home.jpg'),
    textureLoader.load('/cubePhoto/animal.jpg'),
    textureLoader.load('/cubePhoto/car.jpg'),
];


var materials = textures.map(texture => new THREE.MeshBasicMaterial({ map: texture }));

const cone = new THREE.Mesh(geometry, materials ); 
scene.add( cone );

const instructions = document.getElementById('instructions');


const showInstructions = () => {
    instructions.classList.add('visible'); 
    setTimeout(() => {
        instructions.classList.remove('visible');
    }, 4000);
};


showInstructions();

let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();


window.addEventListener('mousedown', (event) => {
    isDragging = true;
});


window.addEventListener('mouseup', () => {
    isDragging = false;
});


window.addEventListener('mousemove', (event) => {
    if (!isDragging) return;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const deltaX = mouseX - previousMousePosition.x;
    const deltaY = mouseY - previousMousePosition.y;

   
    cone.rotation.y += deltaX * 0.01; 
    cone.rotation.x += deltaY * 0.01; 

    previousMousePosition = { x: mouseX, y: mouseY };
});


window.addEventListener('mousedown', (event) => {
    previousMousePosition = { x: event.clientX, y: event.clientY };
});


window.addEventListener('click', (event) => {
    
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;


    raycaster.setFromCamera(mouse, camera);


    const intersects = raycaster.intersectObject(cone);
    if (intersects.length > 0) {
        const faceIndex = Math.floor(intersects[0].faceIndex/2);

       
        const urls = [
            'nature.html',   
            'city.html', 
            'disney.html', 
            'index.html',
            'animal.html',
            'car.html' 
        ];

       
        window.location.href = urls[faceIndex];
    }
});

const animate = () => {
    renderer.render(scene, camera);
    cone.rotation.y+=0.003;
    requestAnimationFrame(animate);
};

animate();