import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const ring_geo = new THREE.RingGeometry(.2, .4);
const ring_material = new THREE.MeshBasicMaterial( {color: 0x0000ff })
const ring = new THREE.Mesh(ring_geo, ring_material);
ring.position.y += 1;
scene.add(ring);


const geometry = new THREE.BoxGeometry( .5, .5, .5 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const line_geo = new THREE.BoxGeometry( .51, .51, .08 );
const line_material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
const line = new THREE.Mesh( line_geo, line_material );
scene.add( line );

const cone_geo = new THREE.ConeGeometry(.3, .7);
const cone_material = new THREE.MeshBasicMaterial( {color: 0xff0000 })
const cone = new THREE.Mesh(cone_geo, cone_material);
cone.position.y -= 1;
scene.add(cone);

camera.position.z = 3;
camera.position.x = 1;

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.001;

    line.rotation.x += 0.01;
    line.rotation.y += 0.001;

    cone.rotation.x += 0.01;
    cone.rotation.y += 0.01;

    ring.rotation.x += 0.01;
    ring.rotation.y += 0.01;

	renderer.render( scene, camera );
}

renderer.setAnimationLoop( animate );