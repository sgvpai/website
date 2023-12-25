import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './AndroidLarge1.module.css';
import { AndroidLarge12 } from './AndroidLarge12/AndroidLarge12.js';

interface Props {
  className?: string;
}
/* @figmaId 100:69 */
export const AndroidLarge1: FC<Props> = memo(function AndroidLarge1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <AndroidLarge12 targetPosition={0} />
    </div>
  );
});
