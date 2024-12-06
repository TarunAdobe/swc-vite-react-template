import { FC, ReactNode } from "react";
import { Tooltip as SpTooltip } from "@spectrum-web-components/tooltip";
import "@spectrum-web-components/tooltip/sp-tooltip.js";

export const Tooltip = "sp-tooltip" as unknown as FC<{ children?: ReactNode} | SpTooltip>;

export default Tooltip;