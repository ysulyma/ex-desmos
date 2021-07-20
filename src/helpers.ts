import {useCallback, useContext, useEffect, useState} from "react";
import {Utils, useMarkerUpdate, useTimeUpdate} from "liqvid";
const rpAnimate = Utils.animation.animate;

/* these will be included in the next version of Liqvid maybe */

export function useValueM<T>(timer: (n: number) => T) {
  const [val, setVal] = useState(timer(0));

  useMarkerUpdate(useCallback(n => {
    setVal(timer(n));
  }, [timer]), [timer]);

  return val;
}

export function useValue<T>(timer: (t: number) => T) {
  const [val, setVal] = useState(timer(0));

  useTimeUpdate(useCallback(t => {
    setVal(timer(t));
  }, [timer]), [timer]);

  return val;
}

type AnimateOptions = Parameters<typeof rpAnimate>[0];

export function animate(options: AnimateOptions | AnimateOptions[]) {
  if (options instanceof Array) {
    options.sort((a, b) => a.startTime - b.startTime);
    const fns = options.map(rpAnimate);

    return (t: number): number => {
      let i = 0;
      for (; i < fns.length; ++i) {
        if (options[i].startTime > t) {
          if (i === 0)
            return options[0].startValue;

          return fns[i-1](t);
        }
      }
      return fns[options.length - 1](t);
    }
  }
  return rpAnimate(options);
}
