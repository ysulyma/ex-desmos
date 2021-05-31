import {useCallback, useState} from "react";
import {Utils, useValue, useValueM} from "ractive-player";
const {constrain} = Utils.misc;

import {LINE_COLOR, drawLineU, drawLineY} from "./config";
import {Expression} from "desmos-react";

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
        id="connect-1" latex="((1-t)a, a^2)" secret
        lineOpacity="0.5" lineWidth="1" lineStyle="DASHED" color={LINE_COLOR}
        parametricDomain={{min:"0", max: constrain(0, pu*3, 1)}}/>
      <Expression
        id="connect-2" latex="(ta^2, (1-t)a^2)" secret
        lineOpacity="0.5" lineWidth="1" lineStyle="DASHED" color={LINE_COLOR}
        parametricDomain={{min:"0", max: constrain(0, pu*3-1, 1)}}/>
      <Expression
        id="connect-3" latex="(a^2, t\cos(a^2))" secret
        lineOpacity="0.5" lineWidth="1" lineStyle="DASHED" color={LINE_COLOR}
        parametricDomain={{min:"0", max: constrain(0, pu*3-2, 1)}}/>
      <Expression
        id="connect-y" latex="((1-t)a^2+ta, \cos(a^2))" secret
        lineOpacity="0.5" lineWidth="1" lineStyle="DASHED" color={LINE_COLOR}
        parametricDomain={{min:"0", max: py}}/>
    </>
  );
}
