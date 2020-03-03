import { Config } from '@stencil/core'
import { reactOutputTarget } from '@stencil/react-output-target'

export const config: Config = {
  namespace: 'venice-jsm',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: 'venice-jsm',
      proxiesFile: '../venice-react/src/components.ts',
    }),
  ]
};
