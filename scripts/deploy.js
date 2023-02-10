// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");

async function main() {
  const CryptoBeetles = await ethers.getContractFactory("CryptoBeetles");
  const cryptobeetles = await CryptoBeetles.deploy("CryptoBeetles", "CbETH");

  try {
    await cryptobeetles.deployed();
    console.log(`contract succesfully deployed ${cryptobeetles.address}`);
    // await mintNFT();
  } catch (err) {
    console.log(err);
  }
  // const mintNFT = async () => {
  try {
    const newItemId = await cryptobeetles.mint(
      "https://ipfs.io/ipfs/QmQRV3uAbvxibuXcHEeboihqhjUMqoDH81cQHam8ZK89Fr"
    );
    console.log(`nft minted successfully :: ${newItemId}`);
  } catch (err) {
    console.log(err);
  }
  // };
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

///
// MAIN
// here i am deploying the contract and create immediata instance and call mint function
// in mint.js we need refrence to a contract which is already been deployed on the network
//
