class Interface {
  constructor(board = Board, boarddrawer = BoardDrawer) {
    this.board = new board()
    this.boardDrawer = new boarddrawer()
  }

  setup = () => {
    this.board.generateTiles()
    draw()
  }

  draw = () => {
    this.boarddrawer.draw(this.board)
  }

  getAxis() {
    var x = tile.x * this.tileSize * 1.5 + this.startpointX
    var y = (-tile.y) * this.tileShortAxis * 2 - tile.x * this.tileShortAxis + this.startpointY
  }

}
