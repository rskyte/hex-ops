class BoardDrawer {
  
  constructor(tileSize, startpointX = 250, startpointY = 250){
  	this.tileSize = tileSize
  	this.canvas = document.getElementById('game-board-canvas')
  	this.context = this.canvas.getContext("2d")
  	this.context.fillStyle = "#00FF00";
    this.context.strokeStyle = "#000000";
  	this.tileShortAxis = Math.sqrt(1 - 0.5**2) * tileSize 
  	this.startpointX = startpointX
  	this.startpointY = startpointY
  }

   drawHex(tile){
  	var x = tile.x * this.tileSize * 1.5 + this.startpointX
  	var y = (-tile.y) * this.tileShortAxis * 2 - tile.x * this.tileShortAxis + this.startpointY
  	this.context.beginPath();
    this.context.moveTo(x - this.tileSize, y);
    this.context.lineTo(x - this.tileSize / 2, y - this.tileShortAxis);
    this.context.lineTo(x + this.tileSize / 2, y - this.tileShortAxis);
    this.context.lineTo(x + this.tileSize, y);
    this.context.lineTo(x + this.tileSize / 2, y + this.tileShortAxis);
    this.context.lineTo(x - this.tileSize / 2, y + this.tileShortAxis);
    this.context.closePath();
    this.context.fill()
    this.context.stroke()
  }

  draw(board){
    this.context.clearRect(0,0,this.canvas.with, this.canvas.height)
    for(var i = -board.size; i <= board.size; i++){
      for(var j = -board.size; j <= board.size; j++){
      	if(board.tile(i,j)){
      	  this.drawHex(board.tile(i,j))
      	}
      }
    }
  }
	
}

