import AddToCart from "../islands/AddToCart.tsx";
import Cart from "../islands/Cart.tsx";
import Counter from "../islands/Counter.tsx";
import IslandIndicatorSwitch from "../islands/IslandIndicatorSwitch.tsx";
import SynchronizedSlider from "../islands/SynchronizedSlider.tsx";

const link = "text-blue-500 hover:underline";

export default function Home() {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <img
        src="/logo.svg"
        class="w-32 h-32"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class="my-6">
        Welcome to{" "}
        <a href="https://fresh.deno.dev" class="hover:underline">
          <b>Fresh</b>
        </a>, the next-gen web framework for Deno. This is a demo of using the
        {" "}
        new `@preact/signals` library in Fresh. It demonstrates how you can use
        signals to communicate across islands.
      </p>
      <p class="my-6">
        Not sure what signals are? Read the{" "}
        <a href="https://preactjs.com/blog/introducing-signals" class={link}>
          @preact/signals announcement blog post
        </a>.
      </p>
      <IslandIndicatorSwitch />
      <div class="border p-2 my-6">
        <Counter start={3} />
        <Counter start={4} />
        <p class="mt-2">
          This counters uses a `useSignal` hook to create a signal that is local
          to the component. This means that each instance of this `{" "}
          <a
            href="https://github.com/lucacasonato/fresh-with-signals/blob/main/islands/Counter.tsx"
            class={link}
          >
            {"<Counter />"}
          </a>` island has its own state.{" "}
        </p>
      </div>

      <div class="border p-2 my-6">
        <div class="grid grid-cols-3 gap-2">
          <SynchronizedSlider />
          <SynchronizedSlider />
          <SynchronizedSlider />
        </div>
        <p class="mt-2">
          Here, each slider is it's own island. However all of these islands
          share a single global `signal()`. This means that all of the sliders
          are synchronized with each other, sharing state across island
          boundaries.{" "}
          <a
            href="https://github.com/lucacasonato/fresh-with-signals/blob/main/islands/SynchronizedSlider.tsx"
            class={link}
          >
            View the source code.
          </a>
        </p>
      </div>

      <div class="border p-2 my-6">
        <div class="grid grid-cols-2 gap-2">
          <div class="flex flex-col gap-1">
            <AddToCart product="Lemon" />
            <AddToCart product="Lime" />
          </div>

          <Cart />
        </div>

        <p class="mt-2">
          Here we have two different types of islands that share a single common
          state `signal()` to store cart contents. The `<a
            href="https://github.com/lucacasonato/fresh-with-signals/blob/main/islands/AddToCart.tsx"
            class={link}
          >
            {"<AddToCart />"}
          </a>` island adds items to the cart, and the `<a
            href="https://github.com/lucacasonato/fresh-with-signals/blob/main/islands/Cart.tsx"
            class={link}
          >
            {"<Cart />"}
          </a>` island displays the contents and allows you to remove items from
          the cart.
        </p>
      </div>

      <p class="my-6">
        You can use `@preact/signals` in your own Fresh project by adding these
        two entries to your `import_map.json`:
      </p>
      <pre class="border p-2 my-6 overflow-x-auto">
        {JSON.stringify({
          imports: {
            "@preact/signals": "https://esm.sh/*@preact/signals@1.0.0",
            "@preact/signals-core": "https://esm.sh/*@preact/signals-core@1.0.0",
          }
        }, undefined, 2)}
      </pre>

      <p class="mt-20 mb-6 flex justify-between">
        <a
          href="https://github.com/lucacasonato/fresh-with-signals"
          class={link}
        >
          Source code
        </a>
        <a href="https://fresh.deno.dev/docs" class={link}>Fresh Docs</a>
        <a href="https://lcas.dev" class={link}>Built by @lcasdev</a>
      </p>
    </div>
  );
}
