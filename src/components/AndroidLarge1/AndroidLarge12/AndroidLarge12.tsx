import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Rectangle1 } from '../Rectangle1/Rectangle1.js';
import classes from './AndroidLarge12.module.css';
import { Polygon1Icon } from './Polygon1Icon.js';
import { Polygon2Icon } from './Polygon2Icon.js';
import { Polygon3Icon } from './Polygon3Icon.js';
import { Polygon4Icon } from './Polygon4Icon.js';
import { Rectangle4Icon } from './Rectangle4Icon.js';

// AndroidLarge12.tsx
interface Props {
  className?: string;
  targetPosition: number;
}



/* @figmaId 100:9 */
export const AndroidLarge12: FC<Props> = memo(function AndroidLarge12(props) {
  const { targetPosition, ...restProps } = props;

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Rectangle1 className={classes.rectangle1} />
      <div className={classes.sGVPLogo_White2}></div>
      <div className={classes.cARNIVAL}>CARNIVAL</div>
      <div className={classes.sGVP}>S.G.V.P.</div>
      <div className={classes.rectangle10}></div>
      <div className={classes.welcomeToSGVPInternationalScho}>
        <div className={classes.textBlock}>Welcome to SGVP International School:</div>
        <div className={classes.textBlock2}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>
              Nestled in the heart of Ahmedabad, SGVP International School stands as a beacon of academic brilliance,
              innovation, and holistic development. Established with a vision to nurture young minds and inspire a love
              for learning, SGVP is more than just an institution; it is a vibrant community committed to shaping the
              leaders and change makers of tomorrow.
            </span>
          </p>
        </div>
      </div>
      <div className={classes._2DGUIDE}>2D GUIDE</div>
      <div className={classes._3DGUIDE}>3D GUIDE</div>
      <div className={classes.polygon1}>
        <Polygon1Icon className={classes.icon} targetPosition={targetPosition} />
      </div>
      <div className={classes.polygon3}>
        <Polygon3Icon className={classes.icon2} />
      </div>
      <div className={classes.rectangle4}>
        <Rectangle4Icon className={classes.icon3} />
      </div>
      <div className={classes.rectangle102}></div>
      <div className={classes.sgvp2dView1}></div>
      <div className={classes._2DGUIDE2}>2D GUIDE</div>
      <div className={classes.cARNIVAL2}>CARNIVAL</div>
      <div className={classes.sGVP2}>S.G.V.P.</div>
      <div className={classes.oF}>OF</div>
      <div className={classes.polygon2}>
        <Polygon2Icon className={classes.icon4} />
      </div>
      <div className={classes._3DGUIDE2}>3D GUIDE</div>
      <div className={classes.rectangle8}></div>
      <div className={classes._3DGUIDE3}>3D GUIDE</div>
      <div className={classes.home}>
        <div className={classes.textBlock3}>home</div>
        <div className={classes.textBlock4}>
          <p></p>
        </div>
      </div>
      <div className={classes.rectangle9}></div>
      <div className={classes.oF2}>OF</div>
      <div className={classes.sGVP3}>S.G.V.P.</div>
      <div className={classes.cARNIVAL3}>CARNIVAL</div>
      <div className={classes.polygon4}>
        <Polygon4Icon className={classes.icon5} />
      </div>
      <div className={classes.removal5521}></div>
      <div className={classes.scroolTo}></div>
      <div className={classes.scroolTo2d}></div>
      <div className={classes.scroolTo3d}></div>
    </div>
  );
});
