import * as React from "react";
import * as ReactDOM from "react-dom";

import {Audio, Player} from "ractive-player";

import controls from "@env/controls";
import MEDIA_URL from "@env/media-url";

import Demo from "./Demo";
import {script} from "./script";

function Lesson() {
  const highlights = [];

  const thumbData = {
    cols: 5,
    rows: 5,
    height: 100,
    width: 160,
    frequency: 4,
    path: `${MEDIA_URL}/thumbs/%s.png`,
    highlights
  };

  return (
    <Player controls={controls} script={script}>
      <Demo/>
    </Player>
  );
}

ReactDOM.render(<Lesson/>, document.querySelector("main"));
