# IMakinaLiteRegistry
[Git Source](https://github.com/MakinaHQ/makina-lite/blob/626b74d20627999f2962c61cb40e282d31cd7f23/src/interfaces/IMakinaLiteRegistry.sol)


## Functions
### moduleFactory

Address of the MakinaLiteModule factory.


```solidity
function moduleFactory() external view returns (address);
```

### moduleImplementation

Address of the MakinaLiteModule implementation.


```solidity
function moduleImplementation() external view returns (address);
```

### feeCollector

Address of the fee collector.


```solidity
function feeCollector() external view returns (address);
```

### flashLoanModule

Address of the flash loan module.


```solidity
function flashLoanModule() external view returns (address);
```

### getBridgeEncoder

Bridge ID => Address of the corresponding bridge encoder.


```solidity
function getBridgeEncoder(uint16 bridgeId) external view returns (address);
```

### setModuleFactory

Sets the address of the MakinaLite factory.


```solidity
function setModuleFactory(address factory) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`factory`|`address`|The address of the MakinaLite factory.|


### setModuleImplementation

Sets the MakinaLiteModule implementation for future deployments.


```solidity
function setModuleImplementation(address newImplementation) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newImplementation`|`address`|The address of the new implementation contract.|


### setFeeCollector

Sets the address of the fee collector.


```solidity
function setFeeCollector(address newFeeCollector) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newFeeCollector`|`address`|The address of the new fee collector.|


### setFlashLoanModule

Sets the address of the flash loan module.


```solidity
function setFlashLoanModule(address newFlashLoanModule) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newFlashLoanModule`|`address`|The address of the new flash loan module.|


### setBridgeEncoder

Sets a bridge encoder instance for a given bridge ID.


```solidity
function setBridgeEncoder(uint16 bridgeId, address bridgeEncoder) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`bridgeId`|`uint16`|The ID of the bridge.|
|`bridgeEncoder`|`address`|The address of the new bridge encoder instance.|


## Events
### BridgeEncoderChanged

```solidity
event BridgeEncoderChanged(
    uint16 indexed bridgeId, address indexed oldBridgeEncoder, address indexed newBridgeEncoder
);
```

### FeeCollectorChanged

```solidity
event FeeCollectorChanged(address indexed oldFeeCollector, address indexed newFeeCollector);
```

### FlashLoanModuleChanged

```solidity
event FlashLoanModuleChanged(address indexed oldFlashLoanModule, address indexed newFlashLoanModule);
```

### ModuleFactoryChanged

```solidity
event ModuleFactoryChanged(address indexed oldModuleFactory, address indexed newModuleFactory);
```

### ModuleImplementationChanged

```solidity
event ModuleImplementationChanged(address indexed oldModuleImplementation, address indexed newModuleImplementation);
```

