import { FC } from "react";
import type { LightIcon as LightIconTag } from "@spectrum-web-components/icons-workflow";
import { IconLight } from "@spectrum-web-components/icons-workflow/src/elements/IconLight.d.ts";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-light.js";

const SWC_NAME = "sp-icon-light";

export const LightIcon = SWC_NAME as unknown as FC<typeof LightIconTag | Partial<IconLight>>;
