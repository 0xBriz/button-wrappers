// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.4;

interface IFactory {
    function create(bytes calldata args) external returns (address instance);
}
