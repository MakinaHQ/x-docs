# IFlashLoanModule
[Git Source](https://github.com/MakinaHQ/makina-x/blob/43737945b99e87740e2a58b7a320c78a5d628e4b/src/interfaces/IFlashLoanModule.sol)

**Inherits:**
[IMorphoFlashLoanCallback](/contracts/interfaces/IMorphoFlashLoanCallback.sol/interface.IMorphoFlashLoanCallback.md)


## Functions
### requestFlashLoan

Requests a flash loan.


```solidity
function requestFlashLoan(FlashLoanRequest calldata request) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`request`|`FlashLoanRequest`|The request for the flash loan.|


## Structs
### FlashLoanRequest
Generic flash loan params.


```solidity
struct FlashLoanRequest {
    address taker;
    FlashLoanProvider provider;
    IWeirollComponent.Instruction instruction;
    address token;
    uint256 amount;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`taker`|`address`|The address of the contract that will receive the flash loan.|
|`provider`|`FlashLoanProvider`|The provider of the flash loan.|
|`instruction`|`IWeirollComponent.Instruction`|The instruction to execute.|
|`token`|`address`|The token to borrow.|
|`amount`|`uint256`|The amount to borrow.|

## Enums
### FlashLoanProvider
The enum for the flash loan providers.

Deprecated entries are intentionally preserved to maintain stable enum indexing
and avoid breaking compatibility with Makina integrations.


```solidity
enum FlashLoanProvider {
    DEPRECATED_0,
    DEPRECATED_1,
    DEPRECATED_2,
    MORPHO,
    DEPRECATED_3
}
```

