import { Link } from "react-router-dom";
import "./Item.css";

export const Item = ({ id, name, price, description, image, category, children }) => {
  return (
    <article className="card">
      <div className="card-image-wrapper">
        <img src={image} alt={name} />
      </div>

      <div className="card-content">
        {category && <span className="card-category">{category.toUpperCase()}</span>}
        <h3 className="card-title">{name}</h3>
        <p className="card-description">{description}</p>

        <div className="card-price-row">
          <span className="card-price">${price?.toLocaleString("es-AR")}</span>
          <Link to={`/product/${id}`} className="card-link">
            Ver producto &rarr;
          </Link>
        </div>

        {children}
      </div>
    </article>
  );
};