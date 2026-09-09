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
  | { path: '/contracts/bridge-encoders/contract.AcrossV4BridgeEncoder'; render: 'static' }
  | { path: '/contracts/bridge-encoders/contract.CctpV2BridgeEncoder'; render: 'static' }
  | { path: '/contracts/bridge-encoders/contract.LayerZeroV2BridgeEncoder'; render: 'static' }
  | { path: '/contracts/changelog'; render: 'static' }
  | { path: '/contracts/contract.MakinaXModule'; render: 'static' }
  | { path: '/contracts/deployments'; render: 'static' }
  | { path: '/contracts/factory/contract.ModuleFactory'; render: 'static' }
  | { path: '/contracts/flash-loans/contract.FlashLoanModule'; render: 'static' }
  | { path: '/contracts'; render: 'static' }
  | { path: '/contracts/interfaces/interface.AggregatorV2V3Interface'; render: 'static' }
  | { path: '/contracts/interfaces/interface.IAcrossV4BridgeEncoder'; render: 'static' }
  | { path: '/contracts/interfaces/interface.IAcrossV4SpokePool'; render: 'static' }
  | { path: '/contracts/interfaces/interface.IBridgeComponent'; render: 'static' }
  | { path: '/contracts/interfaces/interface.IBridgeEncoder'; render: 'static' }
  | { path: '/contracts/interfaces/interface.ICctpV2BridgeEncoder'; render: 'static' }
  | { path: '/contracts/interfaces/interface.ICctpV2TokenMessenger'; render: 'static' }
  | { path: '/contracts/interfaces/interface.IFlashLoanModule'; render: 'static' }
  | { path: '/contracts/interfaces/interface.ILayerZeroV2BridgeEncoder'; render: 'static' }
  | { path: '/contracts/interfaces/interface.IMakinaXContext'; render: 'static' }
  | { path: '/contracts/interfaces/interface.IMakinaXGovernable'; render: 'static' }
  | { path: '/contracts/interfaces/interface.IMakinaXModule'; render: 'static' }
  | { path: '/contracts/interfaces/interface.IMakinaXRegistry'; render: 'static' }
  | { path: '/contracts/interfaces/interface.IModuleFactory'; render: 'static' }
  | { path: '/contracts/interfaces/interface.IMorpho'; render: 'static' }
  | { path: '/contracts/interfaces/interface.IMorphoFlashLoanCallback'; render: 'static' }
  | { path: '/contracts/interfaces/interface.IOFT'; render: 'static' }
  | { path: '/contracts/interfaces/interface.IOracleRegistry'; render: 'static' }
  | { path: '/contracts/interfaces/interface.ISafe'; render: 'static' }
  | { path: '/contracts/interfaces/interface.ISwapComponent'; render: 'static' }
  | { path: '/contracts/interfaces/interface.IWeirollComponent'; render: 'static' }
  | { path: '/contracts/interfaces/interface.IWeirollVM'; render: 'static' }
  | { path: '/contracts/libraries/library.DecimalsUtils'; render: 'static' }
  | { path: '/contracts/libraries/library.Errors'; render: 'static' }
  | { path: '/contracts/module-components/abstract.BridgeComponent'; render: 'static' }
  | { path: '/contracts/module-components/abstract.OracleRegistry'; render: 'static' }
  | { path: '/contracts/module-components/abstract.SwapComponent'; render: 'static' }
  | { path: '/contracts/module-components/abstract.WeirollComponent'; render: 'static' }
  | { path: '/contracts/registry/contract.MakinaXRegistry'; render: 'static' }
  | { path: '/contracts/security'; render: 'static' }
  | { path: '/contracts/utils/abstract.MakinaXContext'; render: 'static' }
  | { path: '/contracts/utils/abstract.MakinaXGovernable'; render: 'static' }
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
