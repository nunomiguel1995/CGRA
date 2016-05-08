/**
 * MyClockFace
 * @constructor
 */
 function MyClockFace(scene,slices ,stacks) {
 	CGFobject.call(this,scene);

    this.stacks = stacks;
    this.slices = slices;

 	this.initBuffers();
 };

 MyClockFace.prototype = Object.create(CGFobject.prototype);
 MyClockFace.prototype.constructor = MyClockFace;

 MyClockFace.prototype.initBuffers = function() {
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
 	this.texCoords = []; 
 	
	var alfa = (Math.PI * 2) / this.slices;

    for(var j = 0; j <= this.stacks; j++){
 		for(var i = 0; i < this.slices; i++){
			this.vertices.push(Math.cos(alfa * i), Math.sin(alfa * i), this.stacks);
			this.normals.push(0, 0, this.stacks);
 			this.texCoords.push(0.5 + Math.cos(alfa * i)/2, 0.5 + Math.sin(alfa * i)/2);
 		}
    }
	

	for(var i = 0; i < this.slices; i++){
	    if(i == this.slices - 1){
	        this.indices.push(0,i+1,1);
	    }else{
		  this.indices.push(0,i+1,i+2);
	    }
	}

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers(); 
 };