import { useSignal } from "@preact/signals";
import { Button } from "../components/Button.tsx";
import { IslandIndicator } from "../components/IslandIndicator.tsx";

interface CounterProps {
  start: number;
}

// This island is used to display a counter and increment/decrement it. The
// state for the counter is stored locally in this island.
export default function Counter(props: CounterProps) {
  const count = useSignal(props.start);
  return (
    <IslandIndicator>
      <div class="flex gap-2 items-center w-full">
        <p class="flex-grow-1 font-bold text-xl">{count}</p>
        <Button onClick={() => count.value--}>-1</Button>
        <Button onClick={() => count.value++}>+1</Button>
      </div>
    </IslandIndicator>
  );
}
