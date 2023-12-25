// App.tsx
import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { AndroidLarge1 } from './components/AndroidLarge1/AndroidLarge1.js';
import { AndroidLarge12 } from './components/AndroidLarge1/AndroidLarge12/AndroidLarge12';

interface Props {
  className?: string;
}

const App: FC<Props> = memo(function App(props = {}) {
  const desiredTargetPosition = 1; // Replace this with your desired value

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {/* Other components or content */}
      <AndroidLarge12 targetPosition={desiredTargetPosition} />
      {/* Other components or content */}
    </div>
  );
});

export default App;
