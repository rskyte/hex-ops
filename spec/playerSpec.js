function MockTile(){
  this.units = []
}
MockTile.prototype.add = function(unit){
  this.units.push(unit)
}

startTile = new MockTile()
player = new Player(startTile,["Awesome Tank", "Less Awesome Tank"])
console.log(player.spawnPool)
describe("Player#units", [
  it("should be an array", [
  	expect((player.units) instanceof Array).toEqual(true)
  ])
])
describe("Player#spawn", [
  it("adds the unit to the starting tile", [
  	player.spawn("Awesome Tank"),
  	console.log(player.startTile.units),
  	expect(startTile.units).toContain("Awesome Tank")
  ]),
  it("will only spawn things from the spawnpool",[
  	player.spawn("Thing I don't have to spawn"),
  	dont(expect(startTile.units).toContain("Thing I don't have to spawn"))
  ]),
  it("removes the unit from the spawnpool", [
  	player.spawn("Less Awesome Tank"),
  	dont(expect(player.spawnPool).toContain("Less Awesome Tank"))
  ])
])