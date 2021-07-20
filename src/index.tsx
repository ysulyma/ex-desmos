import * as React from "react";
import * as ReactDOM from "react-dom";

import {Audio, Player} from "liqvid";

import controls from "@env/controls";
import MEDIA_URL from "@env/media-url";

import Demo from "./Demo";
import {script} from "./script";

function Lesson() {
  const highlights = [{
    title: "Tangent lines", time: script.parseStart("demo/tangents")
  }];

  const thumbData = {
    cols: 5,
    rows: 5,
    height: 100,
    width: 160,
    frequency: 1,
    path: `${MEDIA_URL}/thumbs/%s.png`,
    highlights
  };

  return (
    <Player controls={controls} script={script} thumbs={thumbData}>
      <Audio start={0}>
        <source src={`${MEDIA_URL}/audio/audio.webm`} type="audio/webm"/>
        <source src={`${MEDIA_URL}/audio/audio.mp4`} type="audio/mp4"/>
        <track default kind="captions" srcLang="en" src="./captions.vtt"/>
      </Audio>
      <Demo/>
    </Player>
  );
}

ReactDOM.render(<Lesson/>, document.querySelector("main"));
