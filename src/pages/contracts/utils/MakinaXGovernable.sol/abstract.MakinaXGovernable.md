# MakinaXGovernable
[Git Source](https://github.com/MakinaHQ/makina-x/blob/43737945b99e87740e2a58b7a320c78a5d628e4b/src/utils/MakinaXGovernable.sol)

**Inherits:**
Initializable, [IMakinaXGovernable](/contracts/interfaces/IMakinaXGovernable.sol/interface.IMakinaXGovernable.md)


## State Variables
### safe
Address of the Safe.


```solidity
address public override safe
```


### provider
Address of the MakinaX service account.


```solidity
address public override provider
```


### isOperator

```solidity
mapping(address account => bool isOperator) public override isOperator
```


### isGuardian

```solidity
mapping(address account => bool isGuardian) public override isGuardian
```


### paused
True if the contract is paused by a guardian, false otherwise.


```solidity
bool public override paused
```


### suspendedByProvider
True if the contract is suspended by the provider, false otherwise.


```solidity
bool public override suspendedByProvider
```


### operatingMode
Current operating mode of the contract.


```solidity
OperatingMode public override operatingMode
```


## Functions
### __MakinaXGovernable_init


```solidity
function __MakinaXGovernable_init(address _safe, address _provider, OperatingMode _initialOperatingMode)
    internal
    onlyInitializing;
```

### onlySafe


```solidity
modifier onlySafe() ;
```

### onlyProvider


```solidity
modifier onlyProvider() ;
```

### onlyOperator


```solidity
modifier onlyOperator() ;
```

### onlyGuardian


```solidity
modifier onlyGuardian() ;
```

### whenOperational


```solidity
modifier whenOperational() ;
```

### setProvider

Sets the provider address.


```solidity
function setProvider(address newProvider) external override onlyProvider;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newProvider`|`address`|The address of the new provider.|


### addOperator

Adds a new operator.


```solidity
function addOperator(address newOperator) external override onlySafe;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newOperator`|`address`|The address of the new operator.|


### removeOperator

Removes an operator.


```solidity
function removeOperator(address operator) external override onlySafe;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`operator`|`address`|The address of the operator to remove.|


### addGuardian

Adds a new guardian.


```solidity
function addGuardian(address newGuardian) external override onlySafe;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newGuardian`|`address`|The address of the new guardian.|


### removeGuardian

Removes a guardian.


```solidity
function removeGuardian(address guardian) external override onlySafe;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`guardian`|`address`|The address of the guardian to remove.|


### setOperatingMode

Sets the operating mode.


```solidity
function setOperatingMode(OperatingMode newMode) external override onlySafe;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newMode`|`OperatingMode`|The operating mode to set.|


### suspend

Suspends operations. Used by the provider to enforce service restrictions.


```solidity
function suspend() external override onlyProvider;
```

### unsuspend

Restores operations after a provider suspension.


```solidity
function unsuspend() external override onlyProvider;
```

### pause

Pauses operations. Used by a guardian in case of emergency.


```solidity
function pause() external override onlyGuardian;
```

### unpause

Unpauses operations after an emergency pause.


```solidity
function unpause() external override onlyGuardian;
```

### _setProvider

Internal function to update the MakinaX service account.


```solidity
function _setProvider(address newProvider) internal;
```

### _addGuardian

Internal logic to add a new guardian.


```solidity
function _addGuardian(address newGuardian) internal;
```

### _setOperatingMode

Internal logic to update the operating mode.


```solidity
function _setOperatingMode(OperatingMode newMode) internal;
```

