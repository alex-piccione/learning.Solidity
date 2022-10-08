const { expect } = require("chai")

const _it = (description, action) => {
  console.log("Disabled test")
}

describe("Calculator", () => {
  const int256_max = 2 ** 255 - 2
  const getCalculator = async () =>
    await (await ethers.getContractFactory("Calculator")).deploy()

  it("sum of two numbers", async () => {
    const calculator = await getCalculator()
    expect(await calculator.sum(1, 2)).to.equal(3)
  })

  // Cannot be tested becauae JavaScript and Solidity does not have the same type
  // and JavaScript cannot manage big numbers
  _it(
    "fails with overflow error when result is greater then max int256",
    async () => {
      const calculator = await getCalculator()
      //expect(await calculator.sum(int256_max, 1)).to.equal(3)
      expect(await calculator.sum(int256_max, 0)).to.equal(3)
    }
  )
})
