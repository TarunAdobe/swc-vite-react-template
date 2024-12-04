import './App.css';

import { useEffect, useState } from 'react';

import '@spectrum-web-components/theme/sp-theme.js';

import '@spectrum-web-components/theme/scale-large-core-tokens.js';
import '@spectrum-web-components/theme/scale-medium-core-tokens.js';
import '@spectrum-web-components/theme/theme-dark-core-tokens.js';
import '@spectrum-web-components/theme/theme-light-core-tokens.js';

import '@spectrum-web-components/theme/spectrum-two/scale-large-core-tokens.js';
import '@spectrum-web-components/theme/spectrum-two/scale-medium-core-tokens.js';
import '@spectrum-web-components/theme/spectrum-two/theme-dark-core-tokens.js';
import '@spectrum-web-components/theme/spectrum-two/theme-light-core-tokens.js';

/** Custom Components */
import { Header } from './components/Header/header';
import { Sidebar } from './components/Sidebar/sidebar';

function App() {

  useEffect(() => {

    // save the theme settings to local storage
    const color = localStorage.getItem('color');
    const system = localStorage.getItem('system');
    const scale = localStorage.getItem('scale');

    if (color && system && scale) {
      setColor(color);
      setSystem(system);
      setScale(scale);
    }

  }, []);

  const [color, setColor] = useState('light');
  const [system, setSystem] = useState('spectrum-two');
  const [scale, setScale] = useState('medium');

  // Toast
  const [showToast, setShowToast] = useState(false);
  const [toastContent, setToastContent] = useState('');

  return (
    <sp-theme scale={scale} system={system} color={color}>
      <div id="mainArea">
        <Header
          updateThemeProps={(color: string, system: string, scale: string) => {
            setColor(color);
            setSystem(system);
            setScale(scale);

            localStorage.setItem('color', color);
            localStorage.setItem('system', system);
            localStorage.setItem('scale', scale);

          }}
          color={color}
          system={system}
          scale={scale}
        />
        <Sidebar onToastOpen={(msg) => {
          setShowToast(true);
          setToastContent(msg);
        }} />
        <sp-toast open={showToast} variant="info" onclose={() => setShowToast(false)}>
          {toastContent}
        </sp-toast>
      </div>
    </sp-theme >
  );
}

export default App;
