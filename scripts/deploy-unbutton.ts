import { BigNumber } from 'ethers'
import { ethers, upgrades } from 'hardhat'

export async function deployUnbuttonWrapper(
  underlying_: string,
  name_: string,
  symbol_: string,
  initialRate: BigNumber,
) {
  try {
    const UnbuttonToken = await ethers.getContractFactory('UnbuttonToken')
    const ct = await upgrades.deployProxy(UnbuttonToken, [
      underlying_,
      name_,
      symbol_,
      initialRate,
    ])
    await ct.deployed()
    console.log('UnbuttonToken deployed to: ', ct.address)
  } catch (error) {
    console.error(error)
    process.exitCode = 1
  }
}
