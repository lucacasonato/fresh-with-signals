import { Button } from "../components/Button.tsx";
import { IslandIndicator } from "../components/IslandIndicator.tsx";
import { cart } from "../utils/cart.ts";

// This island is used to display the cart contents and remove items from it.
export default function Cart() {
  return (
    <IslandIndicator>
      <h1 class="text-xl">Cart</h1>
      <ul class="w-full">
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
    <li class="flex items-center justify-between gap-2">
      {props.product}
      <Button onClick={remove}>Remove</Button>
    </li>
  );
}
