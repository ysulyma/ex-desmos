import * as bz from "bezier-easing";

import {animate} from "../helpers";
import {easeInCubic, easeOutCubic, easeInSine, easeInOutCubic} from "../easings";

import {script} from "../script";

// colors

export const F = Desmos.Colors.RED;
export const G = Desmos.Colors.BLUE;
export const GF = Desmos.Colors.PURPLE;
export const LINE_COLOR = Desmos.Colors.BLACK;

// animations
const m = script.parseStart;

const lineUDuration = 1000;
const lineYDuration = 500;

export const fOpacity = animate({
  startTime: m("demo/f"),
  duration: 300
});

export const gOpacity = animate([{
  startTime: m("demo/g"),
  duration: 300
}, {
  startValue: 1,
  endValue: 0.1,
  startTime: m("demo/x"),
  duration: 300,
  easing: bz(...easeOutCubic)
}, {
  startValue: 0.1,
  startTime: m("demo/u") + lineUDuration,
  duration: 1000,
  easing: bz(...easeInOutCubic)
}]);

export const gfOpacity = animate([{
  startTime: m("demo/gf"),
  duration: 300,
  easing: bz(...easeInCubic),
}, {
  startValue: 1,
  endValue: 0.1,
  startTime: m("demo/x"),
  duration: 300,
  easing: bz(...easeOutCubic)
}, {
  startValue: 0.1,
  startTime: m("demo/y") + lineYDuration,
  duration: 1000,
  easing: bz(...easeInOutCubic)
}]);

export const drawLineU = animate({
  startTime: m("demo/u"),
  duration: lineUDuration,
  easing: bz(...easeInCubic)
});

export const drawLineY = animate({
  startTime: m("demo/y"),
  duration: lineYDuration,
  easing: bz(...easeInOutCubic)
});

export const drawTangents = animate({
  startTime: m("demo/tangents"),
  duration: 1000,
  easing: bz(...easeInSine)
});

const xIndex = script.markerNumberOf("demo/x");
export const showX = () => script.markerIndex >= xIndex;

const uStart = m("demo/u") + lineUDuration;
export const showU = (t: number) => (t >= uStart);

const yStart = m("demo/y") + lineYDuration;
export const showY = (t: number) => (t >= yStart);
