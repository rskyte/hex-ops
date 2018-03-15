class Interface {
  constructor(board = Board, boarddrawer = BoardDrawer) {
    this.board = new board()
    this.boardConverter = new BoardConverter(25)
    this.canvas = document.getElementById('game-board-canvas')
    this.boardDrawer = new boarddrawer(this.boardConverter, this.canvas)
    this.tileSelected = null
    this.unitSelected = null
  }

  setup() {
    this.board.generateTiles()
    setTimeout(()=>{this.draw()},10) //this hacky setTimout is only here for testing/demonstrations
    this.canvas.addEventListener('click', (event) => {
      var x = event.pageX - this.canvas.offsetLeft
      var y = event.pageY - this.canvas.offsetTop
      this.clickevent(x, y)
    })
    var soldier = new Unit('tank', 1, 2, 1, 1, 'vehicle', 5, 3, this.board.tile(0,0), '1')
    this.board.tile(0,0).units = [soldier]
  }

  clickevent(x, y) {
    const coords = this.boardConverter.canvasToBoard(x, y)
    if (!this.tileSelected) {
      this.tileSelected = this.board.tile(coords.x, coords.y)
      console.log('tile selected')
    } else if (!this.unitSelected) {
      this.unitSelected = this.tileSelected.units[0]
      console.log('unit selected')
    } else {
      console.log('moving')
      this.unitSelected.moveTo(this.board.tile(coords.x, coords.y))
      this.unitSelected = null
      this.tileSelected = null
      this.draw()
    }
  }

  draw() {
    this.boardDrawer.draw(this.board)
  }

}

class BoardConverter {
  constructor(tileSize){
    this.tileSize = tileSize
    this.tileShortAxis = Math.sqrt(1 - 0.5**2) * tileSize
    this.startpointX = tileSize * 10
    this.startpointY = this.startpointX
  }

  boardToCanvas(x,y){
    const x2 = x * this.tileSize * 1.5 + this.startpointX
    const y2 = (-y) * this.tileShortAxis * 2 - x * this.tileShortAxis + this.startpointY
    return {'x': x2, 'y': y2}
  }

  canvasToBoard(x,y){
    const x2 = Math.round((x - this.startpointX)/(this.tileSize * 1.5))
    const y2 = Math.round(-(y - this.startpointY + (x2 * this.tileShortAxis)) / (this.tileShortAxis * 2))
    return {'x': x2, 'y': y2}
  }
}

interface = new Interface()

interface.setup()
interface.draw()
