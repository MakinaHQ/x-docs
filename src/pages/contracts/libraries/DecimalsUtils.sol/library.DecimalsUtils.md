# DecimalsUtils
[Git Source](https://github.com/MakinaHQ/makina-x/blob/43737945b99e87740e2a58b7a320c78a5d628e4b/src/libraries/DecimalsUtils.sol)


## Constants
### REFERENCE_CURRENCY_DECIMALS
Decimals used for the reference currency.


```solidity
uint8 internal constant REFERENCE_CURRENCY_DECIMALS = 18
```


### MIN_DECIMALS
Supported decimals range for assets


```solidity
uint8 private constant MIN_DECIMALS = 6
```


### MAX_DECIMALS

```solidity
uint8 private constant MAX_DECIMALS = 18
```


## Functions
### _checkDecimals

Checks that asset exposes decimals() and that it is within the supported range.


```solidity
function _checkDecimals(address asset) internal view;
```

