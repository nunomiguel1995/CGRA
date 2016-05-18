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

    this.arm = new MyCylinder(this.scene,10,2);
    this.heliceOne = new MyPropeller(this.scene,10,2);
    this.heliceTwo = new MyPropeller(this.scene,10,2);
    this.heliceThree = new MyPropeller(this.scene,10,2);
    this.heliceFour = new MyPropeller(this.scene,10,2);
    this.heliceCenter = new MyHalfSphere(this.scene,10,2);
    this.heliceBase = new MyCylinder(this.scene,10,2);
    this.heliceTop = new MyClockFace(this.scene,10,2);
    this.center = new MyHalfSphere(this.scene,10,2);
    this.centerBottom = new MyClockFace(this.scene,10,2);
    this.legs = new MyCurve(this.scene,10,2);
    this.legsBottom = new MyUnitCubeQuad(this.scene, 0 , 1, 0, 1);

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

 MyDrone.prototype.display = function() {
   // centro do drone
   this.scene.pushMatrix();
        this.scene.translate(0, -0.08, 0);
        this.scene.rotate(90 * degToRad, -1, 0, 0);
        this.scene.scale(0.5,0.5,0.4);
        this.center.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
        this.scene.translate(0, 0.72, 0);
        this.scene.rotate(90 * degToRad, 1, 0, 0);
        this.scene.scale(0.5,0.5,0.4);
        this.centerBottom.display();
   this.scene.popMatrix();

   // 1º cilindro do braço
   this.scene.pushMatrix();
        this.scene.translate(0, 0, -1);
        this.scene.scale(0.1,0.1,2);
        this.arm.display();
   this.scene.popMatrix();

   // 2º cilindro do braço
   this.scene.pushMatrix();
        this.scene.translate(-1, 0, 0);
        this.scene.rotate(90 * degToRad, 0, 1, 0);
        this.scene.scale(0.1,0.1,2);
        this.arm.display();
   this.scene.popMatrix();

   // 1º helice
   this.scene.pushMatrix();
         this.scene.translate(0, 0.15, -1);
         this.scene.rotate(90 * degToRad, 1, 0, 0);
         this.scene.scale(0.1,0.1,0.3);
         this.heliceBase.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
         this.heliceOne.display();
   this.scene.popMatrix();
  
   // topos da 1ª helice
   this.scene.pushMatrix();
        this.scene.translate(0, -0.45, -1);
        this.scene.rotate(90 * degToRad, -1, 0, 0);
        this.scene.scale(0.1, 0.1, 0.3);
        this.heliceTop.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
        this.scene.translate(0, 0.45, -1);
        this.scene.rotate(90 * degToRad, 1, 0, 0);
        this.scene.scale(0.1, 0.1, 0.3);
        this.heliceTop.display();
   this.scene.popMatrix();
   
   // 2º helice
   this.scene.pushMatrix();
         this.scene.translate(1, 0.15, 0);
         this.scene.rotate(90 * degToRad, 1, 0, 0);
         this.scene.scale(0.1,0.1,0.3);
         this.heliceBase.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
         this.scene.translate(1,0,-1);
         this.heliceTwo.display();
   this.scene.popMatrix();

   // topos da 2ª helice
   this.scene.pushMatrix();
        this.scene.translate(1, -0.45, 0);
        this.scene.rotate(90 * degToRad, -1, 0, 0);
        this.scene.scale(0.1, 0.1, 0.3);
        this.heliceTop.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
        this.scene.translate(1, 0.45, 0);
        this.scene.rotate(90 * degToRad, 1, 0, 0);
        this.scene.scale(0.1, 0.1, 0.3);
        this.heliceTop.display();
   this.scene.popMatrix();

   // 3º helice
   this.scene.pushMatrix();
         this.scene.translate(0, 0.15, 1);
         this.scene.rotate(90 * degToRad, 1, 0, 0);
         this.scene.scale(0.1,0.1,0.3);
         this.heliceBase.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
         this.scene.translate(0,0,-2);
         this.heliceThree.display();
   this.scene.popMatrix();

   // topos da 3ª helice
   this.scene.pushMatrix();
        this.scene.translate(0, -0.45, 1);
        this.scene.rotate(90 * degToRad, -1, 0, 0);
        this.scene.scale(0.1, 0.1, 0.3);
        this.heliceTop.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
        this.scene.translate(0, 0.45, 1);
        this.scene.rotate(90 * degToRad, 1, 0, 0);
        this.scene.scale(0.1, 0.1, 0.3);
        this.heliceTop.display();
   this.scene.popMatrix();
   
   // 4º helice
   this.scene.pushMatrix();
         this.scene.translate(-1, 0.15, 0);
         this.scene.rotate(90 * degToRad, 1, 0, 0);
         this.scene.scale(0.1,0.1,0.3);
         this.heliceBase.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
         this.scene.translate(-1,0,-1);
         this.heliceFour.display();
   this.scene.popMatrix();

   // topos da 4ª helice
   this.scene.pushMatrix();
        this.scene.translate(-1, -0.45, 0);
        this.scene.rotate(90 * degToRad, -1, 0, 0);
        this.scene.scale(0.1, 0.1, 0.3);
        this.heliceTop.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
        this.scene.translate(-1, 0.45, 0);
        this.scene.rotate(90 * degToRad, 1, 0, 0);
        this.scene.scale(0.1, 0.1, 0.3);
        this.heliceTop.display();
   this.scene.popMatrix();

   //pernas
   this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0.4);
        this.scene.scale(0.6, 0.5, 0.05);
        this.legs.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
        this.scene.translate(0.59, -0.5, 0);
        this.scene.rotate(90 * degToRad, 0, 1, 0);
        this.scene.scale(1.2, 0.05, 0.05);
        this.legsBottom.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
        this.scene.translate(0, -0.5, -0.4);
        this.scene.scale(0.6, 0.5, 0.05);
        this.legs.display();
   this.scene.popMatrix();
   this.scene.pushMatrix();
        this.scene.translate(-0.59, -0.5, 0);
        this.scene.rotate(90 * degToRad, 0, 1, 0);
        this.scene.scale(1.2, 0.05, 0.05);
        this.legsBottom.display();
   this.scene.popMatrix();
}

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