import { signal } from "@preact/signals";
import { IslandIndicator } from "../components/IslandIndicator.tsx";

const slider = signal(50);

// This island displays a slider with a value equal to the `slider` signal's
// value. When the slider is moved, the `slider` signal is updated.
export default function SynchronizedSlider() {
  return (
    <IslandIndicator>
      <input
        class="w-full"
        type="range"
        min={1}
        max={100}
        value={slider.value}
        onInput={(e) => slider.value = Number(e.currentTarget.value)}
      />
    </IslandIndicator>
  );
}
