---
sidebar_position: 1
sidebar_label: Overview
---

# Contracts

This section is the reference for the MakinaX smart contracts: the core [`MakinaXModule`](/contracts/MakinaXModule.sol/contract.MakinaXModule), its module components (position management, swaps, bridging, and the oracle registry), the shared infrastructure ([`MakinaXRegistry`](/contracts/registry/MakinaXRegistry.sol/contract.MakinaXRegistry), [`ModuleFactory`](/contracts/factory/ModuleFactory.sol/contract.ModuleFactory), [`FlashLoanModule`](/contracts/flash-loans/FlashLoanModule.sol/contract.FlashLoanModule)), and the bridge encoders.

## Architecture Overview

The shared infrastructure is deployed once per MakinaX deployment. The [`ModuleFactory`](/contracts/factory/ModuleFactory.sol/contract.ModuleFactory) reads the implementation address from the [`MakinaXRegistry`](/contracts/registry/MakinaXRegistry.sol/contract.MakinaXRegistry) and deploys each module as an [ERC-1167](https://eips.ethereum.org/EIPS/eip-1167) minimal clone that delegatecalls into the [`MakinaXModule`](/contracts/MakinaXModule.sol/contract.MakinaXModule) implementation. Each clone is installed on its own Safe and resolves the rest of its dependencies (the [`FlashLoanModule`](/contracts/flash-loans/FlashLoanModule.sol/contract.FlashLoanModule), the bridge encoders, the fee collector) through the registry at runtime.

```mermaid
flowchart TB
    subgraph Shared["Shared infrastructure (deployed once per deployment)"]
        direction TB
        Factory["ModuleFactory"]:::infra
        Registry["MakinaXRegistry"]:::infra
        FLM["FlashLoanModule"]:::infra
        Encoders["Bridge Encoders (singletons)"]:::infra
    end

    Safe["Safe multisig<br/>owner &amp; custodian of funds"]:::core
    Module["MakinaXModule clone<br/>(ERC-1167 minimal proxy)"]:::core
    Ext[(External protocols<br/>Morpho · DEX aggregators · bridges · Chainlink)]:::ext

    Factory == "clones &amp; registers" ==> Module
    Safe -- "installs &amp; configures" --> Module
    Module -- "pulls &amp; returns funds" --> Safe
    Module -- "flash-loan-assisted management" --> FLM
    Module -- "encode transfer" --> Encoders
    FLM -- "verify caller" --> Factory
    FLM -- "take flashloan" --> Ext
    Module <--> Ext

    %% invisible link keeps Registry on the top row, beside the factory
    Registry ~~~ Module

    classDef core fill:#1f6feb,stroke:#1f6feb,color:#fff;
    classDef infra fill:#8957e5,stroke:#8957e5,color:#fff;
    classDef ext fill:#30363d,stroke:#6e7681,color:#fff;
```

For the conceptual model behind these contracts, start with the [Concepts](/concepts/introduction) section. For onchain addresses, see [Deployments](/contracts/deployments).
