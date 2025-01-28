// images
import location from "../../assets/img/location.png";
import "../../components/navs/nav.css";
const Nav = () => {
  return (
    <div className="container">
      <div className="nav_content">
        <div className="nav_contens">
        <div className="loc__content">
          <img src={location} alt="" />
          <h3 className="loc__titles">Ваш город: Константинополь</h3>
        </div>
        <div className="loc__content">
          <img src={location} alt="" />
          <h3 className="loc__titles">Наш офис: Москва, ул. Новокосимская д.7</h3>
        </div>
        </div>
        <div>
            <ul className="nav_ul">
                <li><a href="#" className="nav__a">Статьи</a></li>
                <li><a href="#" className="nav__a">Оплата</a></li>
                <li><a href="#" className="nav__a">Гарантия</a></li>
                <li><a href="#" className="nav__a">Дилерам</a></li>
                <li><a href="#" className="nav__a">Вакансии</a></li>
            </ul>
        </div>
      </div>
    </div>
  );
};
export default Nav;
