const { expect } = require("chai")

describe("MyContract", () => {
  it("should return its name", async () => {
    const name = "AAA"
    const MyContract = await ethers.getContractFactory("MyContract")
    const myContract = await MyContract.deploy(name)
    //await myContract.deployed()

    expect(await myContract.getName()).to.equal(name)
  })
  it("should change its name when requested", async () => {
    const name = "AAA"
    const MyContract = await ethers.getContractFactory("MyContract")
    const myContract = await MyContract.deploy("a name")

    myContract.changeName(name)
    expect(await myContract.getName()).to.equal(name)
  })
})
