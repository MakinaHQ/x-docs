# IMakinaLiteModule
[Git Source](https://github.com/MakinaHQ/makina-lite/blob/626b74d20627999f2962c61cb40e282d31cd7f23/src/interfaces/IMakinaLiteModule.sol)

**Inherits:**
[IMakinaLiteContext](/contracts/interfaces/IMakinaLiteContext.sol/interface.IMakinaLiteContext.md), [IMakinaLiteGovernable](/contracts/interfaces/IMakinaLiteGovernable.sol/interface.IMakinaLiteGovernable.md), [IOracleRegistry](/contracts/interfaces/IOracleRegistry.sol/interface.IOracleRegistry.md), [IWeirollComponent](/contracts/interfaces/IWeirollComponent.sol/interface.IWeirollComponent.md), [ISwapComponent](/contracts/interfaces/ISwapComponent.sol/interface.ISwapComponent.md), [IBridgeComponent](/contracts/interfaces/IBridgeComponent.sol/interface.IBridgeComponent.md)


## Functions
### initialize

Initializes the module with the given parameters.


```solidity
function initialize(MakinaLiteModuleInitParams calldata params) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`MakinaLiteModuleInitParams`|The initialization parameters.|


### sweepERC20

Sweeps the entire balance of a given ERC20 token to the Safe.


```solidity
function sweepERC20(address token) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`address`|The address of the ERC20 token to sweep.|


### sweepNative

Sweeps the entire native currency balance (e.g. ETH) to the Safe.


```solidity
function sweepNative() external;
```

## Structs
### MakinaLiteModuleInitParams
Initialization parameters.


```solidity
struct MakinaLiteModuleInitParams {
    address safe;
    address initialProvider;
    IMakinaLiteGovernable.OperatingMode initialOperatingMode;
    bytes32 initialAllowedInstrRoot;
    uint256 initialMaxPositionIncreaseLossBps;
    uint256 initialMaxPositionDecreaseLossBps;
    uint256 initialInstrCooldownDuration;
    uint256 initialMaxSwapLossBps;
    uint256 initialSwapCooldownDuration;
    uint256 initialSwapFeeRate;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`safe`|`address`|The address of the Safe that the module will be connected to.|
|`initialProvider`|`address`|The address of the MakinaLite service account.|
|`initialOperatingMode`|`IMakinaLiteGovernable.OperatingMode`|The initial operating mode of the module.|
|`initialAllowedInstrRoot`|`bytes32`|The root of the Merkle tree containing the allowed instructions for the module.|
|`initialMaxPositionIncreaseLossBps`|`uint256`|The max allowed value loss (in basis points) for position increases while in WALLED mode.|
|`initialMaxPositionDecreaseLossBps`|`uint256`|The max allowed value loss (in basis points) for position decreases while in WALLED mode.|
|`initialInstrCooldownDuration`|`uint256`|The cooldown duration (in seconds) for position management while in WALLED mode.|
|`initialMaxSwapLossBps`|`uint256`|The maximum allowed loss in basis points for swap operations while in FENCED or WALLED mode.|
|`initialSwapCooldownDuration`|`uint256`|The cooldown duration (in seconds) for swap operations while in FENCED or WALLED mode.|
|`initialSwapFeeRate`|`uint256`|The fee rate for swap operations, 1e18 = 100%.|

