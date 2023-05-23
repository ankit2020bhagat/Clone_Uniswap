const { ethers } = require("hardhat");

describe("Uniswap", function () {
  let exchangeContract, tokenContract;
  it("Contract Deployment", async function () {
    const tokenFactory = await ethers.getContractFactory("CryptoDevToken");
    const tokenContract = await tokenFactory.deploy();
    await tokenContract.deployed();
    console.log("Token Deplyed at :", tokenContract.address);
    const contractFactory = await ethers.getContractFactory("Exchange");
    const exchangeContract = await contractFactory.deploy(
      tokenContract.address
    );
    await exchangeContract.deployed();
    console.log("Contract deployed at :", exchangeContract.address);
    const tokenAmount = await exchangeContract.getReserve();
    console.log("Amount of reserv token amoount is ", tokenAmount.toString());
  });
});
