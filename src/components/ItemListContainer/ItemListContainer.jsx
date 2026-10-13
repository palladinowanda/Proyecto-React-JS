import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch("/data/product.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al cargar los productos");
        }
        return res.json();
      })
      .then((data) => {
        if (category) {
          setProducts(data.filter((item) => item.category === category));
        } else {
          setProducts(data);
        }
      })
      .catch((error) => setErrors(error.message))
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) return <p>Cargando...</p>;
  if (errors) return <p>{errors}</p>;

return (
    <section>
      <header className="hero-header">
        <span className="hero-tag">FIRE MUSIC · ROCK & METAL</span>
        <h1 className="hero-title">Encontrá tu próximo disco</h1>
        <p className="hero-subtitle">
          CDs, vinilos y ediciones exclusivas para llevar tu colección al siguiente nivel.
        </p>
      </header>

      <ItemList products={products} />
    </section>
  );
};