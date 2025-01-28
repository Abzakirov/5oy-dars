import "../../components/links_contents/links.css";
//icons
import icon_menu from "../../assets/img/icon_menu.png";
const Links_contents = () => {
  return (
    <div className="container">
      <div className="links_content">
        <button className="menu_button">
          <img src={icon_menu} alt="" />
          Каталог товаров
        </button>
        <a href="#">
          <h2 className="links_title">О компании</h2>
        </a>
        <a href="#">
        <h2 className="links_title">Отзывы</h2>
        </a>
        <a href="#">
        <h2 className="links_title">Наши работы</h2>
        </a>
        <a href="#">
        <h2 className="links_title">Доставка</h2>
        </a>
        <a href="#">
        <h2 className="links_title">Контакты</h2>
        </a>
      </div>
    </div>
  );
};

export default Links_contents;
