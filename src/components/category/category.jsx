import "../category/categoty.css";

import besedka from "../../assets/img/besedka.png";
import banya from "../../assets/img/banya.png";
import pergola from "../../assets/img/pergola.png";
import star from "../../assets/img/Star.png";
import gorka from "../../assets/img/gorka.png";
import house from "../../assets/img/House.png";

const Category = () => {
  return (
    <div>
      <h1 className="category_h1">Категории</h1>
      <div className="kategoryes">
        <div className="catygory">
          <h2 className="category_h2">Беседки</h2>
          <div className="categoryes">
            <div className="category_one">
              <h3 className="pod_catygory">Подкатегория 1</h3>
              <h3 className="pod_catygory">Подкатегория 2</h3>
              <h3 className="pod_catygory">Подкатегория 3</h3>
            </div>
            <div className="category_one">
              <h3 className="pod_catygory">Подкатегория 4</h3>
              <h3 className="pod_catygory">Подкатегория 5</h3>
              <h3 className="pod_catygory">Подкатегория 6</h3>
            </div>
          </div>
          <img className="beseds" src={besedka} alt="" />
        </div>
        <div className="categories_two">
          <div className="category_two">
            <div>
              <h2 className="category_h2">Бани</h2>
              <div className="category_one">
                <h3 className="pod_catygory">Подкатегория 1</h3>
                <h3 className="pod_catygory">Подкатегория 2</h3>
              </div>
            </div>
            <img src={banya} alt="" />
          </div>
          <div className="category_two">
            <div>
              <h2 className="category_h2">Перголы</h2>
              <div className="category_one">
                <h3 className="pod_catygory">Подкатегория 1</h3>
                <h3 className="pod_catygory">Подкатегория 2</h3>
              </div>
            </div>
            <img src={pergola} alt="" />
          </div>
          <div className="category_two">
            <div>
              <h2 className="category_h2">Бренды</h2>
              <div className="category_one">
                <h3 className="pod_catygory">Подкатегория 1</h3>
                <h3 className="pod_catygory">Подкатегория 2</h3>
              </div>
            </div>
            <img src={star} alt="" />
          </div>
        </div>
        <div className="categories_three">
          <div className="category_three">
            <div>
              <h2 className="category_h2">Детские площадки</h2>
              <div className="category_one">
                <h3 className="pod_catygory">Подкатегория 1</h3>
                <h3 className="pod_catygory">Подкатегория 2</h3>
                <h3 className="pod_catygory">Подкатегория 3</h3>
                <h3 className="pod_catygory">Подкатегория 4</h3>
                <h3 className="pod_catygory">Подкатегория 5</h3>
              </div>
            </div>
            <img src={gorka} alt="" />
          </div>
          <div className="category_three">
            <div>
              <h2 className="category_h2">Дома</h2>
              <div className="category_one">
                <h3 className="pod_catygory">Подкатегория 1</h3>
                <h3 className="pod_catygory">Подкатегория 2</h3>
                <h3 className="pod_catygory">Подкатегория 3</h3>
                <h3 className="pod_catygory">Подкатегория 4</h3>
                <h3 className="pod_catygory">Подкатегория 5</h3>
              </div>
            </div>
            <img src={house} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
