import { ComponentChildren } from "preact";
import { computed, signal } from "@preact/signals";

export const enabled = signal(false);

interface IslandIndicatorProps {
  children: ComponentChildren;
}

// This component is used to wrap islands to add a border around them when
// the `enabled` signal is true. This is used to visualize where the island
// boundaries are.
export function IslandIndicator(props: IslandIndicatorProps) {
  return (
    <div class={enabled.value ? "border-2 border-pink-500 p-1" : "p-1"}>
      {props.children}
    </div>
  );
}
