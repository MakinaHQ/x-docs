# ISwapComponent
[Git Source](https://github.com/MakinaHQ/makina-x/blob/43737945b99e87740e2a58b7a320c78a5d628e4b/src/interfaces/ISwapComponent.sol)


## Functions
### maxSwapLossBps

Max allowed value loss (in basis points) for token swaps while in FENCED or WALLED mode.


```solidity
function maxSwapLossBps() external view returns (uint256);
```

### swapCooldownDuration

Cooldown duration (in seconds) for token swaps while in FENCED or WALLED mode.


```solidity
function swapCooldownDuration() external view returns (uint256);
```

### swapFeeRate

Swap fee rate, 1e18 = 100%.


```solidity
function swapFeeRate() external view returns (uint256);
```

### getSwapperTargets

Returns approval and execution targets for a given swapper ID.


```solidity
function getSwapperTargets(uint16 swapperId) external view returns (address approvalTarget, address executionTarget);
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


### swap

Swaps tokens on behalf of the Safe using a given swapper.


```solidity
function swap(SwapOrder calldata order) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`order`|`SwapOrder`|The swap params.|


### setMaxSwapLossBps

Sets the maximum allowed relative value loss for token swaps while in FENCED or WALLED mode.


```solidity
function setMaxSwapLossBps(uint256 newMaxSwapLossBps) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newMaxSwapLossBps`|`uint256`|The new maximum value loss in basis points.|


### setSwapCooldownDuration

Sets the cooldown duration for token swaps while in FENCED or WALLED mode.


```solidity
function setSwapCooldownDuration(uint256 newSwapCooldownDuration) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newSwapCooldownDuration`|`uint256`|The new cooldown duration in seconds.|


### setSwapFeeRate

Sets the swap fee rate.


```solidity
function setSwapFeeRate(uint256 newSwapFeeRate) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newSwapFeeRate`|`uint256`|The new swap fee rate, 1e18 = 100%.|


### setSwapperTargets

Sets approval and execution targets for a given swapper ID.


```solidity
function setSwapperTargets(uint16 swapperId, address approvalTarget, address executionTarget) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`swapperId`|`uint16`|The swapper ID.|
|`approvalTarget`|`address`|The approval target.|
|`executionTarget`|`address`|The execution target.|


## Events
### MaxSwapLossBpsChanged

```solidity
event MaxSwapLossBpsChanged(uint256 oldMaxSwapLossBps, uint256 newMaxSwapLossBps);
```

### Swap

```solidity
event Swap(
    uint16 indexed swapperId,
    address indexed inputToken,
    address indexed outputToken,
    uint256 inputAmount,
    uint256 outputAmount
);
```

### SwapCooldownDurationChanged

```solidity
event SwapCooldownDurationChanged(uint256 oldSwapCooldownDuration, uint256 newSwapCooldownDuration);
```

### SwapFeeRateChanged

```solidity
event SwapFeeRateChanged(uint256 oldSwapFeeRate, uint256 newSwapFeeRate);
```

### SwapperTargetsSet

```solidity
event SwapperTargetsSet(uint16 indexed swapperId, address approvalTarget, address executionTarget);
```

## Structs
### SwapperTargets

```solidity
struct SwapperTargets {
    address approvalTarget;
    address executionTarget;
}
```

### SwapOrder
Generic swap params.


```solidity
struct SwapOrder {
    uint16 swapperId;
    bytes data;
    address inputToken;
    address outputToken;
    uint256 inputAmount;
    uint256 minOutputAmount;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`swapperId`|`uint16`|The ID of the external swap protocol.|
|`data`|`bytes`|The swap calldata to pass to the swapper's execution target.|
|`inputToken`|`address`|The input token.|
|`outputToken`|`address`|The output token.|
|`inputAmount`|`uint256`|The input amount.|
|`minOutputAmount`|`uint256`|The minimum expected output amount.|

