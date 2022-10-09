const Token = artifacts.require("Token");
const TokenSale = artifacts.require("TokenSale");

module.exports = function (deployer) {
  deployer.deploy(Token).then(() => {
    return deployer.deploy(TokenSale, Token.address);
  });
};
