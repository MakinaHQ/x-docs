# IBridgeEncoder
[Git Source](https://github.com/MakinaHQ/makina-lite/blob/626b74d20627999f2962c61cb40e282d31cd7f23/src/interfaces/IBridgeEncoder.sol)


## Functions
### getBridgeTransferData

Returns targets, value, and calldata to execute a bridge transfer.

Intended to be called only by a MakinaLiteModule instance, from which implementations may read caller state via `msg.sender`.


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


