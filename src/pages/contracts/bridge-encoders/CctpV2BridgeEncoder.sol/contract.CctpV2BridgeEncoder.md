# CctpV2BridgeEncoder
[Git Source](https://github.com/MakinaHQ/makina-x/blob/43737945b99e87740e2a58b7a320c78a5d628e4b/src/bridge-encoders/CctpV2BridgeEncoder.sol)

**Inherits:**
AccessManagedUpgradeable, [ICctpV2BridgeEncoder](/contracts/interfaces/ICctpV2BridgeEncoder.sol/interface.ICctpV2BridgeEncoder.md)


## Constants
### MAINNET_CHAIN_ID

```solidity
uint256 private constant MAINNET_CHAIN_ID = 1
```


### MAINNET_CCTP_DOMAIN

```solidity
uint32 private constant MAINNET_CCTP_DOMAIN = 0
```


### FORWARD_HOOK_DATA

```solidity
bytes private constant FORWARD_HOOK_DATA = hex"636374702d666f72776172640000000000000000000000000000000000000000"
```


### cctpV2TokenMessenger
Address of the CCTP TokenMessengerV2


```solidity
address public immutable cctpV2TokenMessenger
```


## State Variables
### _evmToCctpId

```solidity
mapping(uint256 evmChainId => uint32 cctpDomain) private _evmToCctpId
```


### _cctpToEvmId

```solidity
mapping(uint32 cctpDomain => uint256 evmChainId) private _cctpToEvmId
```


## Functions
### constructor


```solidity
constructor(address _cctpV2TokenMessenger) ;
```

### initialize


```solidity
function initialize(address initialAuthority) external initializer;
```

### getCctpDomain

EVM chain ID => CCTP domain


```solidity
function getCctpDomain(uint256 evmChainId) public view override returns (uint32);
```

### getBridgeTransferData

Returns targets, value, and calldata to execute a bridge transfer.

Intended to be called only by a MakinaXModule instance, from which implementations may read caller state via `msg.sender`.


```solidity
function getBridgeTransferData(IBridgeComponent.BridgeOrder calldata order)
    external
    view
    override
    returns (address, address, uint256, bytes memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`order`|`IBridgeComponent.BridgeOrder`|The bridge transfer params.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|approvalTarget The address of the approval target.|
|`<none>`|`address`|executionTarget The address of the execution target.|
|`<none>`|`uint256`|value The value to pass along with the calldata.|
|`<none>`|`bytes`|cd The calldata to execute.|


### setCctpDomain

Associates an EVM chain ID with a CCTP domain in the contract storage.


```solidity
function setCctpDomain(uint256 evmChainId, uint32 cctpDomain) external override restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`evmChainId`|`uint256`|The EVM chain ID.|
|`cctpDomain`|`uint32`|The CCTP domain.|


