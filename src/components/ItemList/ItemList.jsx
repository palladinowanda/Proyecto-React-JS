import { Item } from "../Item/Item";
import { useCart } from "../../context/CartContext";
import "./ItemList.css";

export const ItemList = ({ products }) => {
  const { addItem } = useCart();

  if (!products.length) {
    return <p>No hay productos</p>;
  }

  return (
    <div className="products-container">
      {products.map((product) => (
        <Item key={product.id} {...product}>
          <button
            className="btn btn-add-cart"
            onClick={() => addItem(product)}
          >
            Añadir al carrito
          </button>
        </Item>
      ))}
    </div>
  );
};