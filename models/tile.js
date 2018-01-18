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
  	this.units.remove(unit);
  }

  //returns a random unit defending this tile, battle logic will be within it's own class or within the board class initially.
  defend(){
  	return (this.units[Math.floor(Math.random * this.units.length)])
  }

  _unitSizes(){
  	return (this.units.map(function(unit){return unit.size})
  }
};
