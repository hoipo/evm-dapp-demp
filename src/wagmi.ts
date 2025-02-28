import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import * as chains from 'viem/chains';

export const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  // @ts-ignore
  chains: Object.values(chains),
  ssr: true,
});
