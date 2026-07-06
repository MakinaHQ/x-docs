# AcrossV4BridgeEncoder
[Git Source](https://github.com/MakinaHQ/makina-x/blob/43737945b99e87740e2a58b7a320c78a5d628e4b/src/bridge-encoders/AcrossV4BridgeEncoder.sol)

**Inherits:**
AccessManagedUpgradeable, [IAcrossV4BridgeEncoder](/contracts/interfaces/IAcrossV4BridgeEncoder.sol/interface.IAcrossV4BridgeEncoder.md)


## Constants
### acrossV4SpokePool

```solidity
address public immutable acrossV4SpokePool
```


## State Variables
### _foreignTokens

```solidity
mapping(address localToken => mapping(uint256 chainId => EnumerableSet.AddressSet foreignTokens)) private
    _foreignTokens
```


## Functions
### constructor


```solidity
constructor(address _acrossV4SpokePool) ;
```

### initialize


```solidity
function initialize(address initialAuthority) external initializer;
```

### isRouteRegistered

Returns whether a bridge transfer route is registered.


```solidity
function isRouteRegistered(address inputToken, uint256 foreignChainId, address outputToken)
    public
    view
    override
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


### addRoute

Registers a transfer route.


```solidity
function addRoute(address inputToken, uint256 foreignChainId, address outputToken) external override restricted;
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
function removeRoute(address inputToken, uint256 foreignChainId, address outputToken) external override restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`inputToken`|`address`|The token to be sent from the source chain.|
|`foreignChainId`|`uint256`|The destination chain ID.|
|`outputToken`|`address`|The token to be received on the destination chain.|
