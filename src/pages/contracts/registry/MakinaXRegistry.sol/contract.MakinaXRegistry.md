# MakinaXRegistry
[Git Source](https://github.com/MakinaHQ/makina-x/blob/43737945b99e87740e2a58b7a320c78a5d628e4b/src/registry/MakinaXRegistry.sol)

**Inherits:**
AccessManagedUpgradeable, [IMakinaXRegistry](/contracts/interfaces/IMakinaXRegistry.sol/interface.IMakinaXRegistry.md)


## State Variables
### moduleFactory
Address of the MakinaXModule factory.


```solidity
address public moduleFactory
```


### moduleImplementation
Address of the MakinaXModule implementation.


```solidity
address public moduleImplementation
```


### feeCollector
Address of the fee collector.


```solidity
address public feeCollector
```


### flashLoanModule
Address of the flash loan module.


```solidity
address public flashLoanModule
```


### _bridgeEncoders

```solidity
mapping(uint16 bridgeId => address encoder) private _bridgeEncoders
```


## Functions
### constructor


```solidity
constructor() ;
```

### initialize


```solidity
function initialize(address initialAuthority) external initializer;
```

### getBridgeEncoder

Bridge ID => Address of the corresponding bridge encoder.


```solidity
function getBridgeEncoder(uint16 bridgeId) external view returns (address);
```

### setModuleFactory

Sets the address of the MakinaXModule factory.


```solidity
function setModuleFactory(address newModuleFactory) external restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newModuleFactory`|`address`|The address of the new MakinaXModule factory.|


### setModuleImplementation

Sets the MakinaXModule implementation for future deployments.


```solidity
function setModuleImplementation(address newImplementation) external restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newImplementation`|`address`|The address of the new implementation contract.|


### setFeeCollector

Sets the address of the fee collector.


```solidity
function setFeeCollector(address newFeeCollector) external restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newFeeCollector`|`address`|The address of the new fee collector.|


### setFlashLoanModule

Sets the address of the flash loan module.


```solidity
function setFlashLoanModule(address newFlashLoanModule) external restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newFlashLoanModule`|`address`|The address of the new flash loan module.|


### setBridgeEncoder

Sets a bridge encoder instance for a given bridge ID.


```solidity
function setBridgeEncoder(uint16 bridgeId, address bridgeEncoder) external restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`bridgeId`|`uint16`|The ID of the bridge.|
|`bridgeEncoder`|`address`|The address of the new bridge encoder instance.|
