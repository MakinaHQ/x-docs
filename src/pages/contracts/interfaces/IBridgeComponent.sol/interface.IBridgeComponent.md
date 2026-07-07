# IBridgeComponent
[Git Source](https://github.com/MakinaHQ/makina-x/blob/43737945b99e87740e2a58b7a320c78a5d628e4b/src/interfaces/IBridgeComponent.sol)


## Functions
### getMaxBridgeLossBps

Bridge ID => Max allowed value loss in basis points for transfers via this bridge while in FENCED or WALLED mode.


```solidity
function getMaxBridgeLossBps(uint16 bridgeId) external view returns (uint256);
```

### isWhitelistedRecipient

Foreign Chain ID => Recipient => Whitelisting status while in FENCED or WALLED mode.


```solidity
function isWhitelistedRecipient(uint256 foreignChainId, address recipient) external view returns (bool);
```

### bridgeCooldownDuration

Cooldown duration (in seconds) for bridge transfers while in FENCED or WALLED mode.


```solidity
function bridgeCooldownDuration() external view returns (uint256);
```

### sendOutBridgeTransfer

Executes an outgoing bridge transfer.


```solidity
function sendOutBridgeTransfer(BridgeOrder calldata order) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`order`|`BridgeOrder`|The bridge transfer params.|


### setMaxBridgeLossBps

Sets the maximum allowed relative value loss for transfers via this bridge while in FENCED or WALLED mode.


```solidity
function setMaxBridgeLossBps(uint16 bridgeId, uint256 newMaxBridgeLossBps) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`bridgeId`|`uint16`|The ID of the bridge.|
|`newMaxBridgeLossBps`|`uint256`|The new maximum value loss in basis points.|


### setBridgeCooldownDuration

Sets the cooldown duration for bridge transfers while in FENCED or WALLED mode.


```solidity
function setBridgeCooldownDuration(uint256 newBridgeCooldownDuration) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newBridgeCooldownDuration`|`uint256`|The new cooldown duration in seconds.|


### addRecipient

Adds a whitelisted recipient for bridge transfer to a given foreign chain while in FENCED or WALLED mode.


```solidity
function addRecipient(uint256 foreignChainId, address recipient) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`foreignChainId`|`uint256`|The foreign chain ID.|
|`recipient`|`address`|The address of the recipient.|


### removeRecipient

Removes a whitelisted recipient for bridge transfer to a given foreign chain while in FENCED or WALLED mode.


```solidity
function removeRecipient(uint256 foreignChainId, address recipient) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`foreignChainId`|`uint256`|The foreign chain ID.|
|`recipient`|`address`|The address of the recipient.|


## Events
### BridgeTransferRecipientAdded

```solidity
event BridgeTransferRecipientAdded(uint256 indexed foreignChainId, address indexed recipient);
```

### BridgeTransferRecipientRemoved

```solidity
event BridgeTransferRecipientRemoved(uint256 indexed foreignChainId, address indexed recipient);
```

### BridgeCooldownDurationChanged

```solidity
event BridgeCooldownDurationChanged(uint256 oldBridgeCooldownDuration, uint256 newBridgeCooldownDuration);
```

### MaxBridgeLossBpsChanged

```solidity
event MaxBridgeLossBpsChanged(
    uint16 indexed bridgeId, uint256 indexed oldMaxBridgeLossBps, uint256 indexed newMaxBridgeLossBps
);
```

## Structs
### BridgeOrder
Generic bridge transfer params.


```solidity
struct BridgeOrder {
    uint16 bridgeId;
    uint256 destinationChainId;
    address recipient;
    address inputToken;
    uint256 inputAmount;
    uint256 minOutputAmount;
    bytes extraData;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`bridgeId`|`uint16`|The ID of the bridge.|
|`destinationChainId`|`uint256`|The destination EVM chain ID.|
|`recipient`|`address`|The address of the recipient.|
|`inputToken`|`address`|The address of the input token.|
|`inputAmount`|`uint256`|The amount of input token to bridge.|
|`minOutputAmount`|`uint256`|The minimum amount of output token expected.|
|`extraData`|`bytes`|Extra data specific to each bridge integration.|

