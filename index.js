import * as THREE from 'three'
import { GLTFLoader } from './three.js-master/examples/jsm/loaders/GLTFLoader.js'

const loader = new GLTFLoader();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;
function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
};

animate();

			loader.load(
				// resource URL
				'./RotateDisplay.glb',
				// called when the resource is loaded
				function ( gltf ) {
			
					scene.add( gltf.scene );
			
					gltf.animations; // Array<THREE.AnimationClip>
					gltf.scene; // THREE.Group
					gltf.scenes; // Array<THREE.Group>
					gltf.cameras; // Array<THREE.Camera>
					gltf.asset; // Object
			
				},
				// called while loading is progressing
				function ( xhr ) {
			
					console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
			
				},
				// called when loading has errors
				function ( error ) {
			
					console.log( 'An error happened' );
			
				}
			);