function createLights(scene) {
    var light0 = new BABYLON.DirectionalLight("Omni", new BABYLON.Vector3(-2, -5, 2), scene);
    var light1 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(2, -5, -2), scene);
}
function createCameras(scene) {
    var canvas = document.querySelector("#renderCanvas");
    var camera = new BABYLON.FreeCamera("FreeCamera", new BABYLON.Vector3(5, -8, -20), scene);
    camera.attachControl(canvas, true);
    camera.checkCollisions = true;
    camera.applyGravity = true;

    //Set the ellipsoid around the camera (e.g. your player's size)
    camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);
}
function createGround(scene) {
    var ground = BABYLON.Mesh.CreatePlane("ground", 20.0, scene);
    ground.material = new BABYLON.StandardMaterial("groundMat", scene);
    ground.material.diffuseColor = new BABYLON.Color3(1, 1, 1);
    ground.material.backFaceCulling = false;
    ground.position = new BABYLON.Vector3(5, -10, -15);
    ground.rotation = new BABYLON.Vector3(Math.PI / 2, 0, 0);

    //finally, say which mesh will be collisionable
    ground.checkCollisions = true;

    createWall(scene, ground);
}

function createWall(scene, ground){

    var wallMaterial = new BABYLON.StandardMaterial("Mat", scene);
    var wallTexture = new BABYLON.Texture("images/wall.png", scene);

    var wall1 = BABYLON.Mesh.CreatePlane("wall1", 10.0, scene);
    wall1.material = wallMaterial;
    wall1.material.diffuseTexture = wallTexture;
    wall1.material.diffuseTexture.hasAlpha = true;
    wall1.position = new BABYLON.Vector3(5, -10, -5);
    wall1.checkCollisions = true;
    wall1.scaling.x = 2;

    var wall2 = BABYLON.Mesh.CreatePlane("wall2", 10.0, scene);
    wall2.material = wallMaterial;
    wall2.material.diffuseTexture = wallTexture;
    wall2.material.diffuseTexture.hasAlpha = true;
    wall2.position = new BABYLON.Vector3(15, -10, -15);
    wall2.checkCollisions = true;
    wall2.scaling.x = 2;
    wall2.rotation.y = Math.PI/2;

    var wall3 = BABYLON.Mesh.CreatePlane("wall3", 10.0, scene, false, BABYLON.Mesh.DOUBLESIDE);
    wall3.material = wallMaterial;
    wall3.material.diffuseTexture = wallTexture;
    wall3.material.diffuseTexture.hasAlpha = true;
    wall3.position = new BABYLON.Vector3(5, -10, -25);
    wall3.checkCollisions = true;
    wall3.scaling.x = 2;
    wall3.rotation.y = Math.PI;

    var wall4 = BABYLON.Mesh.CreatePlane("wall4", 10.0, scene, false, BABYLON.Mesh.BACKSIDE);
    wall4.material = wallMaterial;
    wall4.material.diffuseTexture = wallTexture;
    wall4.material.diffuseTexture.hasAlpha = true;
    wall4.position = new BABYLON.Vector3(-5, -10, -15);
    wall4.checkCollisions = true;
    wall4.scaling.x = 2;
    wall4.rotation.y = Math.PI/2;
}

function createBoxes(scene) {

    var box = new BABYLON.Mesh.CreateBox("crate", 2, scene);
    box.material = new BABYLON.StandardMaterial("Mat", scene);
    box.material.diffuseTexture = new BABYLON.Texture("images/crate.png", scene);
    box.material.diffuseTexture.hasAlpha = true;
    box.position = new BABYLON.Vector3(0, -8, -13);
    box.checkCollisions = true;
    box.scaling = new BABYLON.Vector3(0.2,2,8);

    var box2 = new BABYLON.Mesh.CreateBox("crate1", 2, scene);
    box2.material = new BABYLON.StandardMaterial("Mat2", scene);
    box2.material.diffuseTexture = new BABYLON.Texture("images/crate.png", scene);
    box2.material.diffuseTexture.hasAlpha = true;
    box2.position = new BABYLON.Vector3(10, -8, -13);
    box2.checkCollisions = true;
    box2.scaling = new BABYLON.Vector3(0.2,2,8);
}
/**
 * Created by Camunda on 12/5/2015.
 */
// -------------------------------------------------------------
// Here begins a function that we will 'call' just after it's built
var createScene = function (engine) {

    var scene = new BABYLON.Scene(engine);
    scene.gravity = new BABYLON.Vector3(0, -0.9, 0);
    scene.collisionsEnabled = true;

    createLights(scene);

    createCameras(scene);

    createGround(scene);

    createBoxes(scene);

    return scene;
}; // End of createScene function