# IMakinaXGovernable
[Git Source](https://github.com/MakinaHQ/makina-x/blob/43737945b99e87740e2a58b7a320c78a5d628e4b/src/interfaces/IMakinaXGovernable.sol)


## Functions
### safe

Address of the Safe.


```solidity
function safe() external view returns (address);
```

### provider

Address of the MakinaX service account.


```solidity
function provider() external view returns (address);
```

### isOperator

Account => Whether the account is an operator.


```solidity
function isOperator(address account) external view returns (bool);
```

### isGuardian

Account => Whether the account is a guardian.


```solidity
function isGuardian(address account) external view returns (bool);
```

### operatingMode

Current operating mode of the contract.


```solidity
function operatingMode() external view returns (OperatingMode);
```

### suspendedByProvider

True if the contract is suspended by the provider, false otherwise.


```solidity
function suspendedByProvider() external view returns (bool);
```

### paused

True if the contract is paused by a guardian, false otherwise.


```solidity
function paused() external view returns (bool);
```

### setProvider

Sets the provider address.


```solidity
function setProvider(address newProvider) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newProvider`|`address`|The address of the new provider.|


### addOperator

Adds a new operator.


```solidity
function addOperator(address newOperator) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newOperator`|`address`|The address of the new operator.|


### removeOperator

Removes an operator.


```solidity
function removeOperator(address operator) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`operator`|`address`|The address of the operator to remove.|


### addGuardian

Adds a new guardian.


```solidity
function addGuardian(address newGuardian) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newGuardian`|`address`|The address of the new guardian.|


### removeGuardian

Removes a guardian.


```solidity
function removeGuardian(address guardian) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`guardian`|`address`|The address of the guardian to remove.|


### setOperatingMode

Sets the operating mode.


```solidity
function setOperatingMode(OperatingMode newMode) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newMode`|`OperatingMode`|The operating mode to set.|


### suspend

Suspends operations. Used by the provider to enforce service restrictions.


```solidity
function suspend() external;
```

### unsuspend

Restores operations after a provider suspension.


```solidity
function unsuspend() external;
```

### pause

Pauses operations. Used by a guardian in case of emergency.


```solidity
function pause() external;
```

### unpause

Unpauses operations after an emergency pause.


```solidity
function unpause() external;
```

## Events
### GuardianAdded

```solidity
event GuardianAdded(address indexed newGuardian);
```

### GuardianRemoved

```solidity
event GuardianRemoved(address indexed guardian);
```

### OperatingModeChanged

```solidity
event OperatingModeChanged(OperatingMode indexed mode);
```

### OperatorAdded

```solidity
event OperatorAdded(address indexed newOperator);
```

### OperatorRemoved

```solidity
event OperatorRemoved(address indexed operator);
```

### Paused

```solidity
event Paused(address indexed guardian);
```

### Unpaused

```solidity
event Unpaused(address indexed guardian);
```

### ProviderChanged

```solidity
event ProviderChanged(address indexed oldProvider, address indexed newProvider);
```

### Suspended

```solidity
event Suspended();
```

### Unsuspended

```solidity
event Unsuspended();
```

## Enums
### OperatingMode
Operating modes of a module, ordered by increasing restriction.


```solidity
enum OperatingMode {
    OPEN,
    FENCED,
    WALLED
}
```

