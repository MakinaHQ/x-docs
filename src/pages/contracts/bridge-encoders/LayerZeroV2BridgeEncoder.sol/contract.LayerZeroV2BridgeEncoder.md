# LayerZeroV2BridgeEncoder
[Git Source](https://github.com/MakinaHQ/makina-x/blob/43737945b99e87740e2a58b7a320c78a5d628e4b/src/bridge-encoders/LayerZeroV2BridgeEncoder.sol)

**Inherits:**
AccessManagedUpgradeable, [ILayerZeroV2BridgeEncoder](/contracts/interfaces/ILayerZeroV2BridgeEncoder.sol/interface.ILayerZeroV2BridgeEncoder.md)


## Constants
### EXECUTOR_LZRECEIVE_PREFIX

```solidity
bytes6 internal constant EXECUTOR_LZRECEIVE_PREFIX = 0x000301001101
```


## State Variables
### isOftRegistered

```solidity
mapping(address oft => bool isRegistered) public isOftRegistered
```


### _evmToLzId

```solidity
mapping(uint256 evmChainId => uint32 lzEndpointId) private _evmToLzId
```


### _lzToEvmId

```solidity
mapping(uint32 lzEndpointId => uint256 evmChainId) private _lzToEvmId
```


## Functions
### constructor


```solidity
constructor() ;
```

### initialize


```solidity
function initialize(address initialAuthority) external initializer;
```

### getLzEndpointId

EVM chain ID => LayerZero endpoint ID


```solidity
function getLzEndpointId(uint256 evmChainId) public view override returns (uint32);
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


### setLzEndpointId

Associates an EVM chain ID with a LayerZero endpoint ID in the contract storage.


```solidity
function setLzEndpointId(uint256 evmChainId, uint32 lzEndpointId) external override restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`evmChainId`|`uint256`|The EVM chain ID.|
|`lzEndpointId`|`uint32`|The LayerZero endpoint ID.|


### addOft

Registers an OFT contract.


```solidity
function addOft(address oft) external override restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`oft`|`address`|The address of the OFT.|


### removeOft

Unregisters an OFT contract.


```solidity
function removeOft(address oft) external override restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`oft`|`address`|The address of the OFT.|


### _getLzReceiveOption

Internal logic to craft lzReceive option.


```solidity
function _getLzReceiveOption(uint128 _lzReceiveGas) internal pure returns (bytes memory);
```

