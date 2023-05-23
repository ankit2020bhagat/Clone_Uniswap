require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.17",
  // paths: {
  //   artifacts: '../app/my-app/constant/artifacts',
  // },
  networks: {
    hardhat: {
      chainId: 31337,
    },
    //   mumbai: {
    //     url: process.env.MUMBAI_URL,
    //     accounts: [process.env.PRIVATE_KEY],
    //   },
    // },
    // etherscan: {
    //   apiKey: process.env.POLYGON_API_KEY
  },
};
