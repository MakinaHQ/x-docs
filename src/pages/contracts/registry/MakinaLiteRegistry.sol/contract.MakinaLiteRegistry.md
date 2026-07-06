# MakinaLiteRegistry
[Git Source](https://github.com/MakinaHQ/makina-lite/blob/626b74d20627999f2962c61cb40e282d31cd7f23/src/registry/MakinaLiteRegistry.sol)

**Inherits:**
AccessManagedUpgradeable, [IMakinaLiteRegistry](/contracts/interfaces/IMakinaLiteRegistry.sol/interface.IMakinaLiteRegistry.md)


## State Variables
### moduleFactory
Address of the MakinaLiteModule factory.


```solidity
address public moduleFactory
```


### moduleImplementation
Address of the MakinaLiteModule implementation.


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

Sets the address of the MakinaLite factory.


```solidity
function setModuleFactory(address factory) external restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`factory`|`address`|The address of the MakinaLite factory.|


### setModuleImplementation

Sets the MakinaLiteModule implementation for future deployments.


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


