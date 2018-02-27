Array.prototype.remove = function(item){
  if(this.includes(item)){
  	return this.splice(this.indexOf(item), 1)[0]
  }
}


Array.prototype.sum = function(){
	return this.reduce((a,b) => a+b,0)
}
