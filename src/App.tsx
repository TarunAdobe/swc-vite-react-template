import "./App.css";

import { useEffect, useState } from "react";
import { Color, Scale, SystemVariant } from "@spectrum-web-components/theme";

/** Custom Components */
import { Header } from "./components/Header/header";
import { Sidebar } from "./components/Sidebar/sidebar";

/** SWC Typing */
import { SpTheme } from "./swc-typing/SpTheme";
import { Toast } from "./swc-typing/Toast";

function App() {
  useEffect(() => {
    // save the theme settings to local storage
    const color = localStorage.getItem("color") as Color;
    const system = localStorage.getItem("system") as SystemVariant;
    const scale = localStorage.getItem("scale") as Scale;

    if (color && system && scale) {
      setColor(color);
      setSystem(system);
      setScale(scale);
    }
  }, []);

  const [color, setColor] = useState<Color>("light");
  const [system, setSystem] = useState<SystemVariant>("spectrum-two");
  const [scale, setScale] = useState<Scale>("medium");

  // Toast
  const [showToast, setShowToast] = useState(false);
  const [toastContent, setToastContent] = useState("");

  return (
    <SpTheme scale={scale} system={system} color={color} dir="ltr">
      <div id="mainArea">
        <Header
          updateThemeProps={(
            color: Color,
            system: SystemVariant,
            scale: Scale
          ) => {
            setColor(color);
            setSystem(system);
            setScale(scale);

            localStorage.setItem("color", color);
            localStorage.setItem("system", system);
            localStorage.setItem("scale", scale);
          }}
          color={color}
          system={system}
          scale={scale}
        />
        <Sidebar
          onToastOpen={(msg) => {
            setShowToast(true);
            setToastContent(msg);
          }}
        />
        <Toast
          open={showToast}
          variant="info"
          onclose={() => setShowToast(false)}
        >
          {toastContent}
        </Toast>
      </div>
      <div id="contentArea">Hello World</div>
    </SpTheme>
  );
}

export default App;
