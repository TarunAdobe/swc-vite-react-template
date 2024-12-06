import { FC, ReactNode } from "react";
import { Toast as SpToast } from "@spectrum-web-components/toast";

import '@spectrum-web-components/toast/sp-toast.js';

const SWC_NAME = "sp-toast";

export const Toast = SWC_NAME as unknown as FC<{ children?: ReactNode } | SpToast>;

export default Toast;
