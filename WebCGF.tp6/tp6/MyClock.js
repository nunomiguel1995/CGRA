/**
 * MyClock
 * @constructor
 */
 function MyClock(scene) {
 	CGFobject.call(this,scene);

    this.cylinder = new MyCylinder(this.scene,12,1);
    this.cylinder.initBuffers();
    this.face = new MyClockFace(this.scene,12,1);
    this.face.initBuffers();

	this.seconds = new MyClockHand(this.scene,0.5,'seconds',270);
	this.seconds.initBuffers();
	this.minutes = new MyClockHand(this.scene,0.4,'minutes',180);
	this.minutes.initBuffers();
	this.hours = new MyClockHand(this.scene,0.3,'hours',90);
	this.hours.initBuffers();

	this.clockAppearance = new CGFappearance(this.scene);
	this.clockAppearance.setAmbient(0.3,0.3,0.3,1);
	this.clockAppearance.setDiffuse(1,1,1,1);
	this.clockAppearance.setSpecular(0.5,0.5,0.5,1);
	this.clockAppearance.setShininess(50);
	this.clockAppearance.loadTexture("../resources/images/clock.png");

	this.handAppearance = new CGFappearance(this.scene);
	this.handAppearance.setAmbient(0,0,0,0);
	this.handAppearance.setDiffuse(0,0,0,0);
	this.handAppearance.setSpecular(0,0,0,0);
	this.handAppearance.setShininess(0);
};

 MyClock.prototype = Object.create(CGFobject.prototype);
 MyClock.prototype.constructor = MyClock;

 MyClock.prototype.display = function(){
 	this.scene.pushMatrix();
   		this.cylinder.display();
    	this.clockAppearance.apply();
    	this.face.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
		this.handAppearance.apply();
		this.scene.translate(0,0,1.1);
		this.scene.rotate(- this.seconds.angle * degToRad,0,0,1);
		this.seconds.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,0,1.1);
		this.handAppearance.apply();
		this.scene.rotate(- this.minutes.angle * degToRad,0,0,1);
		this.minutes.display();
	this.scene.popMatrix();
	
	this.scene.pushMatrix();
		this.scene.translate(0,0,1.1);
		this.handAppearance.apply();
		this.scene.rotate(- this.hours.angle * degToRad,0,0,1);
		this.hours.display();
    this.scene.popMatrix();
 };

MyClock.prototype.update = function(time){
	this.seconds.update(time);
	this.hours.update(time);
	this.minutes.update(time);
}