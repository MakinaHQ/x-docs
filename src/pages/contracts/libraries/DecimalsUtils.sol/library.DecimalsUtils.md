# DecimalsUtils
[Git Source](https://github.com/MakinaHQ/makina-lite/blob/626b74d20627999f2962c61cb40e282d31cd7f23/src/libraries/DecimalsUtils.sol)


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

