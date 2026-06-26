# IModuleFactory
[Git Source](https://github.com/MakinaHQ/makina-lite/blob/626b74d20627999f2962c61cb40e282d31cd7f23/src/interfaces/IModuleFactory.sol)


## Functions
### isMakinaLiteModule

Module => Whether the module was deployed by this factory.


```solidity
function isMakinaLiteModule(address module) external view returns (bool);
```

### createModule

Deploys a new MakinaLiteModule clone with the given parameters.


```solidity
function createModule(
    IMakinaLiteModule.MakinaLiteModuleInitParams calldata params,
    bytes32 salt,
    bytes32 referralKey
) external returns (address);
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


## Events
### MakinaLiteModuleCreated

```solidity
event MakinaLiteModuleCreated(address indexed module, address indexed implementation, bytes32 indexed referralKey);
```

