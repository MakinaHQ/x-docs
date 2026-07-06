# IAcrossV4BridgeEncoder
[Git Source](https://github.com/MakinaHQ/makina-x/blob/43737945b99e87740e2a58b7a320c78a5d628e4b/src/interfaces/IAcrossV4BridgeEncoder.sol)

**Inherits:**
[IBridgeEncoder](/contracts/interfaces/IBridgeEncoder.sol/interface.IBridgeEncoder.md)


## Functions
### acrossV4SpokePool

Address of the Across SpokePool.


```solidity
function acrossV4SpokePool() external view returns (address);
```

### isRouteRegistered

Returns whether a bridge transfer route is registered.


```solidity
function isRouteRegistered(address inputToken, uint256 foreignChainId, address outputToken)
    external
    view
    returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`inputToken`|`address`|The token to be sent from the source chain.|
|`foreignChainId`|`uint256`|The destination chain ID.|
|`outputToken`|`address`|The token to be received on the destination chain.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|True if the route is registered, false otherwise.|


### addRoute

Registers a transfer route.


```solidity
function addRoute(address inputToken, uint256 foreignChainId, address outputToken) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`inputToken`|`address`|The token to be sent from the source chain.|
|`foreignChainId`|`uint256`|The destination chain ID.|
|`outputToken`|`address`|The token to be received on the destination chain.|


### removeRoute

Unregisters a transfer route.


```solidity
function removeRoute(address inputToken, uint256 foreignChainId, address outputToken) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`inputToken`|`address`|The token to be sent from the source chain.|
|`foreignChainId`|`uint256`|The destination chain ID.|
|`outputToken`|`address`|The token to be received on the destination chain.|


## Events
### RouteAdded

```solidity
event RouteAdded(address indexed inputToken, uint256 indexed foreignChainId, address indexed outputToken);
```

### RouteRemoved

```solidity
event RouteRemoved(address indexed inputToken, uint256 indexed foreignChainId, address indexed outputToken);
```

