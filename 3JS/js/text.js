const fontPath = 'media/Chilanka_Regular.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight,.1, 1000);
const renderer = new THREE.WebGLRenderer();
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 0;


renderer.setClearColor(0x3C3C3C);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMapSoft = true;

const cubeGeo = new THREE.BoxGeometry(5,5,5);
const cubeMat = new THREE.MeshLambertMaterial({color: 'white'});
const cube = new THREE.Mesh(cubeGeo, cubeMat);
cube.castShadow = true;
cube.position.y = 0;


const spotlight = new THREE.SpotLight(0xffffff);
spotlight.castShadow = true;
spotlight.position.set(30,60,60);
scene.add(spotlight);+


camera.lookAt(scene.position);
document.body.appendChild(renderer.domElement);



var render = function()
{
requestAnimationFrame( render );
cube.rotation.y +=  0.01;
camera.position.z = Math.sin(1) * 60;
camera.position.x = Math.cos(1.5) * 80;
spinCamera();
renderer.render(scene, camera);
};
loadFont();
render();


var text = "aems",
height = 2,
size = 10,
curveSegments = 10,
bevelThickness = 1,
bevelSize = 0.3,
bevelSegments = 3,
bevelEnabled = true,
font = undefined;

var rotation = 0;
function spinCamera(){
rotation += 0.005
camera.position.z = Math.sin(rotation) * 80;
camera.position.x = Math.cos(rotation) * 80;
camera.lookAt(scene.position)
}

function loadFont()
{
var loader = new THREE.FontLoader();
loader.load(fontPath, function(res) {font = res; createText();});
}

function createText()
{
  
textGeo = new THREE.TextGeometry("invejara",
{
  font: font,
  size: size,
  height: height,
  curveSegments:curveSegments,
  weight: "normal",
  bevelThickness:bevelThickness,
  bevelSize:bevelSize,
  bevelSegments:bevelSegments,
  bevelEnabled:bevelEnabled
});

textGeo.computeBoundingBox();
textGeo.computeVertexNormals();

var text = new THREE.Mesh(textGeo, cubeMat);
text.position.x = -textGeo.boundingBox.max.x/2;
text.castShadow = true;
scene.add(text);
}