/**
 * MyPropeller
 * @constructor
 */
 function MyPropeller(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;
	
    this.helice = new MyCylinder(this.scene,10,2);
    this.heliceCenter = new MyHalfSphere(this.scene,10,2);
    this.heliceTop = new MyClockFace(this.scene,10,2);

 	this.initBuffers();
 };

 MyPropeller.prototype = Object.create(CGFobject.prototype);
 MyPropeller.prototype.constructor = MyPropeller;

 MyPropeller.prototype.display = function() {
    this.scene.pushMatrix();
         this.scene.translate(0,0.155,0.65);
         this.scene.scale(0.04,0.01,0.7);
         this.helice.display();
    this.scene.popMatrix();
    this.scene.pushMatrix();
         this.scene.translate(0,0.16,1);
         this.scene.rotate(90 * degToRad, -1, 0 ,0);
         this.scene.scale(0.03, 0.03, 0.03);
         this.heliceCenter.display();
    this.scene.popMatrix();
    this.scene.pushMatrix();
         this.scene.translate(0,0.155,-0.05);
         this.scene.scale(0.04,0.01,0.7);
         this.heliceTop.display();
    this.scene.popMatrix();
    this.scene.pushMatrix();
         this.scene.translate(0,0.155,2.05);
         this.scene.rotate(90 * degToRad, 0, -1, 0);
         this.scene.rotate(90 * degToRad, 0, -1, 0);
         this.scene.scale(0.04,0.01,0.7);
         this.heliceTop.display();
    this.scene.popMatrix();
 };
