# IBridgeEncoder
[Git Source](https://github.com/MakinaHQ/makina-x/blob/43737945b99e87740e2a58b7a320c78a5d628e4b/src/interfaces/IBridgeEncoder.sol)


## Functions
### getBridgeTransferData

Returns targets, value, and calldata to execute a bridge transfer.

Intended to be called only by a MakinaXModule instance, from which implementations may read caller state via `msg.sender`.


```solidity
function getBridgeTransferData(IBridgeComponent.BridgeOrder calldata order)
    external
    view
    returns (address approvalTarget, address executionTarget, uint256 value, bytes memory cd);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`order`|`IBridgeComponent.BridgeOrder`|The bridge transfer params.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`approvalTarget`|`address`|The address of the approval target.|
|`executionTarget`|`address`|The address of the execution target.|
|`value`|`uint256`|The value to pass along with the calldata.|
|`cd`|`bytes`|The calldata to execute.|


