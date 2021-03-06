/**
 * MyCurve
 * @constructor
 */
 function MyCurve(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyCurve.prototype = Object.create(CGFobject.prototype);
 MyCurve.prototype.constructor = MyCurve;

 MyCurve.prototype.initBuffers = function() {
 	/*
 	* TODO:
 	* Replace the following lines in order to build a prism with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/

 	this.vertices = [];
 	this.indices = [];
 	this.normals = [];

	var alfa = (Math.PI * 2) / this.slices;

	for(var s = 0; s < this.stacks; s++){
		this.s = this.s / this.stacks;
 		for(var i = 0; i < this.slices; i++){
			this.vertices.push(Math.cos(alfa * i), Math.sin(alfa * i), s);
			this.normals.push(Math.cos(alfa * i),  Math.sin(alfa * i), s);
			this.vertices.push(Math.cos(alfa * i), Math.sin(alfa * i), s + 1);
			this.normals.push(Math.cos(alfa * i), Math.sin(alfa * i), s + 1);
 		}
	}

	for(var i = 0; i < this.slices /2; i++){
		this.indices.push((2*i)+0, (2*i)+2, (2*i)+3);
		this.indices.push((2*i)+3, (2*i)+2, (2*i)+0);
		this.indices.push((2*i)+3, (2*i)+1, (2*i)+0);
		this.indices.push((2*i)+0, (2*i)+1, (2*i)+3);
	}

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers(); 
 };