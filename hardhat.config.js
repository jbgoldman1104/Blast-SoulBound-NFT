require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-chai-matchers");
require("hardhat-gas-reporter");


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const pv = "3f91d5" + process.env.PRIVATE_KEY;

module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.5.16',
      },
      {
        version: '0.6.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 999999,
          },
        },
      },
      {
        version: '0.8.12',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.8.20',
      },
    ]
  },
  defaultNetwork: "Sepolia",
  networks: {
    Sepolia: {
      chainId: 11155111,
      url: "https://rpc.sepolia.org",
      accounts: [pv],
      // gasPrice: 3000000000
    },
    Blast: {
      chainId: 81457,
      url: "https://rpc.blast.io",
      accounts: [pv],
      // gasPrice: 3000000000
    },
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
  gasReporter: {
    enabled: true,
  },
  etherscan: {
    apiKey: {
      Sepolia: "U5ATJJGV4BY3Y35A8P2FHSHR23783GEE9J",
      Blast: "U5ATJJGV4BY3Y35A8P2FHSHR23783GEE9J",
    },
    customChains: [
      {
        network: "Sepolia",
        chainId: 11155111,
        urls: {
          apiURL: "https://api-sepolia.etherscan.io/api",
          browserURL: "https://sepolia.etherscan.io/"
        }
      },
      {
        network: "Blast",
        chainId: 81457,
        urls: {
          apiURL: "https://api.routescan.io/v2/network/mainnet/evm/81457/etherscan",
          browserURL: "https://blastexplorer.io"
        }
      },
    ]
  },
};
