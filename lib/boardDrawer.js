class BoardDrawer {

  constructor(tileSize, startpointX = 250, startpointY = 250){
  	this.tileSize = tileSize
  	this.canvas = document.getElementById('game-board-canvas')
  	this.context = this.canvas.getContext("2d")
  	this.context.fillStyle = "#00FF00";
    this.context.strokeStyle = "#000000";
    this.context.font = '10px Ariel'
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
    var text = "" + tile.x + "," + tile.y
    this.context.strokeText(text, x-8, y+2)
  }

  drawUnits(tile){
    var x = tile.x * this.tileSize * 1.5 + this.startpointX
  	var y = (-tile.y) * this.tileShortAxis * 2 - tile.x * this.tileShortAxis + this.startpointY
    var ctxt = this.context;
    tile.units.forEach( (unit) => {
      console.log(ctxt)
      var img = new Image;
      img.src = `imgs/${unit.unitType}.png`
      img.onload = () => {
        ctxt.drawImage(img, x - 10, y - 8)
      }
    })
  }

  draw(board){
    this.context.clearRect(0,0,this.canvas.with, this.canvas.height)
    for(var i = -board.size; i <= board.size; i++){
      for(var j = -board.size; j <= board.size; j++){
      	if(board.tile(i,j)){
      	  this.drawHex(board.tile(i,j))
          this.drawUnits(board.tile(i,j))
      	}
      }
    }
  }

}
