
const fontPath = 'media/Chilanka_Regular.js';
var width = window.innerWidth;
var height= window.innerHeight;
//criar cena
const scene = new THREE.Scene();
//criar e posicionar a camera
const camera = new THREE.PerspectiveCamera(45,width/height,1,1000);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 0;
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x3C3C3C);
renderer.setSize(width*0.7,height*0.7);
renderer.shadowMap.enabled = true;
renderer.shadowMapSoft = true;



const cubeGeo = new THREE.BoxGeometry(5,5,5);
const cubeMat = new THREE.MeshLambertMaterial({color: 'white'});
const cube = new THREE.Mesh(cubeGeo,cubeMat);
cube.castShadow = false;
cube.position.y = 1;
//criar e posicionar as luzes
const spotlight1 = new THREE.SpotLight('white');
spotlight1.castShadow = true;
spotlight1.position.set(100,100,100);

const spotlight2 = new THREE.SpotLight('white');
spotlight2.castShadow = true;
spotlight2.position.set(-100,-100,-100);
scene.add(spotlight2);


camera.lookAt(scene.position);
document.body.appendChild(renderer.domElement);



var render= ()=>{
    requestAnimationFrame ( render );
    spinCamera();
    renderer.render(scene, camera);
};
loadFont();
render();

//ceclarção das definições para a relaização do texto
var text = "invejara",
heigt = 4,
size = 10,
curveSegments = 10,
bevelThickness = 0.5,
bevelSize = 0.5,
bevelSegments = 3,
bevelEnabled = true,
font = fontPath;

// rodar a camera
var rotation =0;
function spinCamera(){
    rotation += 0.01;
    camera.position.z = Math.sin(rotation) * 80;
    camera.position.x = Math.cos(rotation) * 80;
    camera.lookAt(scene.position)
}
//carregar o tipo de letra 
function loadFont(){
    const loader = new THREE.FontLoader();
    loader.load(fontPath, function(res) {font= res; createText()})
}


// criar o texto
function createText(){
    //remover o texto da cena anterior
    scene.remove.apply(scene, scene.children);
    scene.add(spotlight1);
    scene.add(spotlight2);
    //criar o texto
    textGeo= new THREE.TextGeometry(
        document.getElementById("word").value,
        {
            font: font,
            size: size,
            height: heigt,
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
    
    
    