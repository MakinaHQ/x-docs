# ILayerZeroV2BridgeEncoder
[Git Source](https://github.com/MakinaHQ/makina-x/blob/43737945b99e87740e2a58b7a320c78a5d628e4b/src/interfaces/ILayerZeroV2BridgeEncoder.sol)

**Inherits:**
[IBridgeEncoder](/contracts/interfaces/IBridgeEncoder.sol/interface.IBridgeEncoder.md)


## Functions
### getLzEndpointId

EVM chain ID => LayerZero endpoint ID


```solidity
function getLzEndpointId(uint256 evmChainId) external view returns (uint32);
```

### isOftRegistered

OFT => Whether the OFT is registered


```solidity
function isOftRegistered(address oft) external view returns (bool);
```

### setLzEndpointId

Associates an EVM chain ID with a LayerZero endpoint ID in the contract storage.


```solidity
function setLzEndpointId(uint256 evmChainId, uint32 lzEndpointId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`evmChainId`|`uint256`|The EVM chain ID.|
|`lzEndpointId`|`uint32`|The LayerZero endpoint ID.|


### addOft

Registers an OFT contract.


```solidity
function addOft(address oft) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`oft`|`address`|The address of the OFT.|


### removeOft

Unregisters an OFT contract.


```solidity
function removeOft(address oft) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`oft`|`address`|The address of the OFT.|


## Events
### LzEndpointIdRegistered

```solidity
event LzEndpointIdRegistered(uint256 indexed evmChainId, uint32 indexed lzEndpointId);
```

### OftAdded

```solidity
event OftAdded(address indexed oft);
```

### OftRemoved

```solidity
event OftRemoved(address indexed oft);
```
