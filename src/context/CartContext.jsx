import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

/* -------------------------------------------------------------------------- */
/*                              CREAMOS CONTEXTO                              */
/* -------------------------------------------------------------------------- */
const CartContext = createContext();

/* -------------------------------------------------------------------------- */
/*                                 CUSTOM HOOK                                */
/* -------------------------------------------------------------------------- */
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};

/* -------------------------------------------------------------------------- */
/*                                  PROVEEDOR                                 */
/* -------------------------------------------------------------------------- */
export const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  // Verifica si el producto ya existe en el carrito
  const isInCart = (id) => {
    return cart.some((element) => element.id === id);
  };

  // Agrega un producto: si ya existe incrementa su cantidad, si no lo agrega con quantity = 1
  const addItem = (item) => {
    if (isInCart(item.id)) {
      setCart((prev) =>
        prev.map((element) =>
          element.id === item.id
            ? { ...element, quantity: (element.quantity || 1) + 1 }
            : element
        )
      );
      alert("Se agregó otra unidad al carrito 🎉");
    } else {
      setCart((prev) => [...prev, { ...item, quantity: 1 }]);
      alert("Producto agregado al carrito 🎉");
    }
  };

  // Eliminar un producto completo por ID
  const removeItem = (id) => {
    setCart((prev) => prev.filter((element) => element.id !== id));
    alert("Producto eliminado ✅");
  };

  // Vaciar carrito
  const clearCart = () => {
    setCart([]);
  };

  // Total de unidades sumando las cantidades de cada producto
  const getTotalItems = () => {
    return cart.reduce((acc, element) => acc + (element.quantity || 1), 0);
  };

  // Total a pagar multiplicando precio por cantidad
  const getCartTotal = () => {
    return cart.reduce(
      (acc, element) => acc + element.price * (element.quantity || 1),
      0
    );
  };

  // Checkout
  const checkout = () => {
    alert("Su compra ha sido realizada 🎉");
    clearCart();
    navigate("/");
  };

  const values = {
    cart,
    addItem,
    clearCart,
    removeItem,
    getCartTotal,
    getTotalItems,
    checkout,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};