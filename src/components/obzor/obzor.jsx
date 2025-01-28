import { ObzorProducts } from "./obzor";
import "./obzor.css";
const ObzorData = ({ product }) => {
  return (
    <div className="ObzorCard">
      <div className="images"></div>
      <h4 className="dacha">{product.title}</h4>
      <h4 className="dates">{product.date}</h4>
      <h4 className="desc">{product.description}</h4>
      <h4 className="moren">{product.readMoreLink}</h4>
    </div>
  );
};

const ObzorLists = () => {
  return (
    <div className="obzorcards">
      {ObzorProducts.map((product, idx) => (
        <ObzorData key={idx} product={product} />
      ))}
    </div>
  );
};

export default ObzorLists;
