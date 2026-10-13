import { useCart } from "../../context/CartContext";
import { Item } from "../Item/Item";

export const CartItem = ({ item }) => {
  const { removeItem } = useCart();
  const quantity = item.quantity || 1;
  const subtotal = item.price * quantity;

  return (
    <Item {...item}>
      <div className="cart-item-info">
        <p className="cart-item-qty">
          Unidades: <strong>{quantity}</strong>
        </p>
        <p className="cart-item-subtotal">
          Subtotal: ${subtotal.toLocaleString("es-AR")}
        </p>
      </div>

      <button
        className="btn bg-delete primary"
        onClick={() => removeItem(item.id)}
      >
        Eliminar
      </button>
    </Item>
  );
};