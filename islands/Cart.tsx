import { Button } from "../components/Button.tsx";
import { IslandIndicator } from "../components/IslandIndicator.tsx";
import { cart } from "../utils/cart.ts";
import * as icons from "../components/Icons.tsx";

// This island is used to display the cart contents and remove items from it.
export default function Cart() {
  return (
    <IslandIndicator>
      <h1 class="text-xl flex items-center justify-center">
        Cart
      </h1>

      <ul class="w-full bg-gray-50 mt-2 p-2 rounded min-h-[6.5rem]">
        {cart.value.length === 0 && (
          <li class="text-center my-4">
            <div class="text-gray-400">
              <icons.Cart class="w-8 h-8 inline-block" />
              <div>
                Your cart is empty.
              </div>
            </div>
          </li>
        )}
        {cart.value.map((product, index) => (
          <CartItem product={product} index={index} />
        ))}
      </ul>
    </IslandIndicator>
  );
}

interface CartItemProps {
  product: string;
  index: number;
}

function CartItem(props: CartItemProps) {
  const remove = () => {
    const newCart = [...cart.value];
    newCart.splice(props.index, 1);
    cart.value = newCart;
  };

  return (
    <li class="flex items-center justify-between gap-1">
      <icons.Lemon class="text-gray-500" />
      <div class="flex-1">
        {props.product}
      </div>
      <Button onClick={remove} aria-label="Remove" class="border-none">
        <icons.X class="inline-block w-4 h-4" />
      </Button>
    </li>
  );
}
