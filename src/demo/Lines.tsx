import {Utils} from "ractive-player";
const {constrain} = Utils.misc;

import {LINE_COLOR, drawLineU, drawLineY} from "./config";
import {Expression} from "desmos-react";

import {useValue, useValueM} from "../helpers";
import {script} from "../script";

const tangentIndex = script.markerNumberOf("demo/tangents");
const hideLines = () => script.markerIndex >= tangentIndex;

export function Lines() {
  const pu = useValue(drawLineU);
  const py = useValue(drawLineY);

  if (useValueM(hideLines))
    return null;

  return (
    <>
      <Expression
        id="connect-1" latex="((1-t)a, f(a))" secret
        lineOpacity="0.5" lineWidth="1" lineStyle="DASHED" color={LINE_COLOR}
        parametricDomain={{min:"0", max: constrain(0, pu*3, 1)}}/>
      <Expression
        id="connect-2" latex="(tf(a), (1-t)f(a))" secret
        lineOpacity="0.5" lineWidth="1" lineStyle="DASHED" color={LINE_COLOR}
        parametricDomain={{min:"0", max: constrain(0, pu*3-1, 1)}}/>
      <Expression
        id="connect-3" latex="(f(a), tg(f(a)))" secret
        lineOpacity="0.5" lineWidth="1" lineStyle="DASHED" color={LINE_COLOR}
        parametricDomain={{min:"0", max: constrain(0, pu*3-2, 1)}}/>
      <Expression
        id="connect-y" latex="((1-t)f(a)+ta, g(f(a)))" secret
        lineOpacity="0.5" lineWidth="1" lineStyle="DASHED" color={LINE_COLOR}
        parametricDomain={{min:"0", max: py}}/>
    </>
  );
}
