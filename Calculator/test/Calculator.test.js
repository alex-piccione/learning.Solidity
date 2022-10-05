const { expect } = require("chai")
//require("ethers")

describe("Calculator", () => {
  //const calculator = await ethers.getContractFactory("Calculator").deply()
  const getCalculator = async () =>
    await (await ethers.getContractFactory("Calculator")).deploy()

  it("sum of two numbers", async () => {
    //const calculator = await getCalculator()
    const calculator = await (
      await ethers.getContractFactory("Calculator")
    ).deploy()
    expect(await calculator.sum(1, 2)).to.equal(3)
  })
})
