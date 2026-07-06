# BridgeComponent
[Git Source](https://github.com/MakinaHQ/makina-x/blob/43737945b99e87740e2a58b7a320c78a5d628e4b/src/module-components/BridgeComponent.sol)

**Inherits:**
[IBridgeComponent](/contracts/interfaces/IBridgeComponent.sol/interface.IBridgeComponent.md)


## Constants
### MAX_BPS
Full scale value in basis points


```solidity
uint256 private constant MAX_BPS = 10_000
```


## State Variables
### _maxBridgeLossBps

```solidity
mapping(uint16 bridgeId => uint256 maxBridgeLossBps) private _maxBridgeLossBps
```


### _isWhitelistedRecipient

```solidity
mapping(uint256 foreignChainId => mapping(address recipient => bool isWhitelisted)) private _isWhitelistedRecipient
```


### _lastGuardedBridgeOutTimestamps

```solidity
mapping(uint16 bridgeId => uint256 timestamp) private _lastGuardedBridgeOutTimestamps
```


### bridgeCooldownDuration
Cooldown duration (in seconds) for bridge transfers while in FENCED or WALLED mode.


```solidity
uint256 public bridgeCooldownDuration
```


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

### _sendOutBridgeTransfer


```solidity
function _sendOutBridgeTransfer(IBridgeComponent.BridgeOrder calldata order, address encoder, bool guarded)
    internal;
```

### _setMaxBridgeLossBps

Internal logic to set the maximum allowed relative value loss for transfers via a given bridge.


```solidity
function _setMaxBridgeLossBps(uint16 bridgeId, uint256 newMaxBridgeLossBps) internal;
```

### _setBridgeCooldownDuration

Internal logic to set the cooldown duration for bridge transfers.


```solidity
function _setBridgeCooldownDuration(uint256 newBridgeCooldownDuration) internal;
```

### _addRecipient

Internal logic to add a whitelisted recipient for bridge transfer to a given foreign chain.


```solidity
function _addRecipient(uint256 foreignChainId, address recipient) internal;
```

### _removeRecipient

Internal logic to remove a whitelisted recipient for bridge transfer to a given foreign chain.


```solidity
function _removeRecipient(uint256 foreignChainId, address recipient) internal;
```

### _checkAndSetCooldown

Checks cooldown for a given bridge and updates its last guarded outgoing transfer timestamp.


```solidity
function _checkAndSetCooldown(uint16 bridgeId) internal;
```

