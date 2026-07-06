# ModuleFactory
[Git Source](https://github.com/MakinaHQ/makina-lite/blob/626b74d20627999f2962c61cb40e282d31cd7f23/src/factory/ModuleFactory.sol)

**Inherits:**
[MakinaLiteContext](/contracts/utils/MakinaLiteContext.sol/abstract.MakinaLiteContext.md), AccessManagedUpgradeable, [IModuleFactory](/contracts/interfaces/IModuleFactory.sol/interface.IModuleFactory.md)


## State Variables
### isMakinaLiteModule

```solidity
mapping(address module => bool isModule) public isMakinaLiteModule
```


## Functions
### constructor


```solidity
constructor(address _registry) MakinaLiteContext(_registry);
```

### initialize


```solidity
function initialize(address initialAuthority) external initializer;
```

### createModule

Deploys a new MakinaLiteModule clone with the given parameters.


```solidity
function createModule(
    IMakinaLiteModule.MakinaLiteModuleInitParams calldata params,
    bytes32 salt,
    bytes32 referralKey
) external restricted returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`IMakinaLiteModule.MakinaLiteModuleInitParams`|The initialization parameters for the MakinaLiteModule.|
|`salt`|`bytes32`|The salt used for deterministic deployment of the module clone.|
|`referralKey`|`bytes32`|The referral key associated with the module creation.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the newly deployed MakinaLiteModule.|


