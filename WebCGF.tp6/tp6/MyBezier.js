/**
 * MyBezier
 * @constructor
 */
 function MyBezier(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyBezier.prototype = Object.create(CGFobject.prototype);
 MyBezier.prototype.constructor = MyBezier;

MyBezier.prototype.initBuffers = function() {
    this.vertices = [];
 	this.indices = [];
 	this.normals = [];

    var alfa = (Math.PI * 2) / this.slices;

    for(var i = 0; i < this.stacks; i++){
        
    }

	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers(); 
 };