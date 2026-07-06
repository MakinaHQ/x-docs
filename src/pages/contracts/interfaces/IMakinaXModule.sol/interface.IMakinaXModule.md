# IMakinaXModule
[Git Source](https://github.com/MakinaHQ/makina-x/blob/43737945b99e87740e2a58b7a320c78a5d628e4b/src/interfaces/IMakinaXModule.sol)

**Inherits:**
[IMakinaXContext](/contracts/interfaces/IMakinaXContext.sol/interface.IMakinaXContext.md), [IMakinaXGovernable](/contracts/interfaces/IMakinaXGovernable.sol/interface.IMakinaXGovernable.md), [IOracleRegistry](/contracts/interfaces/IOracleRegistry.sol/interface.IOracleRegistry.md), [IWeirollComponent](/contracts/interfaces/IWeirollComponent.sol/interface.IWeirollComponent.md), [ISwapComponent](/contracts/interfaces/ISwapComponent.sol/interface.ISwapComponent.md), [IBridgeComponent](/contracts/interfaces/IBridgeComponent.sol/interface.IBridgeComponent.md)


## Functions
### initialize

Initializes the module with the given parameters.


```solidity
function initialize(MakinaXModuleInitParams calldata params, MakinaXModuleServiceParams calldata serviceParams)
    external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`MakinaXModuleInitParams`|The strategy and risk initialization parameters.|
|`serviceParams`|`MakinaXModuleServiceParams`|The protocol-controlled service initialization parameters.|


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
### MakinaXModuleInitParams
Strategy and risk initialization parameters.


```solidity
struct MakinaXModuleInitParams {
    address safe;
    IMakinaXGovernable.OperatingMode initialOperatingMode;
    bytes32 initialAllowedInstrRoot;
    uint256 initialMaxPositionIncreaseLossBps;
    uint256 initialMaxPositionDecreaseLossBps;
    uint256 initialInstrCooldownDuration;
    uint256 initialMaxSwapLossBps;
    uint256 initialSwapCooldownDuration;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`safe`|`address`|The address of the Safe that the module will be connected to.|
|`initialOperatingMode`|`IMakinaXGovernable.OperatingMode`|The initial operating mode of the module.|
|`initialAllowedInstrRoot`|`bytes32`|The root of the Merkle tree containing the allowed instructions for the module.|
|`initialMaxPositionIncreaseLossBps`|`uint256`|The max allowed value loss (in basis points) for position increases while in WALLED mode.|
|`initialMaxPositionDecreaseLossBps`|`uint256`|The max allowed value loss (in basis points) for position decreases while in WALLED mode.|
|`initialInstrCooldownDuration`|`uint256`|The cooldown duration (in seconds) for position management while in WALLED mode.|
|`initialMaxSwapLossBps`|`uint256`|The maximum allowed loss in basis points for swap operations while in FENCED or WALLED mode.|
|`initialSwapCooldownDuration`|`uint256`|The cooldown duration (in seconds) for swap operations while in FENCED or WALLED mode.|

### MakinaXModuleServiceParams
Protocol-controlled service initialization parameters.


```solidity
struct MakinaXModuleServiceParams {
    address initialProvider;
    uint256 initialSwapFeeRate;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`initialProvider`|`address`|The address of the MakinaX service account.|
|`initialSwapFeeRate`|`uint256`|The fee rate for swap operations, 1e18 = 100%.|

