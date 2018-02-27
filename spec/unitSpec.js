function Mocktile(){
  this.units = []
}
Mocktile.prototype.add = function(unit){ this.units.push(unit)}
Mocktile.prototype.remove = function(unit){ this.units.remove(unit)}

var fakeTile = new Mocktile()
fakeTile.x = 0
fakeTile.y = 0
var fakeTile2 = new Mocktile()
fakeTile2.x = 1
fakeTile2.y = -1
var fakeTile3 = new Mocktile()
fakeTile3.x = 1
fakeTile3.y = 1 
var fakePlayer = []
test_soldier = new Unit('soldier', 1, 2, 1, 2, 'infantry', 3, 1, fakeTile, fakePlayer)
test_tank = new Unit('tank', 2, 2, 1, 2, 'vehicle', 4, 3, 'n/a', 'n/a')
fakeTile.add(test_soldier)
fakePlayer.add(test_soldier)

describe("Unit#size", [
  it("should be a default of 1 if not defined", [
    expect(new Unit('unit', 1, 1, 1, 1, 'unit', 1, undefined,'none', 'none').size).toEqual(1)
  ])
])

describe("Unit#moveTo",[
  it("should add the unit to the new tile",[
    test_soldier.moveTo(fakeTile2),
    expect(fakeTile2.units).toContain(test_soldier)
    ]),
  it("should remove it from the old tile",[
    test_soldier.moveTo(fakeTile), //test_soldier is currently on fakeTile2 (this is why describe blocks need a before each test capability)
    dont(expect(fakeTile2.units).toContain(test_soldier))
    ]),
  it("shouldn't be able to move to tiles that are not adjacent",[
    test_soldier.moveTo(fakeTile3),
    dont(expect(fakeTile3.units).toContain(test_soldier))
    ])
  ])

describe("Unit#attack", [
  it("returns the unit's vehicle attack when attacking a vehicle",[
    expect(test_soldier.attack(test_tank)).toEqual(1)
  ]),
  it("returns the unit's infantry attack when attacking an infantry unit", [
    expect(test_soldier.attack(test_soldier)).toEqual(2)
  ])
])

describe("Unit#defendAgainst", [
  it("returns the unit's infantry defense when being attacked by an infantry unit", [
    expect(test_soldier.defendAgainst(test_soldier)).toEqual(2)
  ]),
  it("returns the unit's vehicle defense when being attacked by a vehicle", [
    expect(test_soldier.defendAgainst(test_tank)).toEqual(1)
  ])
])

describe("Unit#die", [
  it("unit should be removed from the tile and player's array", [
    expect(fakeTile.units.length).toEqual(1),
    test_soldier.die(),
    expect(fakeTile.units.length).toEqual(0)
  ])
])
