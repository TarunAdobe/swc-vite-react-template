import { FC, ReactNode } from "react";

import "@spectrum-web-components/theme/sp-theme.js";

import "@spectrum-web-components/theme/scale-large-core-tokens.js";
import "@spectrum-web-components/theme/scale-medium-core-tokens.js";
import "@spectrum-web-components/theme/theme-dark-core-tokens.js";
import "@spectrum-web-components/theme/theme-light-core-tokens.js";

import "@spectrum-web-components/theme/spectrum-two/scale-large-core-tokens.js";
import "@spectrum-web-components/theme/spectrum-two/scale-medium-core-tokens.js";
import "@spectrum-web-components/theme/spectrum-two/theme-dark-core-tokens.js";
import "@spectrum-web-components/theme/spectrum-two/theme-light-core-tokens.js";

import { Theme } from "@spectrum-web-components/theme";

/**
 * This file should always be implemented by React application developers as it is up to them to decide how to handle the theme.
 */
const SWC_NAME = "sp-theme";

export const SpTheme = SWC_NAME as unknown as FC<
  { children?: ReactNode } | Theme
>;

export default SpTheme;
