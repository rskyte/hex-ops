class Unit{
  constructor(name, vehicleAttack, infantryAttack, vehicleDefense, infantryDefense, unitType, movementRange, size = 1, tile, player){
    this.name = name;
    this.vehicleAttack = vehicleAttack;
    this.infantryAttack = infantryAttack;
    this.vehicleDefense = vehicleDefense;
    this.infantryDefense = infantryDefense;
    this.unitType = unitType;
    this.movementRange = movementRange;
    this.size = size;
    this.tile = tile;
    this.player = player;
  }

  moveTo(tile){
    tile.add(this)
    this.tile.remove(this)
    this.tile = tile
  }

  attack(unit){
    if(unit.unitType === "vehicle"){
      return this.vehicleAttack;
    } else {
      return this.infantryAttack;
    }
  }

  defendAgainst(unit){
    if(unit.unitType === "vehicle"){
      return this.vehicleDefense;
    } else {
      return this.infantryDefense;
    }
  }

  die(){
    this.tile.remove(this);
    this.player.remove(this);
  }
}
