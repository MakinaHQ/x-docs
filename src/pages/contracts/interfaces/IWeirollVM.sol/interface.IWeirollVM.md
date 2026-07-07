# IWeirollVM
[Git Source](https://github.com/MakinaHQ/makina-x/blob/43737945b99e87740e2a58b7a320c78a5d628e4b/src/interfaces/IWeirollVM.sol)


## Functions
### execute

Executes a list of commands on the VM.


```solidity
function execute(bytes32[] calldata commands, bytes[] memory state) external returns (bytes[] memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`commands`|`bytes32[]`|The list of commands to execute.|
|`state`|`bytes[]`|The initial state to pass to the VM.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bytes[]`|outState The new state after executing the commands.|


