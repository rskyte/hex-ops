class Player {
  constructor(startTile){
    this.units = [];
    this.spawnPool = [];
    this.startTile = startTile;
  }

  spawn(unit){
  	this.startTile.add(unit);
  }

  remove(unit){
    this.units.remove(unit);
  }
}
