import { Button } from "../components/Button.tsx";
import { IslandIndicator } from "../components/IslandIndicator.tsx";
import { cart } from "../utils/cart.ts";

interface AddToCartProps {
  product: string;
}

// This island is used to add a product to the cart state.
export default function AddToCart(props: AddToCartProps) {
  return (
    <IslandIndicator>
      <Button
        onClick={() => cart.value = [...cart.value, props.product]}
        class="w-full"
      >
        Add{cart.value.includes(props.product) ? " another" : ""}{" "}
        "{props.product}" to cart
      </Button>
    </IslandIndicator>
  );
}
