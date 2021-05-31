import {useCallback} from "react";

import {Expression, useHelperExpression} from "desmos-react";

import {Utils, useScript, useMarkerUpdate, useValue, useValueM} from "ractive-player";
const {useForceUpdate} = Utils.react;

import {script} from "../script";

import {F, G, GF, showX, showU, showY} from "./config";

const slopesIndex = script.markerNumberOf("demo/slopes"),
      showSlopes = () => script.markerIndex >= slopesIndex;

export function Points() {
  const y = useValue(showY);
  const x = useValueM(showX);
  const u = useValue(showU);

  const showLabel = useValueM(showSlopes);

  const dx = (useHelperExpression({latex: "f'(a)"}) ?? 0).toFixed(2);
  const du = (useHelperExpression({latex: "g'(f(a))"}) ?? 0).toFixed(2);
  const dy = (useHelperExpression({latex: "g'(f(a)) f'(a)"}) ?? 0).toFixed(2);

  return (
    <>
      {useValueM(showX) && <Expression secret id="point-x" latex="(a,f(a))" label={`slope ${dx}`} {...{showLabel}} color={F}/>}
      {useValue(showU) && <Expression secret id="point-u" latex="(f(a),g(f(a)))" label={`slope ${du}`} {...{showLabel}} color={G}/>}
      {useValue(showY) && <Expression secret id="point-y" latex="(a,g(f(a)))" label={`slope ${dy}`} {...{showLabel}} color={GF}/>}
    </>
  );
}
