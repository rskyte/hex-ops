class Board{
  constructor(size = 4){
  	this.size = size
  	this.tiles = new Array(size*2 + 1).fill(new Array(size * 2 + 1))
  }

  generateTiles(){
  	for(x = -this.size; x <= this.size; x++){
  	  for(y = -this.size; y<= this.size; y++){
  	    if(Math.abs(x+y) <= this.size){
  	      _setTile(x,y, new Tile)
  	    }
  	  }
  	}
  }

  _setTile(x,y,value){
  	this.tiles[x+this.size][y+this.size]= value
  }

  tile(x,y){
  	console.log(this.tiles)
  	console.log(this.tiles[4][4])
  	return this.tiles[x+this.size][y+this.size]
  }

  determineWinner(attacker, defender){
    return this.rollDice(attacker.attack(defender)) > this.rollDice(defender.defendAgainst(attacker)) ? attacker : defender
  }

  rollDice(numDice, mod = Math){
    return (Array(numDice).fill(0)).map(function(x){return mod.ceil(mod.random() * 6)}).sum()
  }
}
