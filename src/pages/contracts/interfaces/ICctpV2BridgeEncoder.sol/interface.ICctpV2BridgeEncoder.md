# ICctpV2BridgeEncoder
[Git Source](https://github.com/MakinaHQ/makina-lite/blob/626b74d20627999f2962c61cb40e282d31cd7f23/src/interfaces/ICctpV2BridgeEncoder.sol)

**Inherits:**
[IBridgeEncoder](/contracts/interfaces/IBridgeEncoder.sol/interface.IBridgeEncoder.md)


## Functions
### cctpV2TokenMessenger

Address of the CCTP TokenMessengerV2


```solidity
function cctpV2TokenMessenger() external view returns (address);
```

### getCctpDomain

EVM chain ID => CCTP domain


```solidity
function getCctpDomain(uint256 evmChainId) external view returns (uint32);
```

### setCctpDomain

Associates an EVM chain ID with a CCTP domain in the contract storage.


```solidity
function setCctpDomain(uint256 evmChainId, uint32 cctpDomain) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`evmChainId`|`uint256`|The EVM chain ID.|
|`cctpDomain`|`uint32`|The CCTP domain.|


## Events
### CctpDomainRegistered

```solidity
event CctpDomainRegistered(uint256 indexed evmChainId, uint32 indexed cctpDomain);
```

