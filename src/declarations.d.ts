/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ButtonProperties } from "@spectrum-web-components/button/src/Button.js";

declare module 'react' {
  namespace JSX {
      interface IntrinsicElements {
          'sp-theme': any
      }

      interface IntrinsicElements {
        'sp-button': ButtonProperties
      } 
  }
}
export {};