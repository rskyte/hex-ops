function MockTile(){
  this.units = []
}
MockTile.prototype.add = function(unit){
  this.units.push(unit)
}

startTile = new MockTile()
player = new Player(startTile)
describe("Player#units", [
  it("should be an array",[
  	expect((player.units) instanceof Array).toEqual(true)
  ])
])
describe("Player#spawn",[
  it("adds the unit to the starting tile",[
  	player.spawn("Awesome Tank"),
  	expect(startTile.units).toContain("Awesome Tank")
  ])
])