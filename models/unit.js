class Unit{
  constructor(name, vehicleAttack, infantryAttack, vehicleDefense, infantryDefense, unitType, movementRange, tile, player){
    this.name = name;
    this.vehicleAttack = vehicleAttack;
    this.infantryAttack = infantryAttack;
    this.vehicleDefense = vehicleDefense;
    this.infantryDefense = infantryDefense;
    this.unitType = unitType;
    this.movementRange = movementRange;
    this.tile = tile;
    this.player = player;
  }

  move(){}

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
