# ModuleFactory
[Git Source](https://github.com/MakinaHQ/makina-x/blob/43737945b99e87740e2a58b7a320c78a5d628e4b/src/factory/ModuleFactory.sol)

**Inherits:**
[MakinaXContext](/contracts/utils/MakinaXContext.sol/abstract.MakinaXContext.md), AccessManagedUpgradeable, [IModuleFactory](/contracts/interfaces/IModuleFactory.sol/interface.IModuleFactory.md)


## Constants
### MAX_FEE_RATE
Full scale value for fee rates.


```solidity
uint256 private constant MAX_FEE_RATE = 1e18
```


## State Variables
### isMakinaXModule

```solidity
mapping(address module => bool isModule) public isMakinaXModule
```


### defaultProvider
Provider enforced by default on modules deployed through the free path.


```solidity
address public defaultProvider
```


### defaultSwapFeeRate
Swap fee rate enforced by default on modules deployed through the free path, 1e18 = 100%.


```solidity
uint256 public defaultSwapFeeRate
```


### freeDeployment
Whether free module deployment is currently enabled.


```solidity
bool public freeDeployment
```


## Functions
### constructor


```solidity
constructor(address _registry) MakinaXContext(_registry);
```

### initialize


```solidity
function initialize(
    address initialAuthority,
    address initialDefaultProvider,
    uint256 initialDefaultSwapFeeRate,
    bool initialFreeDeployment
) external initializer;
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
) external restricted returns (address);
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
function setDefaultProvider(address newDefaultProvider) external restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newDefaultProvider`|`address`|The new default provider address.|


### setDefaultSwapFeeRate

Sets the swap fee rate enforced on free deployment.


```solidity
function setDefaultSwapFeeRate(uint256 newDefaultSwapFeeRate) external restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newDefaultSwapFeeRate`|`uint256`|The new default swap fee rate, 1e18 = 100%.|


### setFreeDeployment

Enables or disables free module deployment.


```solidity
function setFreeDeployment(bool enabled) external restricted;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`enabled`|`bool`|True to enable free deployment, false to disable it.|


### _createModule

Internal logic to deploy and initialize a new MakinaXModule clone.


```solidity
function _createModule(
    IMakinaXModule.MakinaXModuleInitParams calldata params,
    IMakinaXModule.MakinaXModuleServiceParams memory serviceParams,
    bytes32 salt,
    bytes32 referralKey
) private returns (address);
```

### _setDefaultProvider

Internal setter for the default provider.


```solidity
function _setDefaultProvider(address newDefaultProvider) internal;
```

### _setDefaultSwapFeeRate

Internal setter for the default swap fee rate.


```solidity
function _setDefaultSwapFeeRate(uint256 newDefaultSwapFeeRate) internal;
```

### _setFreeDeployment

Internal setter for free deployment.


```solidity
function _setFreeDeployment(bool enabled) internal;
```

### _checkFeeRate

Performs sanity check on a fee rate.


```solidity
function _checkFeeRate(uint256 rate) internal pure;
```

