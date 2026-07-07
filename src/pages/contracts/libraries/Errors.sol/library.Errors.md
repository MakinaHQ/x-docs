# Errors
[Git Source](https://github.com/MakinaHQ/makina-x/blob/43737945b99e87740e2a58b7a320c78a5d628e4b/src/libraries/Errors.sol)


## Errors
### AccountingMandatory

```solidity
error AccountingMandatory();
```

### AlreadyGuardian

```solidity
error AlreadyGuardian();
```

### AlreadyOperator

```solidity
error AlreadyOperator();
```

### AmountOutTooLow

```solidity
error AmountOutTooLow();
```

### BridgeEncoderDoesNotExist

```solidity
error BridgeEncoderDoesNotExist();
```

### CctpDomainNotRegistered

```solidity
error CctpDomainNotRegistered();
```

### DirectManageFlashLoanCall

```solidity
error DirectManageFlashLoanCall();
```

### ExceededMaxFee

```solidity
error ExceededMaxFee(uint256 fee, uint256 max);
```

### FreeDeploymentDisabled

```solidity
error FreeDeploymentDisabled();
```

### InstructionsMismatch

```solidity
error InstructionsMismatch();
```

### InvalidAccounting

```solidity
error InvalidAccounting();
```

### InvalidBpsValue

```solidity
error InvalidBpsValue();
```

### InvalidDataHash

```solidity
error InvalidDataHash();
```

### InvalidDebtFlag

```solidity
error InvalidDebtFlag();
```

### InvalidDecimals

```solidity
error InvalidDecimals();
```

### InvalidFeedRoute

```solidity
error InvalidFeedRoute();
```

### InvalidFeeRate

```solidity
error InvalidFeeRate();
```

### InvalidFlashLoanProvider

```solidity
error InvalidFlashLoanProvider();
```

### InvalidFlashLoanTaker

```solidity
error InvalidFlashLoanTaker();
```

### InvalidInputToken

```solidity
error InvalidInputToken();
```

### InvalidInstructionProof

```solidity
error InvalidInstructionProof();
```

### InvalidInstructionType

```solidity
error InvalidInstructionType();
```

### InvalidLzSentAmount

```solidity
error InvalidLzSentAmount();
```

### InvalidPositionChangeDirection

```solidity
error InvalidPositionChangeDirection();
```

### InvalidTarget

```solidity
error InvalidTarget();
```

### LzEndpointIdNotRegistered

```solidity
error LzEndpointIdNotRegistered();
```

### ManageFlashLoanReentrantCall

```solidity
error ManageFlashLoanReentrantCall();
```

### MaxValueLossExceeded

```solidity
error MaxValueLossExceeded();
```

### MinOutputAmountExceedsInputAmount

```solidity
error MinOutputAmountExceedsInputAmount();
```

### MismatchedLengths

```solidity
error MismatchedLengths();
```

### NegativeTokenPrice

```solidity
error NegativeTokenPrice(address priceFeed);
```

### NotFlashLoanModule

```solidity
error NotFlashLoanModule();
```

### NotGuardian

```solidity
error NotGuardian();
```

### NotMorpho

```solidity
error NotMorpho();
```

### NotOperator

```solidity
error NotOperator();
```

### OftAlreadyRegistered

```solidity
error OftAlreadyRegistered();
```

### OftMismatch

```solidity
error OftMismatch();
```

### OftNotRegistered

```solidity
error OftNotRegistered();
```

### OngoingCooldown

```solidity
error OngoingCooldown();
```

### Paused

```solidity
error Paused();
```

### ProtectedCctpDomain

```solidity
error ProtectedCctpDomain();
```

### ProtectedChainId

```solidity
error ProtectedChainId();
```

### ProtectedGuardian

```solidity
error ProtectedGuardian();
```

### PriceFeedRouteNotRegistered

```solidity
error PriceFeedRouteNotRegistered(address token);
```

### PriceFeedStale

```solidity
error PriceFeedStale(address priceFeed, uint256 updatedAt);
```

### RecipientAlreadyWhitelisted

```solidity
error RecipientAlreadyWhitelisted();
```

### RecipientNotWhitelisted

```solidity
error RecipientNotWhitelisted();
```

### RouteAlreadyRegistered

```solidity
error RouteAlreadyRegistered();
```

### RouteNotRegistered

```solidity
error RouteNotRegistered();
```

### Suspended

```solidity
error Suspended();
```

### SwapFailed

```solidity
error SwapFailed();
```

### SwapperTargetsNotSet

```solidity
error SwapperTargetsNotSet();
```

### SweepNativeFailed

```solidity
error SweepNativeFailed();
```

### TransferFromSafeFailed

```solidity
error TransferFromSafeFailed();
```

### UnauthorizedCaller

```solidity
error UnauthorizedCaller();
```

### ZeroAddress

```solidity
error ZeroAddress();
```

### ZeroChainId

```solidity
error ZeroChainId();
```

### ZeroLzEndpointId

```solidity
error ZeroLzEndpointId();
```

### ZeroPositionId

```solidity
error ZeroPositionId();
```

### ZeroSalt

```solidity
error ZeroSalt();
```

