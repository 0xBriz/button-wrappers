import { parseUnits } from 'ethers/lib/utils'
import { deployUnbuttonWrapper } from './deploy-unbutton'

async function main() {
  const BNBX = '0x1bdd3Cf7F79cfB8EdbB955f20ad99211551BA275'
  // Get exchange rate from staking manager before deployment
  // Will need (INITIAL_DEPOSIT * initial rate) = 0.1? of BNBx in deployer wallet
  await deployUnbuttonWrapper(BNBX, 'Wrapped BNBx', 'wBNBx', parseUnits(''))
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
