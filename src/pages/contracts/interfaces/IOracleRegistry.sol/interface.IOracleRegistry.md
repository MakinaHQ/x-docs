# IOracleRegistry
[Git Source](https://github.com/MakinaHQ/makina-x/blob/43737945b99e87740e2a58b7a320c78a5d628e4b/src/interfaces/IOracleRegistry.sol)

An aggregator of Chainlink price feeds that prices tokens in a reference currency (e.g., USD) using up to two feeds.
If a direct feed between a base token and the reference currency does not exist, it combines two feeds to compute the price.
Example:
To price Token A in Token B:
- If a feed for Token A -> Reference Currency exists, the registry uses that feed.
- If Token B lacks a direct feed to the Reference Currency, but feeds for Token B -> Intermediate Token and
Intermediate Token -> Reference Currency exist, the registry combines these feeds to derive the price.
- Finally, the price Token A -> Token B is calculated using both tokens' individual prices in the reference currency.


## Functions
### getFeedStaleThreshold

Feed => Staleness threshold in seconds


```solidity
function getFeedStaleThreshold(address feed) external view returns (uint256);
```

### isFeedRouteRegistered

Token => Is feed route registered for the token


```solidity
function isFeedRouteRegistered(address token) external view returns (bool);
```

### getFeedRoute

Gets the price feed route for a given token.


```solidity
function getFeedRoute(address token) external view returns (address, address);
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
function getReferencePrice(address baseToken) external view returns (uint256);
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
function getPrice(address baseToken, address quoteToken) external view returns (uint256);
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


### setFeedRoute

Sets the price feed route for a given token.

Both feeds, if set, must be Chainlink-interface-compliant.
The combination of feed1 and feed2 must be able to price the token in the reference currency.
If feed2 is set to address(0), the token price in the reference currency is assumed to be returned by feed1.


```solidity
function setFeedRoute(
    address token,
    address feed1,
    uint256 stalenessThreshold1,
    address feed2,
    uint256 stalenessThreshold2
) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`address`|The address of the token for which the price feed route is set.|
|`feed1`|`address`|The address of the first price feed.|
|`stalenessThreshold1`|`uint256`|The staleness threshold for the first price feed.|
|`feed2`|`address`|The address of the second price feed. Can be set to address(0).|
|`stalenessThreshold2`|`uint256`|The staleness threshold for the second price feed. Ignored if feed2 is address(0).|


### clearFeedRoute

Clears the price feed route for a given token.

Staleness thresholds for the route's feeds are preserved, as the feeds may be used by other routes.


```solidity
function clearFeedRoute(address token) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`address`|The address of the token for which the price feed route is cleared.|


### setFeedStaleThreshold

Sets the price staleness threshold for a given feed.


```solidity
function setFeedStaleThreshold(address feed, uint256 newThreshold) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`feed`|`address`|The address of the price feed.|
|`newThreshold`|`uint256`|The value of staleness threshold.|


## Events
### FeedRouteCleared

```solidity
event FeedRouteCleared(address indexed token);
```

### FeedRouteRegistered

```solidity
event FeedRouteRegistered(address indexed token, address indexed feed1, address indexed feed2);
```

### FeedStaleThresholdChanged

```solidity
event FeedStaleThresholdChanged(address indexed feed, uint256 oldThreshold, uint256 newThreshold);
```

## Structs
### FeedRoute

```solidity
struct FeedRoute {
    address feed1;
    address feed2;
}
```

