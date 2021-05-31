import {Script} from "ractive-player";

const markers = [
  ["demo/", "1:00"],
  ["demo/f", "1:00"],
  ["demo/g", "1:00"],
  ["demo/gf", "1:00"],
  ["demo/x", "1:00"],
  ["demo/u", "1:00"],
  ["demo/y", "1:00"],
  ["demo/tangents", "1:00"],
  ["demo/slopes", "1:00"]
];

// const markers = [
//   ["title/","1:00"],
//   ["title/d1","1:00"],
//   ["title/e2","1:00"],
//   ["sseq/y","1:00"],
//   ["sseq/d","1:00"],
//   ["sseq/xy","1:00"],
//   ["sseq/resize","1:00"],
//   ["sseq/dz","1:00"]
// ] as [string, string][];

export const script = new Script(markers);
