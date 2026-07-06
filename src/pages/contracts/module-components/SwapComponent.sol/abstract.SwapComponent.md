# SwapComponent
[Git Source](https://github.com/MakinaHQ/makina-x/blob/43737945b99e87740e2a58b7a320c78a5d628e4b/src/module-components/SwapComponent.sol)

**Inherits:**
[ISwapComponent](/contracts/interfaces/ISwapComponent.sol/interface.ISwapComponent.md)


## Constants
### MAX_BPS
Full scale value in basis points.


```solidity
uint256 private constant MAX_BPS = 10_000
```


## State Variables
### _swapperTargets

```solidity
mapping(uint16 swapperId => SwapperTargets targets) private _swapperTargets
```


### _lastGuardedSwapTimestamp

```solidity
uint256 private _lastGuardedSwapTimestamp
```


### maxSwapLossBps
Max allowed value loss (in basis points) for token swaps while in FENCED or WALLED mode.


```solidity
uint256 public maxSwapLossBps
```


### swapCooldownDuration
Cooldown duration (in seconds) for token swaps while in FENCED or WALLED mode.


```solidity
uint256 public swapCooldownDuration
```


### swapFeeRate
Swap fee rate, 1e18 = 100%.


```solidity
uint256 public swapFeeRate
```


## Functions
### getSwapperTargets

Returns approval and execution targets for a given swapper ID.


```solidity
function getSwapperTargets(uint16 swapperId)
    external
    view
    returns (address approvalTarget, address executionTarget);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`swapperId`|`uint16`|The swapper ID.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`approvalTarget`|`address`|The approval target.|
|`executionTarget`|`address`|The execution target.|


### _swap

Internal logic to swap tokens using a given swapper.


```solidity
function _swap(SwapOrder calldata order, bool guarded) internal returns (uint256);
```

### _setMaxSwapLossBps

Internal logic to set the maximum allowed relative value loss for token swaps.


```solidity
function _setMaxSwapLossBps(uint256 newMaxSwapLossBps) internal;
```

### _setSwapCooldownDuration

Internal logic to set the swap cooldown duration.


```solidity
function _setSwapCooldownDuration(uint256 newSwapCooldownDuration) internal;
```

### _setSwapFeeRate

Internal logic to set the swap fee rate.


```solidity
function _setSwapFeeRate(uint256 newSwapFeeRate) internal;
```

### _setSwapperTargets

Internal logic to set approval and execution targets for a given swapper ID.


```solidity
function _setSwapperTargets(uint16 swapperId, address approvalTarget, address executionTarget) internal;
```

### _checkAndSetCooldown

Checks cooldown for swaps and updates the last guarded swap timestamp.


```solidity
function _checkAndSetCooldown() internal;
```

### _valueOf

Returns the value of `baseTokenAmount` of `baseToken` denominated in `quoteToken`, using the registered price route.


```solidity
function _valueOf(address baseToken, address quoteToken, uint256 baseTokenAmount)
    internal
    view
    virtual
    returns (uint256);
```

