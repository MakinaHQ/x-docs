# OracleRegistry
[Git Source](https://github.com/MakinaHQ/makina-x/blob/43737945b99e87740e2a58b7a320c78a5d628e4b/src/module-components/OracleRegistry.sol)

**Inherits:**
[IOracleRegistry](/contracts/interfaces/IOracleRegistry.sol/interface.IOracleRegistry.md)


## State Variables
### _feedRoutes

```solidity
mapping(address token => FeedRoute feedRoute) private _feedRoutes
```


### _feedStaleThreshold

```solidity
mapping(address feed => uint256 stalenessThreshold) private _feedStaleThreshold
```


## Functions
### getFeedStaleThreshold

Feed => Staleness threshold in seconds


```solidity
function getFeedStaleThreshold(address feed) external view override returns (uint256);
```

### isFeedRouteRegistered

Token => Is feed route registered for the token


```solidity
function isFeedRouteRegistered(address token) public view override returns (bool);
```

### getFeedRoute

Gets the price feed route for a given token.


```solidity
function getFeedRoute(address token) external view override returns (address, address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`address`|The address of the token for which the price feed route is requested.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|feed1 The address of the first price feed.|
|`<none>`|`address`|feed2 The address of the optional second price feed.|


### getReferencePrice

Returns the price of one unit of the given token in terms of the reference currency.


```solidity
function getReferencePrice(address baseToken) public view override returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`baseToken`|`address`|The address of the token for which the price is requested.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|price The price of baseToken denominated in the reference currency (expressed in 18 decimals).|


### getPrice

Returns the price of one unit of baseToken in terms of quoteToken.


```solidity
function getPrice(address baseToken, address quoteToken) public view override returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`baseToken`|`address`|The address of the token for which the price is requested.|
|`quoteToken`|`address`|The address of the token in which the price is quoted.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|price The price of baseToken denominated in quoteToken (expressed in quoteToken decimals).|


### _getFeedPrice

Returns the last price of the feed.

Reverts if the feed is stale or the price is negative.


```solidity
function _getFeedPrice(address feed) private view returns (uint256);
```

### _getFeedDecimals

Returns the number of decimals of the feed.

Returns 0 if the feed is not set.


```solidity
function _getFeedDecimals(address feed) private view returns (uint8);
```

### _setFeedRoute

Internal logic to set feed route for a token.


```solidity
function _setFeedRoute(
    address token,
    address feed1,
    uint256 stalenessThreshold1,
    address feed2,
    uint256 stalenessThreshold2
) internal;
```

### _clearFeedRoute

Internal logic to clear feed route for a token.


```solidity
function _clearFeedRoute(address token) internal;
```

### _setFeedStaleThreshold

Internal logic to set the price staleness threshold for a given feed.


```solidity
function _setFeedStaleThreshold(address feed, uint256 newThreshold) internal;
```

