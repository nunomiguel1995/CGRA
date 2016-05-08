/**
 * MyDrone
 * @constructor
 */
 
 var degToRad = Math.PI / 180.0;

 function MyDrone(scene) {
 	CGFobject.call(this,scene);

    this.movementX = 4;
    this.movementY = 4;
    this.movementZ = 4;
    this.rotationAngle = 0;
    
 	this.initBuffers();
 };

 MyDrone.prototype = Object.create(CGFobject.prototype);
 MyDrone.prototype.constructor = MyDrone;

 MyDrone.prototype.initBuffers = function() {
 	this.vertices = [
 	0.5, 0.3, 0,
 	-0.5, 0.3, 0,
 	0, 0.3, 2];

 	this.indices = [0, 1, 2];

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };

MyDrone.prototype.rotateLeft = function(speed){
    this.rotationAngle += (speed);
}

MyDrone.prototype.rotateRight = function(speed){
    this.rotationAngle -= (speed);
}

MyDrone.prototype.moveFoward = function(speed){
    this.movementX += Math.sin(degToRad * this.rotationAngle) * (speed/10);
    this.movementZ += Math.cos(degToRad * this.rotationAngle) * (speed/10);
}

MyDrone.prototype.moveBack = function(speed){
    this.movementX -= Math.sin(degToRad * this.rotationAngle) * (speed/10);
    this.movementZ -= Math.cos(degToRad * this.rotationAngle) * (speed/10);
}

MyDrone.prototype.moveUp = function(speed){
    this.movementY += (speed/10);
}

MyDrone.prototype.moveDown = function(speed){
    this.movementY -= (speed/10);
}

MyDrone.prototype.update = function(currTime){
 
}