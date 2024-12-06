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

import '@spectrum-web-components/button/sp-button.js';

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

  return (
    <sp-theme scale={scale} system={system} color={color}>
      <div id="mainArea">
        <sp-button variant='cta' pending={false}>Hello World!</sp-button>
      </div>
    </sp-theme >
  );
}

export default App;
