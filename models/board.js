class Board{
  constructor(){

  }

  determineWinner(attacker, defender){
    return this.rollDice(attacker.attack(defender)) > this.rollDice(defender.defendAgainst(attacker)) ? attacker : defender
  }

  rollDice(numDice){
    return (Array(numDice).fill(0)).map(function(x){return Math.ceil(Math.random() * 6)}).sum()
  }
}
