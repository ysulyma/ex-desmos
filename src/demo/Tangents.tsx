import {Expression} from "desmos-react";

import {F, G, GF, drawTangents} from "./config";

import {useValue} from "../helpers";

export function Tangents() {
  const p = useValue(drawTangents);

  return (
    <>
      <Expression
        id="tangent-f" latex="(a+t, f(a)+tf'(a))" secret
        lineOpacity="0.5" lineStyle="DASHED" color={F}
        parametricDomain={{min: -p ,max: p }}/>
      <Expression
        id="tangent-g" latex="(f(a)+t, g(f(a))+tg'(f(a)))" secret
        lineOpacity="0.5" lineStyle="DASHED" color={G}
        parametricDomain={{min: -p ,max: p }}/>
      <Expression
        id="tangent-gf" latex="(a+t, g(f(a))+tg'(f(a))f'(a))" secret
        lineOpacity="0.5" lineStyle="DASHED" color={GF}
        parametricDomain={{min: -p ,max: p }}/>
    </>
  );
}
