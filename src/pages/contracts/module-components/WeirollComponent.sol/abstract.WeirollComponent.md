# WeirollComponent
[Git Source](https://github.com/MakinaHQ/makina-lite/blob/626b74d20627999f2962c61cb40e282d31cd7f23/src/module-components/WeirollComponent.sol)

**Inherits:**
[IWeirollComponent](/contracts/interfaces/IWeirollComponent.sol/interface.IWeirollComponent.md)


## Constants
### MAX_BPS
Full scale value in basis points


```solidity
uint256 private constant MAX_BPS = 10_000
```


### ACCOUNTING_OUTPUT_STATE_END
Flag to indicate end of values in the accounting output state.


```solidity
bytes32 private constant ACCOUNTING_OUTPUT_STATE_END = bytes32(type(uint256).max)
```


### MANAGED_POSITION_ID_SLOT

```solidity
bytes32 private constant MANAGED_POSITION_ID_SLOT =
    0xfbb6b868544e1f69cf175881d715d83b048bd3f24bc7e327034891f3b849d600
```


### IS_MANAGED_POSITION_DEBT_SLOT

```solidity
bytes32 private constant IS_MANAGED_POSITION_DEBT_SLOT =
    0x4e4b4e291d20f6f03003921c4d26de1006021d95c6c1641168790b4e4b3b7200
```


### IS_MANAGING_FLASHLOAN_SLOT

```solidity
bytes32 private constant IS_MANAGING_FLASHLOAN_SLOT =
    0x8af85af09dfd26c2dc59ce2f32b0ca3422706a314bdc173e6610c5138eba2b00
```


### weirollVm
Address of the Weiroll VM.


```solidity
address public immutable weirollVm
```


## State Variables
### _lastGuardedExecTimestamps

```solidity
mapping(bytes32 executionHash => uint256 timestamp) private _lastGuardedExecTimestamps
```


### allowedInstrRoot
Root of the Merkle tree containing allowed instructions.


```solidity
bytes32 public allowedInstrRoot
```


### accountingCurrency
Currency used to value positions.

If set to address(0), the reference currency of the OracleRegistry is used.


```solidity
address public accountingCurrency
```


### maxPositionIncreaseLossBps
Max allowed value loss (in basis points) when increasing a position while in WALLED mode.


```solidity
uint256 public maxPositionIncreaseLossBps
```


### maxPositionDecreaseLossBps
Max allowed value loss (in basis points) when decreasing a position while in WALLED mode.


```solidity
uint256 public maxPositionDecreaseLossBps
```


### instrCooldownDuration
Cooldown duration for instruction executions in seconds.


```solidity
uint256 public instrCooldownDuration
```


## Functions
### constructor


```solidity
constructor(address _weirollVm) ;
```

### _managePosition

Manages and accounts for a position by executing the provided instructions.


```solidity
function _managePosition(
    Instruction calldata mgmtInstruction,
    Instruction calldata acctInstruction,
    bool guarded,
    address safe
) internal returns (uint256 value, int256 change);
```

### _manageFlashLoan

Manages and refunds flash loan funds.


```solidity
function _manageFlashLoan(
    Instruction calldata instruction,
    address token,
    uint256 amount,
    address safe,
    address flashLoanModule
) internal;
```

### _accountForPosition

Computes the accounting value of a position.


```solidity
function _accountForPosition(Instruction calldata instruction, bool checks, address safe)
    internal
    returns (uint256);
```

### _harvest

Internal logic to harvest one or multiple positions.


```solidity
function _harvest(IWeirollComponent.Instruction calldata instruction, address safe) internal;
```

### _decodeAccountingOutputState

Decodes the output state of an accounting instruction into an array of amounts.


```solidity
function _decodeAccountingOutputState(bytes[] memory state) internal pure returns (uint256[] memory);
```

### _checkPositionMinDelta

Checks that absolute position value change is greater than minimum value relative to affected token balance changes and loss tolerance.


```solidity
function _checkPositionMinDelta(uint256 positionValChange, uint256 affectedTokensValChange, uint256 maxLossBps)
    internal
    pure;
```

### _checkPositionMaxDelta

Checks that absolute position value change is less than maximum value relative to affected token balance changes and loss tolerance.


```solidity
function _checkPositionMaxDelta(uint256 positionValChange, uint256 affectedTokensValChange, uint256 maxLossBps)
    internal
    pure;
```

### _checkInstructionIsAllowed

Checks if the given instruction is allowed by verifying its Merkle proof against the allowed instructions root.


```solidity
function _checkInstructionIsAllowed(Instruction calldata instruction) internal view;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`instruction`|`Instruction`|The instruction to check.|


### _getStateHash

Computes a hash of the state array, selectively including elements as specified by a bitmap.
This enables a Weiroll script to have both fixed and variable parameters.


```solidity
function _getStateHash(bytes[] calldata state, uint128 bitmap) internal pure returns (bytes32);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`state`|`bytes[]`|The state array to hash.|
|`bitmap`|`uint128`|The bitmap where each bit determines whether the corresponding element in state is included or ignored in the hash computation.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes32`|hash The hash of the state array.|


### _aggregateTokensValue

Computes the total value of the token balances held by the Safe, priced in given currency.


```solidity
function _aggregateTokensValue(address[] calldata tokens, address safe) internal view returns (uint256);
```

### _setAllowedInstrRoot

Internal logic to set the root of the Merkle tree containing allowed instructions.


```solidity
function _setAllowedInstrRoot(bytes32 newAllowedInstrRoot) internal;
```

### _setAccountingCurrency

Internal logic to set the accounting currency.


```solidity
function _setAccountingCurrency(address newAccountingCurrency) internal;
```

### _setMaxPositionIncreaseLossBps

Internal logic to set the maximum allowed relative value loss for position increases.


```solidity
function _setMaxPositionIncreaseLossBps(uint256 newMaxPositionIncreaseLossBps) internal;
```

### _setMaxPositionDecreaseLossBps

Internal logic to set the maximum allowed relative value loss for position decreases.


```solidity
function _setMaxPositionDecreaseLossBps(uint256 newMaxPositionDecreaseLossBps) internal;
```

### _setInstrCooldownDuration

Internal logic to set the cooldown duration for instruction executions.


```solidity
function _setInstrCooldownDuration(uint256 newInstrCooldownDuration) internal;
```

### _execute

Instructs the Safe to execute a set of commands via a delegatecall to the Weiroll VM.


```solidity
function _execute(bytes32[] calldata commands, bytes[] memory state, address safe)
    internal
    returns (bytes[] memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`commands`|`bytes32[]`|The commands to execute.|
|`state`|`bytes[]`|The state to pass to the VM.|
|`safe`|`address`|The Safe to dispatch the delegatecall.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes[]`|outState The new state after executing the commands.|


### _checkAndSetCooldown

Checks cooldown for a given guarded execution and updates its last timestamp.


```solidity
function _checkAndSetCooldown(bytes32 executionHash) internal;
```

### _valueOf

Returns the value of `baseTokenAmount` of `baseToken` denominated in `quoteToken`, using the registered price route.


```solidity
function _valueOf(address baseToken, address quoteToken, uint256 baseTokenAmount)
    internal
    view
    virtual
    returns (uint256);
```

### _refundFlashLoan

Transfers `amount` of ERC20 `token` from the Safe to the flash loan module via a module call.


```solidity
function _refundFlashLoan(address token, uint256 amount, address flashLoanModule) internal virtual;
```

