import { enabled, IslandIndicator } from "../components/IslandIndicator.tsx";

export default function IslandIndicatorSwitch() {
  return (
    <IslandIndicator>
      <input
        type="checkbox"
        checked={enabled.value}
        onChange={(e) => enabled.value = e.currentTarget.checked}
        id="island-indicator"
      />
      <label htmlFor="island-indicator" class="ml-2">
        Show island boundaries?
      </label>
    </IslandIndicator>
  );
}
