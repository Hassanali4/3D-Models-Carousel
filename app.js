//Import the ThREE.js library
import * as THREE from 'https://cdn.skypack.dev/three';
//To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";


let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 3;
function loadShow(){
    let stt = 0;
    items[active].style.transform = 'none';
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    for(var i = active + 1; i < items.length; i++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for(var i = active - 1; i >= 0; i--){
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
loadShow();
next.onclick = function(){
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}

prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}



// const scene = new THREE.scene();
// const camera = new THREE.PrespectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const container1 = document.getElementById( 'container1' );
//Creat a Three.JS Scene
const scene1 = new THREE.Scene();
//create a new camera with positions and angles
const camera1 = new THREE.PerspectiveCamera( 60, 500/ 300, 0.01, 1000 );
//position of the camera in the scene
camera1.position.set( 0, 1, 5 );
// for clear view of the model
const renderer1 = new THREE.WebGLRenderer( { antialias: true } );
//renderers color 
renderer1.setClearColor( 0xdedede, 1 );

renderer1.setSize( 500, 300 );
renderer1.setPixelRatio( window.devicePixelRatio ) 
container1.appendChild( renderer1.domElement );


var loader = new GLTFLoader();
var obj;
loader.load("Models/tree.gltf" , function(gltf){
    obj = gltf.scene;
    scene.add(gltf.scene);
});
scene.background = new THREE.color(0xffffff);
// const material1 = new THREE.MeshBasicMaterial( { color: 0xff00ff, wireframe: true, side: THREE.DoubleSide  } );
// const geometry1 = new THREE.CylinderGeometry( 1, 1, 2, 18 );
// const cylinder = new THREE.Mesh( geometry1, material1 );
// scene1.add( cylinder );
 
const container2 = document.getElementById( 'container2' );	
const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera( 65, 400 / 250, 0.05, 10000 );
camera2.position.set( 0, 0, 2 );
const renderer2 = new THREE.WebGLRenderer( { antialias: true } );
renderer2.setClearColor( 0xffee22, 1 );
renderer2.setSize( 400, 250 );
renderer2.setPixelRatio( window.devicePixelRatio );
container2.appendChild( renderer2.domElement );

const material2 = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true, side: THREE.DoubleSide  } );
const geometry2 = new THREE.SphereGeometry( );
const sphere = new THREE.Mesh( geometry2, material2 );
scene2.add( sphere );
 