# Introduction

## What is Makina Lite?

Makina Lite is a **Safe module for constrained, automated execution of DeFi strategies**.

A team that already runs capital from a [Safe](https://safe.global/) multisig installs the Makina Lite module on top of that Safe. The module is granted module-execution rights, which let it act on the Safe's behalf without collecting a fresh multisig signature for every action. In exchange, the module never holds the funds itself and can only perform actions that the Safe has reviewed and pre-approved. The Safe stays the owner and custodian of every asset.

In short, Makina Lite turns a Safe into a strategy account where a delegated **Operator** can manage positions, swap tokens, harvest rewards, and bridge assets, but only inside boundaries the Safe sets and can revoke at any time.

## What problem does it solve?

Running an active DeFi strategy from a multisig forces an uncomfortable choice.

- **Sign everything.** The Safe signers approve each rebalance, swap, and bridge by hand. This is safe but slow, and it does not scale to a strategy that must react to markets continuously.
- **Hand over a hot key.** The Safe gives a single operator key broad spending power. This is fast but trusts that key completely, with no on-chain limit on where funds can go.

Makina Lite enables Operators to execute day to day without per-action signatures, always confined to the actions the Safe has pre-approved. How much further their autonomy is constrained, including limits on where funds can move and how much value an action may lose, depends on the operating mode the Safe sets. Every Operator capability is bounded on-chain by a pre-approved instruction set and a configurable risk policy, and the Safe can pause, suspend, retune, or fully disable the module at any moment.

## How it relates to Makina

Makina Lite and the Makina protocol share a common lineage, and each is purpose-built for a different context. Makina is infrastructure for tokenized, multi-chain strategies, where external users deposit into a Machine, receive a share token, and a governance stack bounds an Operator who deploys capital across per-chain Calibers. It is built on a Weiroll-based execution engine, pre-approved instructions verified against a Merkle root, and oracle-priced loss checks. Makina Lite applies those same foundations to a team running its own capital from a single Safe. Here the principals are the Safe owners themselves, so the trust model is between a Safe and its own Operators rather than between a fund and its depositors.

Because the two address different problems, their vocabularies differ. Concepts such as Machines, Calibers, shares, AUM, Hub and Spoke chains, the Risk Manager, and Recovery Mode belong to Makina's depositor-facing fund model and have no counterpart in Makina Lite. This documentation describes Makina Lite on its own terms.

## Design principles

- **The Safe owns everything.** The module is an automation layer, never a custodian. Funds live on the Safe between operations and return to it after each one.
- **Pre-approved actions only.** Every strategy instruction is committed in advance as a leaf in a Merkle tree whose root the Safe sets. Proof verification is enforced in all operating modes.
- **Bounded outcomes, not trusted inputs.** The module has the capability to bound the measured outcome of operations (value loss, minimum output, cooldowns).
- **Defense in depth.** Merkle gating, value-loss limits, per-surface cooldowns, recipient whitelists, an operating-mode dial, and pausing constrain Operator actions at independent layers.
- **The protocol protects the Safe from its Operators, not the Safe from itself.** A Safe that sets a permissive instruction root or selects the `OPEN` mode is voluntarily widening Operator power. That is an owner decision, by design.

## Who this documentation is for

These docs map out how Makina Lite works for everyone who interacts with it.

- **Safe owners and managers** deciding how tightly to constrain a strategy.
- **Operators** who execute strategies and need to know the limits they run inside.
- **Integrators** building tooling, instruction sets, or accounting on top of a module.
- **Auditors** who want the trust model, invariants, and edge cases before reading the contracts.

The goal here is conceptual understanding. For function-level detail, storage layouts, and events, see the [Contracts](/contracts) reference.
