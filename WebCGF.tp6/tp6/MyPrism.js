/**
 * MyPrism
 * @constructor
 */
 function MyPrism(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyPrism.prototype = Object.create(CGFobject.prototype);
 MyPrism.prototype.constructor = MyPrism;

 MyPrism.prototype.initBuffers = function() {
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
 			this.normals.push(Math.cos(alfa * (i + 0.5)), Math.sin(alfa * (i + 0.5)), 0);

			this.vertices.push(Math.cos(alfa * (i+1)), Math.sin(alfa * (i+1)), s);
 			this.normals.push(Math.cos(alfa * (i + 0.5)), Math.sin(alfa * (i + 0.5)), 0);

			this.vertices.push(Math.cos(alfa * i), Math.sin(alfa * i), s + 1);
 			this.normals.push(Math.cos(alfa * (i + 0.5)), Math.sin(alfa * (i + 0.5)), 0);

			this.vertices.push(Math.cos(alfa * (i+1)), Math.sin(alfa * (i+1)), s + 1);
 			this.normals.push(Math.cos(alfa * (i + 0.5)), Math.sin(alfa * (i + 0.5)), 0);

 			this.indices.push((4*i)+0,(4*i)+1,(4*i)+2);
 			this.indices.push((4*i)+3,(4*i)+2,(4*i)+1);
 		}

	}

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers(); 
 };