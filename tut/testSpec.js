beforeEach(function(){
	x = 1
})

describe("Tut Tester",[
	it("passing tests",[
		expect(1).toEqual(1),
		dont(expect(1).toEqual(2)),
		expect([4,1,2]).toContain(1)
	]),
	it("failing tests",[
		expect(1).toEqual(2),
		dont(expect(1).toEqual(1)),
		expect([1,2]).toContain(4)
	]),
	it("changes x to 2",[
		x = 2,
		expect(x).toEqual(2)
	]),
	it("expects x to be back to 1",[
		expect(x).toEqual(1)
	])
]);