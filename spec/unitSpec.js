var fakeTile = []
var fakePlayer = []
test_soldier = new Unit('soldier', 1, 2, 1, 2, 'infantry', 3, fakeTile, fakePlayer)
test_tank = new Unit('tank', 2, 2, 1, 2, 'vehicle', 4, 'n/a', 'n/a')
fakeTile.push(test_soldier)
fakePlayer.push(test_soldier)

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
    expect(fakeTile.length).toEqual(1),
    test_soldier.die(),
    expect(fakeTile.length).toEqual(0)
  ])
])
