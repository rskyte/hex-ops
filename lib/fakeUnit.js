class FakeUnit {
  constructor(size, atk = 0) {
    this.size = size
    this.atk = atk
  }

  attack() {
    return(this.atk)
  }

  defendAgainst() {
    return(this.atk)
  }

}
