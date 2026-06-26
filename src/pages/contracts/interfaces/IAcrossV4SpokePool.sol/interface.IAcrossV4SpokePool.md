# IAcrossV4SpokePool
[Git Source](https://github.com/MakinaHQ/makina-lite/blob/626b74d20627999f2962c61cb40e282d31cd7f23/src/interfaces/IAcrossV4SpokePool.sol)


## Functions
### depositV3Now


```solidity
function depositV3Now(
    address depositor,
    address recipient,
    address inputToken,
    address outputToken,
    uint256 inputAmount,
    uint256 outputAmount,
    uint256 destinationChainId,
    address exclusiveRelayer,
    uint32 fillDeadlineOffset,
    uint32 exclusivityParameter,
    bytes calldata message
) external payable;
```

