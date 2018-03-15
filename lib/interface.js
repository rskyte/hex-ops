class Interface {
  constructor(board = Board, boarddrawer = BoardDrawer) {
    this.board = new board()
    this.boardConverter = new BoardConverter(25)
    this.boardDrawer = new boarddrawer(this.boardConverter)

  }

  setup() {
    this.board.generateTiles()
    this.draw()
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
    const x2 = (x - this.startpointX)/(this.tileSize * 1.5)
    const y2 = -(y-this.startpointY + x * this.ShortAxis)/(this.tileShortAxis * 2)
    return {'x': x2, 'y': y2}
  }
}

interface = new Interface()

interface.setup()
interface.draw()
