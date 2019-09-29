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

  scene.background = new THREE.Color( 0x000000 );

  let sunTexture = new THREE.TextureLoader().load('sun.jpg');

  let sunGeometry = new THREE.SphereGeometry(10,32,32);
  let sunMaterial = new THREE.MeshBasicMaterial({map:sunTexture});

  let mercTexture = new THREE.TextureLoader().load('mercury.jpg');

  let mercGeometry = new THREE.SphereGeometry(.5,32,32);
  let mercMaterial = new THREE.MeshBasicMaterial({map:mercTexture});

  let venusTexture = new THREE.TextureLoader().load('venus.jpg');

  let venusGeometry = new THREE.SphereGeometry(.5,32,32);
  let venusMaterial = new THREE.MeshBasicMaterial({map:venusTexture});

  let marsTexture = new THREE.TextureLoader().load('mars.jpg');

  let marsGeometry = new THREE.SphereGeometry(.5,32,32);
  let marsMaterial = new THREE.MeshBasicMaterial({map:marsTexture});

  let earthTexture = new THREE.TextureLoader().load('earth.jpg');

  let earthGeometry = new THREE.SphereGeometry(.5,32,32);
  let earthMaterial = new THREE.MeshBasicMaterial({map:earthTexture});

  let jupiterTexture = new THREE.TextureLoader().load('jupiter.jpg');

  let jupiterGeometry = new THREE.SphereGeometry(1,32,32);
  let jupiterMaterial = new THREE.MeshBasicMaterial({map:jupiterTexture});

  let saturnTexture = new THREE.TextureLoader().load('saturn.jpg');

  let saturnGeometry = new THREE.SphereGeometry(.95,32,32);
  let saturnMaterial = new THREE.MeshBasicMaterial({map:saturnTexture});

  let uranusTexture = new THREE.TextureLoader().load('uranus.jpg');

  let uranusGeometry = new THREE.SphereGeometry(.5,32,32);
  let uranusMaterial = new THREE.MeshBasicMaterial({map:uranusTexture});

  let neptuneTexture = new THREE.TextureLoader().load('neptune.jpg');

  let neptuneGeometry = new THREE.SphereGeometry(.5,32,32);
  let neptuneMaterial = new THREE.MeshBasicMaterial({map:neptuneTexture});

  sun = new THREE.Mesh(sunGeometry,sunMaterial);
  scene.add(sun);

  merc = new THREE.Mesh(mercGeometry,mercMaterial);
  merc.position.x = 20;
  scene.add(merc);
  venus = new THREE.Mesh(venusGeometry,venusMaterial);
  venus.position.x = 25;
  scene.add(venus);
  earth = new THREE.Mesh(earthGeometry,earthMaterial);
  earth.position.x = 30;
  scene.add(earth);
  mars = new THREE.Mesh(marsGeometry,marsMaterial);
  mars.position.x = 35;
  scene.add(mars);
  jupiter = new THREE.Mesh(jupiterGeometry,jupiterMaterial);
  jupiter.position.x = 40;
  scene.add(jupiter);
  saturn = new THREE.Mesh(saturnGeometry,saturnMaterial);
  saturn.position.x = 45;
  scene.add(saturn);
  uranus = new THREE.Mesh(uranusGeometry,uranusMaterial);
  uranus.position.x = 50;
  scene.add(uranus);
  neptune = new THREE.Mesh(neptuneGeometry,neptuneMaterial);
  neptune.position.x = 55;
  scene.add(neptune);

  camera.position.x = 0;
  camera.position.z = 90;
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  merc.rotation.y += 0.00017;
  venus.rotation.y += 0.000085;
  earth.rotation.y += 0.01;
  mars.rotation.y += 0.01;
  jupiter.rotation.y += 0.0267;
  saturn.rotation.y += 0.0267;
  uranus.rotation.y += 0.01411;
  neptune.rotation.y += 0.015;



  renderer.render(scene,camera);
}


setUp();
