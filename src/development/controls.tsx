import {Player} from "liqvid";
import {RecordingControl} from "rp-recording";

export default (<>
  {Player.defaultControlsLeft}

  <div className="rp-controls-right">
    <RecordingControl/>
    
    {Player.defaultControlsRight}
  </div>
</>);
