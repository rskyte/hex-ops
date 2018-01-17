Array.prototype.sum(){
	return this.reduce((a,b) => a+b,0)
}

class Tile {
  constructor(capacity = 6){
  	this.CAPACITY = capacity
  	this.units = []
  };

  canAccomodate(unit){ 
  	return (_unitSizes().sum < this.capacity);
  }

  add(unit){
    this.units += unit
  }
  remove(unit){
  	this.units.splice((this.units.indexOf(unit)),1)
  }
  
  //returns a random unit defending this tile 
  defend(){
  	return (this.units[Math.floor(Math.random * this.units.length)]) 
  }

  _unitSizes(){
  	return (this.units.map(function(unit){return unit.size})
  }
};

