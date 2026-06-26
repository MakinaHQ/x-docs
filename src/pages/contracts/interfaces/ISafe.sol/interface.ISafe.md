# ISafe
[Git Source](https://github.com/MakinaHQ/makina-lite/blob/626b74d20627999f2962c61cb40e282d31cd7f23/src/interfaces/ISafe.sol)


## Functions
### execTransactionFromModuleReturnData


```solidity
function execTransactionFromModuleReturnData(address to, uint256 value, bytes memory data, Operation operation)
    external
    returns (bool success, bytes memory returnData);
```

## Enums
### Operation

```solidity
enum Operation {
    Call,
    DelegateCall
}
```

