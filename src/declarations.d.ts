/* eslint-disable  @typescript-eslint/no-explicit-any */
import type { ButtonProperties } from "@spectrum-web-components/button/src/Button.js";

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {

      'sp-button': ButtonProperties;

      'sp-theme': any;
      'sp-avatar': any;
      'sp-action-button': any;
      'overlay-trigger': any;
      'sp-popover': any;
      'sp-dialog': any;
      'sp-picker': any;
      'sp-overlay': any;
      'sp-icon': any;
      'sp-light-icon': any;
      'sp-tooltip': any;
      'sp-dialog-wrapper': any;
      'sp-field-label': any;
      'sp-textfield': any;
      'sp-menu-item': any;
      'sp-accordion': any;
      'sp-accordion-item': any;
      'sp-action-group': any;
      'sp-dropzone': any;
      'sp-switch': any;
      'sp-contextual-help': any;
      'sp-slider': any;
      'sp-divider': any;
      'sp-toast': any;
      'sp-icon-light': any;
    }
  }
}