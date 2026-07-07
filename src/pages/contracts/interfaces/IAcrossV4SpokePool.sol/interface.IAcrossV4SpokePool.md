# IAcrossV4SpokePool
[Git Source](https://github.com/MakinaHQ/makina-x/blob/43737945b99e87740e2a58b7a320c78a5d628e4b/src/interfaces/IAcrossV4SpokePool.sol)


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

