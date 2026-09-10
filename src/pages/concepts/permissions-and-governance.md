# Permissions & Governance

MakinaX has two distinct access-control systems, and keeping them separate is essential to understanding the trust model.

- **Module-level roles** govern a single [`MakinaXModule`](/contracts/contract.MakinaXModule) and its Safe. They are simple address mappings and modifiers, implemented in [`MakinaXGovernable`](/contracts/utils/abstract.MakinaXGovernable).
- **Infrastructure roles** govern the shared contracts (`MakinaXRegistry`, `ModuleFactory`, and the bridge encoders) through an [OpenZeppelin AccessManager](https://docs.openzeppelin.com/contracts/5.x/api/access#AccessManager).

The two domains meet only at well-defined seams: modules read shared addresses from the registry, the factory mints modules (and, on the permissionless path, fixes their Provider and swap fee rate), and bridge encoders read the calling module's operating mode.

The authoritative, exhaustive list of powers is `PERMISSIONS.md` in the protocol repository. This page is the conceptual model.

## Module-level roles

```mermaid
flowchart TB
    Provider["Provider<br/>protocol service account"]:::prov
    Safe["Safe<br/>owner &amp; configuration authority"]:::safe
    Operator["Operator(s)<br/>strategy execution"]:::op
    Guardian["Guardian(s)<br/>emergency pause"]:::guard

    Provider -- "fee rate, suspend / unsuspend" --> Module["MakinaXModule"]:::core
    Safe -- "adds / removes" --> Operator
    Safe -- "adds / removes" --> Guardian
    Safe -- "sets mode, root, limits, routes, recipients" --> Module
    Operator -- "manage, swap, harvest, bridge" --> Module
    Guardian -- "pause / unpause" --> Module

    Provider ~~~ Guardian

    classDef safe fill:#1f6feb,stroke:#1f6feb,color:#fff;
    classDef prov fill:#8957e5,stroke:#8957e5,color:#fff;
    classDef op fill:#238636,stroke:#238636,color:#fff;
    classDef guard fill:#9e6a03,stroke:#9e6a03,color:#fff;
    classDef core fill:#30363d,stroke:#6e7681,color:#fff;
```

### Safe

**Fully trusted.** The Safe is the ultimate owner of the module and all managed assets, and the sole authority over configuration and risk parameters. Its powers include adding and removing operators and guardians, setting the operating mode, setting the allowed instruction root, setting the accounting currency and price feed routes, setting every loss limit and cooldown (position, swap, bridge), setting swapper targets, whitelisting bridge recipients, and sweeping ERC-20, ERC-721, ERC-6909, or native balances held by the module back to itself.

The Safe is **always a Guardian** and cannot remove itself from that role, so the owner can always pause. The Safe is set at initialization and is the trust anchor of the module.

### Provider

**Fully trusted.** The Provider is the protocol's service account. It sets the swap fee rate, can suspend and unsuspend the module, and can transfer its own role to a new address. The initial Provider is fixed at deployment: supplied by the deployer on the permissioned path, or taken from the factory's default on the permissionless path (see [Module deployment](#module-deployment)). It cannot change strategy configuration, and it cannot move funds the Safe already holds or block the Safe from reaching them. It is, however, fully trusted for swap proceeds: the fee rate can be set as high as 100% and applies to the output after the loss check, so the Provider can in principle capture a swap's entire output. It is a service-level actor, not an owner.

### Operators

**Partially trusted in `FENCED` and `WALLED`, fully trusted in `OPEN`.** Operators execute strategy actions: accounting, position management, swaps, harvests, and outbound bridge transfers. They hold no configuration power, and every action requires the module to be operational (not paused, not suspended). Operators supply raw calldata, which the module treats as adversarial and bounds by Merkle gating and the mode guards.

### Guardians

**Partially trusted.** Guardians are emergency contacts that can pause and unpause the module. The Safe is a permanent Guardian, and additional guardians can be added and removed by the Safe.

## Infrastructure roles

All protocol-wide restricted actions are gated by a single `AccessManager` per chain, configured at deployment. Its role IDs mirror those used by Makina Core. The addresses holding these roles are fully trusted.

Each role can carry an **execution delay** (a timelock between scheduling a restricted action and executing it) and a **guardian** that can cancel a scheduled action during that window. Role holders and their execution delays are set at deployment. In production, the DAO multisig holds the admin, configuration, deployment, and upgrade roles, and the Security Council multisig holds `GUARDIAN_ROLE`, the guardian of every other role except `ADMIN_ROLE`, which has none.

| Role                       | id  | Authority in MakinaX                                                                                                                                                                                        | Holder, execution delay    |
| -------------------------- | --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `ADMIN_ROLE`               | 0   | Super admin of the AccessManager: configure roles, delays, and guardians. Has **no guardian**, so its actions cannot be cancelled by anyone else.                                                           | DAO: 2-day delay           |
| `INFRA_CONFIG_ROLE`        | 1   | Set the registry's fee collector, configure the bridge encoders (routes, CCTP domains, endpoint IDs, OFTs), and set the factory's default Provider and default swap fee rate for permissionless deployment. | DAO: 1-day delay           |
| `STRATEGY_DEPLOYMENT_ROLE` | 2   | Deploy new modules via the `ModuleFactory` with caller-supplied service parameters, and enable or disable permissionless deployment.                                                                        | DAO: no delay              |
| `INFRA_UPGRADE_ROLE`       | 6   | Upgrade the infrastructure proxies through the associated ProxyAdmin, and set the registry's component addresses (factory, module implementation, flash-loan module, bridge encoders).                      | DAO: 2-day delay           |
| `GUARDIAN_ROLE`            | 7   | Cancel operations scheduled under any other role. It is the guardian of every role except `ADMIN_ROLE`.                                                                                                     | Security Council: no delay |

These powers are protocol-wide. A change to a shared address or an encoder registration affects every module that uses it.

:::note[How the infrastructure timelock works]
Operations under a role with a non-zero delay are queued and visible on-chain during the delay window, where the role's guardian (the Security Council, holding `GUARDIAN_ROLE`) can cancel them. `ADMIN_ROLE` has no guardian, so its delay is the only on-chain barrier on admin operations.
:::

### Module deployment

The `ModuleFactory` exposes two deployment paths. Both deploy the same module, bound to the Safe named in the parameters, and the Safe holds the same powers afterwards.

- **Permissioned.** An address holding `STRATEGY_DEPLOYMENT_ROLE` deploys the module and supplies every parameter, including the service parameters: the initial Provider and swap fee rate.
- **Permissionless.** While enabled, anyone can deploy a module. The caller supplies the strategy and risk parameters (Safe, operating mode, instruction root, loss limits, cooldowns), and the factory enforces its default Provider and default swap fee rate as the service parameters. `STRATEGY_DEPLOYMENT_ROLE` enables or disables this path, and `INFRA_CONFIG_ROLE` sets the defaults.

## Upgradeability

- **Modules** are ERC-1167 minimal clones of a fixed implementation. Each clone binds its implementation in its own bytecode. Changing the registry's `moduleImplementation` affects only **future** clones, never existing modules.
- **Infrastructure contracts** (registry, factory, encoders) are upgradeable proxies, upgraded by the `INFRA_UPGRADE_ROLE`.

:::tip[Next]
See how these roles and powers translate into concrete risks in the [Risk Model](/concepts/risk-model).
:::
