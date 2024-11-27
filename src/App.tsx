import './App.css';

import { useState } from 'react';

import '@spectrum-web-components/theme/sp-theme.js';
import '@spectrum-web-components/theme/scale-medium-core-tokens.js';
import '@spectrum-web-components/theme/theme-dark-core-tokens.js';

import '@spectrum-web-components/button/sp-button.js';

function App() {
  const [count, setCount] = useState(0);

  return (
    <sp-theme scale="medium" system="spectrum" color="dark">
      <div id="mainArea">
        <p>Count: {count}</p>
        <sp-button variant="cta" onClick={() => setCount(count + 1)}>
          Click me!
        </sp-button>
      </div>
    </sp-theme>
  );
}

export default App;
