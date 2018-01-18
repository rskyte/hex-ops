Array.prototype.remove = function(item){
  this.splice(this.indexOf(item), 1)
}


Array.prototype.sum = function(){
	return this.reduce((a,b) => a+b,0)
}
