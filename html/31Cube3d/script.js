let camera,scene,renderer;
let mesh;
let width,height;

function setUp(){
  width = window.innerWidth;
  height = window.innerHeight;
  camera = new THREE.PerspectiveCamera(45,width/height,1,1000);
  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(width,height);

  document.body.appendChild(renderer.domElement);

  scene.background = new THREE.Color( 0xeeeeee );

  let texture = new THREE.TextureLoader().load('dafuq.PNG');

  let geometry = new THREE.BoxGeometry(1,1,1);
  let material = new THREE.MeshBasicMaterial({map:texture});

  mesh = new THREE.Mesh(geometry,material);
  scene.add(mesh);
  camera.position.z = 5;
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;
  renderer.render(scene,camera);
}


setUp();
