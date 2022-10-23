const Token = artifacts.require("eXRD")

module.exports = async function (deployer, network, accounts) {
  deployer.then(async () => {
    const depositAddress = accounts[0] // == msg.sender
    console.log(`2_Token.js depositAddress (accounts[0]): ${depositAddress}`)

    await deployer.deploy(Token, depositAddress, 10 * 1000000000, { from: depositAddress })
  })
}
