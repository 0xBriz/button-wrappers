import './test/utils/loadDotEnv'
import { HardhatUserConfig } from 'hardhat/config'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@openzeppelin/hardhat-upgrades'
import '@nomiclabs/hardhat-etherscan'
import 'solidity-coverage'
import 'hardhat-gas-reporter'
import './tasks'

export default {
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  networks: {
    goerli: {
      url: process.env.GOERLI_RPC,
      accounts:
        process.env.OPERATOR_KEY !== undefined
          ? [process.env.OPERATOR_KEY]
          : [],
    },
    bsc: {
      url: process.env.BSC_RPC,
      accounts:
        process.env.OPERATOR_KEY !== undefined
          ? [process.env.OPERATOR_KEY]
          : [],
    },
  },
  solidity: {
    compilers: [
      {
        version: '0.8.4',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  mocha: {
    timeout: 1000000,
  },
  gasReporter: {
    currency: 'USD',
    enabled: process.env.REPORT_GAS ? true : false,
    excludeContracts: ['mocks/'],
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },
} as HardhatUserConfig
