import * as React from "react";
import {Prompt, Cue} from "rp-prompt";

export function DemoPrompt() {
  return (
    <Prompt>
      <Cue on="demo/">
        In this video I'm going to explain the idea of composing functions. So if we have a function
      </Cue>
      <Cue on="demo/f">
        f and another function
      </Cue>
      <Cue on="demo/g">
        g; here I've chosen x^2 and cos(x), but you can change them in the sidebar—we can form a new function by taking the output of f and using that as the input to g. So here's what
      </Cue>
      <Cue on="demo/gf">
         the graph of that looks like. Let's step through this slowly.
      </Cue>
      <Cue on="demo/x">
        First we plug our x value into f. Then we take
      </Cue>
      <Cue on="demo/u">
        the y value that f spit out and use it as the x value for g. And then
      </Cue>
      <Cue on="demo/y">
        whatever g spits out is the value of the composed function at x.<br/>
        The reason we're interested in this concept is that if we've got a complicated function, and we can break it down as a composite of simpler functions, we can often understand something about the complicated function just by understanding it for each of the simpler functions individually. For example, in calculus we're interested in
      </Cue>
      <Cue on="demo/tangents">
        *tangent lines* to a curve. The *chain rule* says that the slope of the tangent line at a point on the composite graph is the
      </Cue>
      <Cue on="demo/slopes">
        product of the slopes of the tangent lines at the corresponding points on the graphs of f and g.
      </Cue>
    </Prompt>
  );
}
