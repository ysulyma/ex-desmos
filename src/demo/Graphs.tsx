import {useCallback, useState} from "react";
import {Expression} from "desmos-react";

import {F, G, GF, fOpacity, gOpacity, gfOpacity} from "./config";

import {useValue} from "ractive-player";

export function Graphs() {
  return (
    <>
      <Expression lineOpacity={useValue(fOpacity)} id="f" latex="f(x) = x^2" color={F}/>
      <Expression lineOpacity={useValue(gOpacity)} id="g" latex="g(x)=\cos(x)" color={G}/>
      <Expression lineOpacity={useValue(gfOpacity)} id="gf" latex="y=g(f(x))" color={GF}/>
    </>
  );
}
