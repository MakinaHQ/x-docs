# IOFT
[Git Source](https://github.com/MakinaHQ/makina-lite/blob/626b74d20627999f2962c61cb40e282d31cd7f23/src/interfaces/IOFT.sol)


## Functions
### token


```solidity
function token() external view returns (address);
```

### approvalRequired


```solidity
function approvalRequired() external view returns (bool);
```

### quoteOFT


```solidity
function quoteOFT(SendParam calldata _sendParam)
    external
    view
    returns (OFTLimit memory, OFTFeeDetail[] memory oftFeeDetails, OFTReceipt memory);
```

### quoteSend


```solidity
function quoteSend(SendParam calldata _sendParam, bool _payInLzToken) external view returns (MessagingFee memory);
```

### send


```solidity
function send(SendParam calldata _sendParam, MessagingFee calldata _fee, address _refundAddress)
    external
    payable
    returns (MessagingReceipt memory, OFTReceipt memory);
```

## Structs
### MessagingReceipt

```solidity
struct MessagingReceipt {
    bytes32 guid;
    uint64 nonce;
    MessagingFee fee;
}
```

### MessagingFee

```solidity
struct MessagingFee {
    uint256 nativeFee;
    uint256 lzTokenFee;
}
```

### SendParam

```solidity
struct SendParam {
    uint32 dstEid;
    bytes32 to;
    uint256 amountLD;
    uint256 minAmountLD;
    bytes extraOptions;
    bytes composeMsg;
    bytes oftCmd;
}
```

### OFTLimit

```solidity
struct OFTLimit {
    uint256 minAmountLD;
    uint256 maxAmountLD;
}
```

### OFTReceipt

```solidity
struct OFTReceipt {
    uint256 amountSentLD;
    uint256 amountReceivedLD;
}
```

### OFTFeeDetail

```solidity
struct OFTFeeDetail {
    int256 feeAmountLD;
    string description;
}
```

