# FlashLoanModule
[Git Source](https://github.com/MakinaHQ/makina-x/blob/43737945b99e87740e2a58b7a320c78a5d628e4b/src/flash-loans/FlashLoanModule.sol)

**Inherits:**
[IFlashLoanModule](/contracts/interfaces/IFlashLoanModule.sol/interface.IFlashLoanModule.md)


## Constants
### EXPECTED_DATA_HASH_SLOT

```solidity
bytes32 private constant EXPECTED_DATA_HASH_SLOT =
    0x5a3c23131f48fa65e051159c96653778099b9ec7df69c3ed6471d5a36605bd00
```


### moduleFactory
Address of the MakinaXModule factory.


```solidity
address public immutable moduleFactory
```


### morpho
Address of the Morpho contract.


```solidity
address public immutable morpho
```


## Functions
### constructor


```solidity
constructor(address _moduleFactory, address _morpho) ;
```

### requestFlashLoan

Requests a flash loan.


```solidity
function requestFlashLoan(FlashLoanRequest calldata request) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`request`|`FlashLoanRequest`|The request for the flash loan.|


### onMorphoFlashLoan


```solidity
function onMorphoFlashLoan(uint256 assets, bytes calldata data) external;
```

### _dispatchFlashLoanRequest

Dispatches the flash loan request to the appropriate provider.


```solidity
function _dispatchFlashLoanRequest(FlashLoanRequest calldata request) internal;
```

### _requestMorphoFlashLoan

Requests a flash loan from Morpho.


```solidity
function _requestMorphoFlashLoan(FlashLoanRequest calldata request) internal;
```

### _setExpectedDataHash

Sets the expected data hash in transient storage to be used for validation in the flash loan callback.


```solidity
function _setExpectedDataHash(bytes memory data) internal;
```

### _consumeExpectedDataHash

Checks if the expected data hash matches the hash of the provided data and clears the expected data hash from transient storage.


```solidity
function _consumeExpectedDataHash(bytes memory data) internal;
```

### _handleFlashLoanCallback

Delegates management of flash-loaned funds to the specified MakinaXModule.


```solidity
function _handleFlashLoanCallback(
    address makinaXModule,
    IWeirollComponent.Instruction memory instruction,
    address token,
    uint256 amount
) internal;
```
