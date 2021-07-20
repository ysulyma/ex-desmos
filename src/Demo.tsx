import {Player} from "liqvid";
const noClick = {onMouseUp: Player.preventCanvasClick};

import {Expression, GraphingCalculator} from "desmos-react";

import {Graphs} from "./demo/Graphs";
import {Lines} from "./demo/Lines";
import {Points} from "./demo/Points";
import {Tangents} from "./demo/Tangents";

import {DemoPrompt} from "@env/prompts";

export default function Demo() {
  return (
    <>
      <DemoPrompt/>
      <GraphingCalculator
        attributes={{className: "calculator", ...noClick}}
        fontSize={18}
        keypad projectorMode
      >
        <Graphs/>
        <Expression
          type='expression'
          id='slider'
          latex='a=-1'
          sliderBounds={{
            min: "-5",
            max: "5",
            step: "0.01"
          }}/>
        <Lines/>
        <Points/>
        <Tangents/>
      </GraphingCalculator>
    </>
  );
}
