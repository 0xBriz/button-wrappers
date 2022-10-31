// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.4;

interface IWETH9 {
    function deposit() external payable;

    function withdraw(uint256 wad) external;

    function balanceOf(address) external view returns (uint256);

    function totalSupply() external view returns (uint256);

    function approve(address guy, uint256 wad) external returns (bool);

    function transfer(address dst, uint256 wad) external returns (bool);

    function transferFrom(
        address src,
        address dst,
        uint256 wad
    ) external returns (bool);
}
