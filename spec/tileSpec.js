class FakeUnit {
  constructor(size) {
    this.size = size
  }
}

testTile = new Tile

describe("Tile", [
  it("stores an array for units",[
  	expect((testTile.units) instanceof Array).toEqual(true)
  ]),

  it("has a default capacity of 6",[
    expect(testTile.CAPACITY).toEqual(6)
  ]),

  it("capacity can be set on construction of tile", [
    expect(new Tile(9).CAPACITY).toEqual(9)
  ])
])

describe("Tile#add", [
  it("can add a unit into the tile's unit array", [
    fakeUnit = new FakeUnit(1),
    testTile.add(fakeUnit),
    expect(testTile.units.includes(fakeUnit)).toEqual(true)
  ]),

  it("cannot add a unit that is too large into the tile's unit array", [
    fakeUnit = new FakeUnit(8),
    testTile.add(fakeUnit),
    expect(testTile.units.includes(fakeUnit)).toEqual(false)
  ])
])

describe("Tile#spaceLeft", [
  it("returns the amount of used space", [
    expect(new Tile().spaceLeft()).toEqual(6)
  ])
])

describe("Tile#canAccomodate", [
  it("returns true if the unit's size does not breach the capacity", [
    expect(testTile.canAccomodate(new FakeUnit(3))).toEqual(true)
  ]),

  it("returns false if the unit's size breaches the capacity", [
    expect(testTile.canAccomodate(new FakeUnit(10))).toEqual(false)
  ])
])
