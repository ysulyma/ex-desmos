import * as React from "react";
import {Player} from "ractive-player";
import {RecordingControl} from "rp-recording";

export default (<>
  {Player.defaultControlsLeft}

  <div className="rp-controls-right">
    {<RecordingControl/>}
    {Player.defaultControlsRight}
  </div>
</>);
