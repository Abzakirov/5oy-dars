import "../../components/navs_two/nav_two.css";
// icons
import check_navs from "../../assets/img/icon_Checkmark.png";
import icon_clock from "../../assets/img/icon_clock.png";
import icon_mail from "../../assets/img/icon_mail.png";
const Nav_two = () => {
  return (
    <div className="container">
      <div className="contentsForm">
        <div className="colors_content">
          <div className="colors_nav">
            <div className="orange"></div>
            <div className="black"></div>
            <div className="yellow"></div>
          </div>
          <h3 className="colors_title">Логотип вашего магазина</h3>
        </div>
        <div>
          <div className="check_content">
            <h2 className="check_title">
              <img src={check_navs} alt="" />
              Лучшие цены
            </h2>
            <h2 className="check_title">
              <img src={check_navs} alt="" />
              Бесплатная доставка
            </h2>
            <h2 className="check_title">
              <img src={check_navs} alt="" />
              Гарантия от 3х лет
            </h2>
            <h2 className="check_title">
              <img src={check_navs} alt="" />
              Более 1 000 товаров
            </h2>
          </div>
          <form className="nav_form">
            <input
              type="text"
              placeholder="Поиск по каталогу..."
              className="search_nav_input"
            />
            <button className="searchs_button">Найти</button>
          </form>
        </div>
        <div className="mail_clock_content">
          <div className="clock_info">
            <div className="clock_contents">
              <img src={icon_clock} alt="" />
              <h2 className="clock_title">Ежедневно с 9:00 до 21:00</h2>
            </div>
            <h1 className="nums_form">8 (800) 800-00-00</h1>
            <h1 className="nums_form">8 (495) 700-00-00</h1>
          </div>
          <div className="mail_contents_call">
            <div className="mail_content">
              <img src={icon_mail} alt="" /><h2 className="mail_title">youremail@mailbox.ru</h2>
            </div>
            <button className="call_button">Заказать звонок</button>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Nav_two;
