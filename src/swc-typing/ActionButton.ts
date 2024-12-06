import { FC, ReactNode } from "react";

import "@spectrum-web-components/action-button/sp-action-button.js";

import { ActionButton as SpActionButton } from "@spectrum-web-components/action-button";

const SWC_NAME = "sp-action-button";

export const ActionButton = SWC_NAME as unknown as FC<{ children?: ReactNode } | SpActionButton>;

export default ActionButton;
