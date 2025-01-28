import { products } from "./productsData";
import "../../components/cardData/cardData.css";

const ProductData = ({ product }) => {
  return (
    <div className="productCards">
      <div className="productCard">
        <img src={product.image} alt={product.name} />
        <div className="articulsnum">
          <p className="articul_title">{product.arcticuls}</p>
          <p className="articul_title">{product.articul}</p>
        </div>
        <h1 className="nameTovar">{product.name}</h1>
        <div className="icons_title">
          <div className="icon_title">
            <img src={product.imgDrown} alt="" />
            <p className="names_titles">{product.Size}</p>
          </div>
          <p className="names_info">{product.dimensions}</p>
        </div>
        <div className="icons_title">
          <div className="icon_title">
            <img src={product.imgSquare} alt="" />
            <p className="names_titles">{product.Squares}</p>
          </div>
          <p className="names_info">{product.area}</p>
        </div>
        <div className="icons_title">
          <div className="icon_title">
            <img src={product.imgUser} alt="" />
            <p className="names_titles">{product.Capacity}</p>
          </div>
          <p className="names_info">{product.capacitys}</p>
        </div>
        <div className="icons_title">
          <div className="icon_title">
            <img src={product.imgCheck} alt="" />
            <p className="names_titles">{product.Guarente}</p>
          </div>
          <p className="names_info">{product.warranty}</p>
        </div>
        <div className="buyinfo" >
          <div>
            <div className="perPrice">
              <h2 className="oldPrice">{product.oldPrice}</h2>
              <h3 className="percentage">{product.percentage}</h3>
            </div>
            <div>
              <h1 className="price">{product.price}</h1>
            </div>
          </div>
          <div>
            <button className="buyButton">{product.toBuy}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="cardDates">
      {products.map((product, idx) => (
        <ProductData key={idx} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
