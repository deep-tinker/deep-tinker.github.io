import { useState } from "react";

/**
 * A tiny interactive demo component, meant to be imported directly inside an
 * MDX post to prove that posts can embed live, stateful React inline with prose.
 */
export default function Counter({ label = "Clicks" }: { label?: string }) {
  const [n, setN] = useState(0);
  return (
    <div className="brutalist-card my-6 p-5 flex items-center gap-5">
      <button
        className="brutalist-btn px-5 py-2 text-black uppercase"
        onClick={() => setN((x) => x + 1)}
      >
        Tap me
      </button>
      <div className="font-mono font-black uppercase text-sm">
        {label}: <span className="bg-accent px-2 py-1">{n}</span>
      </div>
      {n > 0 && (
        <button
          className="ml-auto font-mono text-xs underline"
          onClick={() => setN(0)}
        >
          reset
        </button>
      )}
    </div>
  );
}
