# IModuleFactory
[Git Source](https://github.com/MakinaHQ/makina-x/blob/43737945b99e87740e2a58b7a320c78a5d628e4b/src/interfaces/IModuleFactory.sol)


## Functions
### isMakinaXModule

Module => Whether the module was deployed by this factory.


```solidity
function isMakinaXModule(address module) external view returns (bool);
```

### defaultProvider

Provider enforced by default on modules deployed through the free path.


```solidity
function defaultProvider() external view returns (address);
```

### defaultSwapFeeRate

Swap fee rate enforced by default on modules deployed through the free path, 1e18 = 100%.


```solidity
function defaultSwapFeeRate() external view returns (uint256);
```

### freeDeployment

Whether free module deployment is currently enabled.


```solidity
function freeDeployment() external view returns (bool);
```

### createModule

Deploys a new MakinaXModule clone with caller-provided service parameters.

Restricted to authorized deployers.


```solidity
function createModule(
    IMakinaXModule.MakinaXModuleInitParams calldata params,
    IMakinaXModule.MakinaXModuleServiceParams calldata serviceParams,
    bytes32 salt,
    bytes32 referralKey
) external returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`IMakinaXModule.MakinaXModuleInitParams`|The strategy and risk initialization parameters for the MakinaXModule.|
|`serviceParams`|`IMakinaXModule.MakinaXModuleServiceParams`|The protocol-controlled service initialization parameters.|
|`salt`|`bytes32`|The salt used for deterministic deployment of the module clone.|
|`referralKey`|`bytes32`|The referral key associated with the module creation.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the newly deployed MakinaXModule.|


### createModuleFree

Deploys a new MakinaXModule clone, with service parameters enforced by the factory.

Callable by anyone while free deployment is enabled.


```solidity
function createModuleFree(IMakinaXModule.MakinaXModuleInitParams calldata params, bytes32 salt, bytes32 referralKey)
    external
    returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`IMakinaXModule.MakinaXModuleInitParams`|The strategy and risk initialization parameters for the MakinaXModule.|
|`salt`|`bytes32`|The caller-scoped salt used for deterministic deployment of the module clone.|
|`referralKey`|`bytes32`|The referral key associated with the module creation.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the newly deployed MakinaXModule.|


### setDefaultProvider

Sets the provider enforced on free deployment.


```solidity
function setDefaultProvider(address newDefaultProvider) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newDefaultProvider`|`address`|The new default provider address.|


### setDefaultSwapFeeRate

Sets the swap fee rate enforced on free deployment.


```solidity
function setDefaultSwapFeeRate(uint256 newDefaultSwapFeeRate) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newDefaultSwapFeeRate`|`uint256`|The new default swap fee rate, 1e18 = 100%.|


### setFreeDeployment

Enables or disables free module deployment.


```solidity
function setFreeDeployment(bool enabled) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`enabled`|`bool`|True to enable free deployment, false to disable it.|


## Events
### MakinaXModuleCreated

```solidity
event MakinaXModuleCreated(address indexed module, address indexed implementation, bytes32 indexed referralKey);
```

### DefaultProviderChanged

```solidity
event DefaultProviderChanged(address indexed oldDefaultProvider, address indexed newDefaultProvider);
```

### DefaultSwapFeeRateChanged

```solidity
event DefaultSwapFeeRateChanged(uint256 oldDefaultSwapFeeRate, uint256 newDefaultSwapFeeRate);
```

### FreeDeploymentChanged

```solidity
event FreeDeploymentChanged(bool enabled);
```

