class Unit{
  constructor(name, vehicleAttack, infantryAttack, vehicleDefense, infantryDefense, unitType, movementRange){
    this.name = name;
    this.vehicleAttack = vehicleAttack;
    this.infantryAttack = infantryAttack;
    this.vehicleDefense = vehicleDefense;
    this.infantryDefense = infantryDefense;
    this.unitType = unitType;
    this.movementRange = movementRange;
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
}
