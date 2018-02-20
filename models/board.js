class Board{
  constructor(){

  }

  determineWinner(attacker, defender){
    return this.rollDice(attacker.attack(defender)) > this.rollDice(defender.defendAgainst(attacker)) ? attacker : defender
  }

  rollDice(numDice, mod = Math){
    return (Array(numDice).fill(0)).map(function(x){return mod.ceil(mod.random() * 6)}).sum()
  }
}
