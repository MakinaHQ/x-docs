# Configure the MakinaX Module

This is a map of the parameters that shape a module's behavior: what each one does and where it is explained in depth. The conceptual pages cover the mechanics; this page is the index to them from a configuration standpoint.

Almost every parameter is set by the **Safe**. A small set belongs to the **Provider**, and bridge route/OFT registration lives at the shared-infrastructure layer. For who can set what and why, see [Permissions & Governance](/concepts/permissions-and-governance).

## Roles

| Parameter                        | What it controls                                                  |
| -------------------------------- | ----------------------------------------------------------------- |
| `addOperator` / `removeOperator` | Who may execute strategy actions (manage, swap, harvest, bridge). |
| `addGuardian` / `removeGuardian` | Who may pause the module.                                         |

## Capability surface

| Parameter                          | What it controls                                                                                                     | See                                                               |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `setOperatingMode`                 | The `OPEN` / `FENCED` / `WALLED` dial that decides which economic guards are live.                                   | [Operating Modes](/concepts/architecture/operating-modes)         |
| `setAllowedInstrRoot`              | The Merkle root of the instruction set an Operator may execute. This defines the entire Operator capability surface. | [Position Management](/concepts/architecture/position-management) |
| `setSwapperTargets`                | The approved swap targets (e.g. DEX aggregators) an Operator may route through.                                      | [Token Swaps](/concepts/architecture/swaps)                       |
| `addRecipient` / `removeRecipient` | The bridge recipient whitelist for outbound transfers.                                                               | [Token Bridging](/concepts/architecture/bridging)                 |

## Risk limits and cooldowns

These bound the economic outcome of operations in guarded modes. All loss limits are expressed in basis points and capped at 100% (10000 bps) at configuration time. A cooldown of zero disables that cooldown.

| Parameter                                                         | What it controls                                                                      | See                                                               |
| ----------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `setMaxPositionIncreaseLossBps` / `setMaxPositionDecreaseLossBps` | Value-loss tolerance when growing or shrinking a position (`WALLED`).                 | [Position Management](/concepts/architecture/position-management) |
| `setInstrCooldownDuration`                                        | Rate limit on re-running the same management script in the same direction (`WALLED`). | [Position Management](/concepts/architecture/position-management) |
| `setMaxSwapLossBps` / `setSwapCooldownDuration`                   | Swap value-loss tolerance and the single global swap cooldown (`FENCED`, `WALLED`).   | [Token Swaps](/concepts/architecture/swaps)                       |
| `setMaxBridgeLossBps` / `setBridgeCooldownDuration`               | Bridge value-loss tolerance and per-bridge cooldown (`FENCED`, `WALLED`).             | [Token Bridging](/concepts/architecture/bridging)                 |

## Pricing

| Parameter               | What it controls                                                     | See                                                         |
| ----------------------- | -------------------------------------------------------------------- | ----------------------------------------------------------- |
| `setAccountingCurrency` | The currency in which positions and loss checks are denominated.     | [Pricing & Oracles](/concepts/architecture/pricing-oracles) |
| `setFeedRoute`          | The oracle feed(s) used to price a token in the accounting currency. | [Pricing & Oracles](/concepts/architecture/pricing-oracles) |
| `setFeedStaleThreshold` | The maximum age a feed answer may have before reads revert.          | [Pricing & Oracles](/concepts/architecture/pricing-oracles) |

## Recovery

| Parameter                                                     | What it controls                                                                              |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `sweepERC20` / `sweepERC721` / `sweepERC6909` / `sweepNative` | Returns any ERC-20, ERC-721, ERC-6909, or native balance held by the module back to the Safe. |

## Provider-held parameters

These are set by the Provider, not the Safe. The Provider holds no power over strategy configuration or funds. The initial Provider and swap fee rate are fixed at deployment: supplied by the deployer on the permissioned path, or set to the factory defaults on the permissionless path. See [Module deployment](/concepts/permissions-and-governance#module-deployment).

| Parameter               | What it controls                                                                     |
| ----------------------- | ------------------------------------------------------------------------------------ |
| `setSwapFeeRate`        | The swap fee rate, capped at `1e18` (100%) so the fee never exceeds the swap output. |
| `suspend` / `unsuspend` | A halt that blocks all Operator actions, independent of the Guardian pause.          |
| `setProvider`           | Transfers the Provider role to a new address.                                        |
