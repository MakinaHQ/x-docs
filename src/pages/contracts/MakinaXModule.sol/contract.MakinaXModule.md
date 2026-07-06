# MakinaXModule
[Git Source](https://github.com/MakinaHQ/makina-x/blob/43737945b99e87740e2a58b7a320c78a5d628e4b/src/MakinaXModule.sol)

**Inherits:**
[MakinaXContext](/contracts/utils/MakinaXContext.sol/abstract.MakinaXContext.md), [MakinaXGovernable](/contracts/utils/MakinaXGovernable.sol/abstract.MakinaXGovernable.md), [OracleRegistry](/contracts/module-components/OracleRegistry.sol/abstract.OracleRegistry.md), [WeirollComponent](/contracts/module-components/WeirollComponent.sol/abstract.WeirollComponent.md), [SwapComponent](/contracts/module-components/SwapComponent.sol/abstract.SwapComponent.md), [BridgeComponent](/contracts/module-components/BridgeComponent.sol/abstract.BridgeComponent.md), ReentrancyGuard, [IMakinaXModule](/contracts/interfaces/IMakinaXModule.sol/interface.IMakinaXModule.md)


## Constants
### MAX_BPS
Full scale value in basis points


```solidity
uint256 private constant MAX_BPS = 10_000
```


### MAX_FEE_RATE
Full scale value for fee rates


```solidity
uint256 private constant MAX_FEE_RATE = 1e18
```


## Functions
### constructor


```solidity
constructor(address _registry, address _weirollVm) MakinaXContext(_registry) WeirollComponent(_weirollVm);
```

### initialize

Initializes the module with the given parameters.


```solidity
function initialize(MakinaXModuleInitParams calldata params, MakinaXModuleServiceParams calldata serviceParams)
    external
    override
    initializer;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`MakinaXModuleInitParams`|The strategy and risk initialization parameters.|
|`serviceParams`|`MakinaXModuleServiceParams`|The protocol-controlled service initialization parameters.|


### receive


```solidity
receive() external payable;
```

### setFeedRoute

Sets the price feed route for a given token.

Both feeds, if set, must be Chainlink-interface-compliant.
The combination of feed1 and feed2 must be able to price the token in the reference currency.
If feed2 is set to address(0), the token price in the reference currency is assumed to be returned by feed1.


```solidity
function setFeedRoute(
    address token,
    address feed1,
    uint256 stalenessThreshold1,
    address feed2,
    uint256 stalenessThreshold2
) external override nonReentrant onlySafe;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`address`|The address of the token for which the price feed route is set.|
|`feed1`|`address`|The address of the first price feed.|
|`stalenessThreshold1`|`uint256`|The staleness threshold for the first price feed.|
|`feed2`|`address`|The address of the second price feed. Can be set to address(0).|
|`stalenessThreshold2`|`uint256`|The staleness threshold for the second price feed. Ignored if feed2 is address(0).|


### clearFeedRoute

Clears the price feed route for a given token.

Staleness thresholds for the route's feeds are preserved, as the feeds may be used by other routes.


```solidity
function clearFeedRoute(address token) external override onlySafe;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`address`|The address of the token for which the price feed route is cleared.|


### setFeedStaleThreshold

Sets the price staleness threshold for a given feed.


```solidity
function setFeedStaleThreshold(address feed, uint256 newThreshold) external override onlySafe;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`feed`|`address`|The address of the price feed.|
|`newThreshold`|`uint256`|The value of staleness threshold.|


### accountForPosition


```solidity
function accountForPosition(IWeirollComponent.Instruction calldata instruction)
    external
    override
    nonReentrant
    whenOperational
    onlyOperator
    returns (uint256);
```

### accountForPositionBatch


```solidity
function accountForPositionBatch(IWeirollComponent.Instruction[] calldata instructions, uint256[] calldata)
    external
    override
    nonReentrant
    whenOperational
    onlyOperator
    returns (uint256[] memory);
```

### managePosition


```solidity
function managePosition(
    IWeirollComponent.Instruction calldata mgmtInstruction,
    IWeirollComponent.Instruction calldata acctInstruction
) external override nonReentrant whenOperational onlyOperator returns (uint256, int256);
```

### managePositionBatch


```solidity
function managePositionBatch(
    IWeirollComponent.Instruction[] calldata mgmtInstructions,
    IWeirollComponent.Instruction[] calldata acctInstructions
) external override nonReentrant whenOperational onlyOperator returns (uint256[] memory, int256[] memory);
```

### manageFlashLoan


```solidity
function manageFlashLoan(IWeirollComponent.Instruction calldata instruction, address token, uint256 amount)
    external
    override;
```

### harvest


```solidity
function harvest(IWeirollComponent.Instruction calldata instruction, ISwapComponent.SwapOrder[] calldata swapOrders)
    external
    override
    nonReentrant
    whenOperational
    onlyOperator;
```

### setAllowedInstrRoot

Sets the root of the Merkle tree containing allowed instructions.


```solidity
function setAllowedInstrRoot(bytes32 newAllowedInstrRoot) external override onlySafe;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newAllowedInstrRoot`|`bytes32`|The new Merkle root.|


### setAccountingCurrency

Sets the currency used to value positions.


```solidity
function setAccountingCurrency(address newAccountingCurrency) external override nonReentrant onlySafe;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newAccountingCurrency`|`address`|The new currency.|


### setMaxPositionIncreaseLossBps

Sets the maximum allowed relative value loss for position increases while in WALLED mode.


```solidity
function setMaxPositionIncreaseLossBps(uint256 newMaxPositionIncreaseLossBps) external override onlySafe;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newMaxPositionIncreaseLossBps`|`uint256`|The new maximum value loss in basis points.|


### setMaxPositionDecreaseLossBps

Sets the maximum allowed relative value loss for position decreases while in WALLED mode.


```solidity
function setMaxPositionDecreaseLossBps(uint256 newMaxPositionDecreaseLossBps) external override onlySafe;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newMaxPositionDecreaseLossBps`|`uint256`|The new maximum value loss in basis points.|


### setInstrCooldownDuration

Sets the cooldown duration for instruction executions while in WALLED mode.


```solidity
function setInstrCooldownDuration(uint256 newInstrCooldownDuration) external override onlySafe;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newInstrCooldownDuration`|`uint256`|The new cooldown duration in seconds.|


### swap


```solidity
function swap(ISwapComponent.SwapOrder calldata order) external override nonReentrant whenOperational onlyOperator;
```

### setMaxSwapLossBps

Sets the maximum allowed relative value loss for token swaps while in FENCED or WALLED mode.


```solidity
function setMaxSwapLossBps(uint256 newMaxSwapLossBps) external override onlySafe;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newMaxSwapLossBps`|`uint256`|The new maximum value loss in basis points.|


### setSwapCooldownDuration

Sets the cooldown duration for token swaps while in FENCED or WALLED mode.


```solidity
function setSwapCooldownDuration(uint256 newSwapCooldownDuration) external override onlySafe;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newSwapCooldownDuration`|`uint256`|The new cooldown duration in seconds.|


### setSwapFeeRate

Sets the swap fee rate.


```solidity
function setSwapFeeRate(uint256 newSwapFeeRate) external override onlyProvider;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newSwapFeeRate`|`uint256`|The new swap fee rate, 1e18 = 100%.|


### setSwapperTargets

Sets approval and execution targets for a given swapper ID.


```solidity
function setSwapperTargets(uint16 swapperId, address approvalTarget, address executionTarget)
    external
    override
    onlySafe;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`swapperId`|`uint16`|The swapper ID.|
|`approvalTarget`|`address`|The approval target.|
|`executionTarget`|`address`|The execution target.|


### sendOutBridgeTransfer


```solidity
function sendOutBridgeTransfer(IBridgeComponent.BridgeOrder calldata order)
    external
    override
    nonReentrant
    whenOperational
    onlyOperator;
```

### setMaxBridgeLossBps

Sets the maximum allowed relative value loss for transfers via this bridge while in FENCED or WALLED mode.


```solidity
function setMaxBridgeLossBps(uint16 bridgeId, uint256 newMaxBridgeLossBps) external override onlySafe;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`bridgeId`|`uint16`|The ID of the bridge.|
|`newMaxBridgeLossBps`|`uint256`|The new maximum value loss in basis points.|


### setBridgeCooldownDuration

Sets the cooldown duration for bridge transfers while in FENCED or WALLED mode.


```solidity
function setBridgeCooldownDuration(uint256 newBridgeCooldownDuration) external override onlySafe;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newBridgeCooldownDuration`|`uint256`|The new cooldown duration in seconds.|


### addRecipient

Adds a whitelisted recipient for bridge transfer to a given foreign chain while in FENCED or WALLED mode.


```solidity
function addRecipient(uint256 foreignChainId, address recipient) external override onlySafe;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`foreignChainId`|`uint256`|The foreign chain ID.|
|`recipient`|`address`|The address of the recipient.|


### removeRecipient

Removes a whitelisted recipient for bridge transfer to a given foreign chain while in FENCED or WALLED mode.


```solidity
function removeRecipient(uint256 foreignChainId, address recipient) external override onlySafe;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`foreignChainId`|`uint256`|The foreign chain ID.|
|`recipient`|`address`|The address of the recipient.|


### sweepERC20

Sweeps the entire balance of a given ERC20 token to the Safe.


```solidity
function sweepERC20(address token) external nonReentrant onlySafe;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`address`|The address of the ERC20 token to sweep.|


### sweepNative

Sweeps the entire native currency balance (e.g. ETH) to the Safe.


```solidity
function sweepNative() external nonReentrant onlySafe;
```

### _swapForSafe

Internal logic to execute token swaps on behalf of the Safe using a given swapper.


```solidity
function _swapForSafe(ISwapComponent.SwapOrder calldata order) internal;
```

### _valueOf

Returns the value of `baseTokenAmount` of `baseToken` denominated in `quoteToken`, using the registered price route.


```solidity
function _valueOf(address baseToken, address quoteToken, uint256 baseTokenAmount)
    internal
    view
    override(WeirollComponent, SwapComponent)
    returns (uint256);
```

### _refundFlashLoan

Transfers `amount` of ERC20 `token` from the Safe to the flash loan module via a module call.


```solidity
function _refundFlashLoan(address token, uint256 amount, address flashLoanModule) internal override;
```

### _pullERC20FromSafe

Transfers `amount` of ERC20 `token` from the Safe to the given recipient via a module call.


```solidity
function _pullERC20FromSafe(address token, uint256 amount, address recipient) internal;
```

### _checkBps

Performs sanity check on a basis points value.


```solidity
function _checkBps(uint256 bpsValue) internal pure;
```

### _checkFeeRate

Performs sanity check on a fee rate.


```solidity
function _checkFeeRate(uint256 rate) internal pure;
```

### _chargeSwapFee

Computes the fee for a given swap output, transfers it to the fee collector, and returns it.


```solidity
function _chargeSwapFee(address tokenOut, uint256 amountOut) internal returns (uint256);
```

