// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages } from 'waku/router'

// prettier-ignore
type Page =
  | { path: '/concepts/architecture/bridging'; render: 'static' }
  | { path: '/concepts/architecture/operating-modes'; render: 'static' }
  | { path: '/concepts/architecture/overview'; render: 'static' }
  | { path: '/concepts/architecture/position-management'; render: 'static' }
  | { path: '/concepts/architecture/pricing-oracles'; render: 'static' }
  | { path: '/concepts/architecture/swaps'; render: 'static' }
  | { path: '/concepts/introduction'; render: 'static' }
  | { path: '/concepts/permissions-and-governance'; render: 'static' }
  | { path: '/concepts/risk-model'; render: 'static' }
  | { path: '/configure'; render: 'static' }
  | { path: '/contracts/MakinaXModule.sol/contract.MakinaXModule'; render: 'static' }
  | { path: '/contracts/bridge-encoders/AcrossV4BridgeEncoder.sol/contract.AcrossV4BridgeEncoder'; render: 'static' }
  | { path: '/contracts/bridge-encoders/CctpV2BridgeEncoder.sol/contract.CctpV2BridgeEncoder'; render: 'static' }
  | { path: '/contracts/bridge-encoders/LayerZeroV2BridgeEncoder.sol/contract.LayerZeroV2BridgeEncoder'; render: 'static' }
  | { path: '/contracts/deployments'; render: 'static' }
  | { path: '/contracts/factory/ModuleFactory.sol/contract.ModuleFactory'; render: 'static' }
  | { path: '/contracts/flash-loans/FlashLoanModule.sol/contract.FlashLoanModule'; render: 'static' }
  | { path: '/contracts'; render: 'static' }
  | { path: '/contracts/interfaces/AggregatorV2V3Interface.sol/interface.AggregatorV2V3Interface'; render: 'static' }
  | { path: '/contracts/interfaces/IAcrossV4BridgeEncoder.sol/interface.IAcrossV4BridgeEncoder'; render: 'static' }
  | { path: '/contracts/interfaces/IAcrossV4SpokePool.sol/interface.IAcrossV4SpokePool'; render: 'static' }
  | { path: '/contracts/interfaces/IBridgeComponent.sol/interface.IBridgeComponent'; render: 'static' }
  | { path: '/contracts/interfaces/IBridgeEncoder.sol/interface.IBridgeEncoder'; render: 'static' }
  | { path: '/contracts/interfaces/ICctpV2BridgeEncoder.sol/interface.ICctpV2BridgeEncoder'; render: 'static' }
  | { path: '/contracts/interfaces/ICctpV2TokenMessenger.sol/interface.ICctpV2TokenMessenger'; render: 'static' }
  | { path: '/contracts/interfaces/IFlashLoanModule.sol/interface.IFlashLoanModule'; render: 'static' }
  | { path: '/contracts/interfaces/ILayerZeroV2BridgeEncoder.sol/interface.ILayerZeroV2BridgeEncoder'; render: 'static' }
  | { path: '/contracts/interfaces/IMakinaXContext.sol/interface.IMakinaXContext'; render: 'static' }
  | { path: '/contracts/interfaces/IMakinaXGovernable.sol/interface.IMakinaXGovernable'; render: 'static' }
  | { path: '/contracts/interfaces/IMakinaXModule.sol/interface.IMakinaXModule'; render: 'static' }
  | { path: '/contracts/interfaces/IMakinaXRegistry.sol/interface.IMakinaXRegistry'; render: 'static' }
  | { path: '/contracts/interfaces/IModuleFactory.sol/interface.IModuleFactory'; render: 'static' }
  | { path: '/contracts/interfaces/IMorpho.sol/interface.IMorpho'; render: 'static' }
  | { path: '/contracts/interfaces/IMorphoFlashLoanCallback.sol/interface.IMorphoFlashLoanCallback'; render: 'static' }
  | { path: '/contracts/interfaces/IOFT.sol/interface.IOFT'; render: 'static' }
  | { path: '/contracts/interfaces/IOracleRegistry.sol/interface.IOracleRegistry'; render: 'static' }
  | { path: '/contracts/interfaces/ISafe.sol/interface.ISafe'; render: 'static' }
  | { path: '/contracts/interfaces/ISwapComponent.sol/interface.ISwapComponent'; render: 'static' }
  | { path: '/contracts/interfaces/IWeirollComponent.sol/interface.IWeirollComponent'; render: 'static' }
  | { path: '/contracts/interfaces/IWeirollVM.sol/interface.IWeirollVM'; render: 'static' }
  | { path: '/contracts/libraries/DecimalsUtils.sol/library.DecimalsUtils'; render: 'static' }
  | { path: '/contracts/libraries/Errors.sol/library.Errors'; render: 'static' }
  | { path: '/contracts/module-components/BridgeComponent.sol/abstract.BridgeComponent'; render: 'static' }
  | { path: '/contracts/module-components/OracleRegistry.sol/abstract.OracleRegistry'; render: 'static' }
  | { path: '/contracts/module-components/SwapComponent.sol/abstract.SwapComponent'; render: 'static' }
  | { path: '/contracts/module-components/WeirollComponent.sol/abstract.WeirollComponent'; render: 'static' }
  | { path: '/contracts/registry/MakinaXRegistry.sol/contract.MakinaXRegistry'; render: 'static' }
  | { path: '/contracts/security'; render: 'static' }
  | { path: '/contracts/utils/MakinaXContext.sol/abstract.MakinaXContext'; render: 'static' }
  | { path: '/contracts/utils/MakinaXGovernable.sol/abstract.MakinaXGovernable'; render: 'static' }
  | { path: '/'; render: 'static' }

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>
  }
  interface CreatePagesConfig {
    pages: Page
  }
}
