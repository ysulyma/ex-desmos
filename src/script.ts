import {Script} from "ractive-player";

const markers = [
  ["demo/", "0:05.516"],
  ["demo/f", "0:01.617"],
  ["demo/g", "0:11.150"],
  ["demo/gf", "0:03.749"],
  ["demo/x", "0:03.596"],
  ["demo/u", "0:04.843"],
  ["demo/y", "0:22.808"],
  ["demo/tangents", "0:08.120"],
  ["demo/slopes", "0:07.624"]
] as [string, string][];

export const script = new Script(markers);
