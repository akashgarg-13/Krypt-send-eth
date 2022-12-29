require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli:{
      url:' https://eth-goerli.g.alchemy.com/v2/Zg8KZkxP8D_gaBGvf9q5CnFUhoLoh41j',
      accounts:['bba4c8fc9e50ac0b5a28564b15271e739ff9f9362f0d03b7218a04bd225839e5']
    }
  }
};


// https://eth-goerli.g.alchemy.com/v2/Zg8KZkxP8D_gaBGvf9q5CnFUhoLoh41j
// Zg8KZkxP8D_gaBGvf9q5CnFUhoLoh41j
