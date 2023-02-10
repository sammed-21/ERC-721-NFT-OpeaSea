const { ethers } = require("hardhat");
require("dotenv").config();
const cryptobeetlesJSON = require("../artifacts/contracts/CryptoBeetles.sol/CryptoBeetles.json");
async function main() {
  const abi = cryptobeetlesJSON.abi;
  //to connect with our smart contract which is in blockchain
  //provider infura create a wallet instance inorder to sign a transaction

  const provider = new ethers.providers.InfuraProvider(
    "goerli",
    process.env.GOERLI_PROJECT_ID
  );
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const signer = wallet.connect(provider);
  const cryptoBeetles = new ethers.Contract(
    process.env.CONTRACT_ADDRESS,
    abi,
    signer
  );
  await cryptoBeetles.mint(
    "https://ipfs.io/ipfs/QmcKvCpbrg8cJxEwbh6wbKLdSkdvfWcKj8ntdb54g242QY"
  );
  console.log("nft minted");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// we are now deploying the nft using contract abi not direcly
//need refrence to a contract which is already been deployed to the network
