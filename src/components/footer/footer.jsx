import React from "react";

import groups from "../../assets/svg/groups.svg";

import "../footer/footer.css";

const Footer = () => {
  return (
    <div>
      <div className="grouplars">
        <div className="groplar">
          <div className="groupLogo">
            <img className="groups" src={groups} alt="" />
            <p className="logos">Логотип вашего магазина</p>
          </div>
          <div className="groupLogo">
            <h2 className="adres">Наш адрес:</h2>
            <h2 className="adres">Москва, ул. Новокосимская д.7</h2>
          </div>
        </div>
        <div className="groplar">
          <div>
            <h3 className="adres">График работы: </h3>
            <h3 className="adres">
              Ежедневно c <span className="nine">9:00 </span> до{" "}
              <span className="nine">21:00 </span>
            </h3>
          </div>
          <button className="zvons">Заказать звонок</button>
        </div>
      </div>
      <div className="uiLinks">
        <div className="footers_ul">
          <ul className="footers_a">
            <li>
              <a className="infos" href="#">
                Для покупателей:
              </a>
            </li>
            <li>
              <a className="infos" href="#">
                Доставка
              </a>
            </li>
            <li>
              <a className="infos" href="#">
                Гарантия
              </a>
            </li>
            <li>
              <a className="infos" href="#">
                Политика конфиденциальности
              </a>
            </li>
            <li>
              <a className="infos" href="#">
                Отзывы
              </a>
            </li>
            <li>
              <a className="infos" href="#">
                Наши работы
              </a>
            </li>
          </ul>
          <ul className="footers_a">
            <li>
              <a className="infos" href="#">
                О компании:
              </a>
            </li>
            <li>
              <a className="infos" href="#">
                О Нас
              </a>
            </li>
            <li>
              <a className="infos" href="#">
                Доставка и оплата
              </a>
            </li>
            <li>
              <a className="infos" href="#">
                Наши работы
              </a>
            </li>
            <li>
              <a className="infos" href="#">
                Контакты
              </a>
            </li>
            <li>
              <a className="infos" href="#">
                Гарантия
              </a>
            </li>
          </ul>
          <ul className="footers_a">
            <li>
              <a className="infos" href="#">
                Категории:
              </a>
            </li>
            <li>
              <a className="infos" href="#">
                Беседки
              </a>
            </li>
            <li>
              <a className="infos" href="#">
                Бани
              </a>
            </li>
            <li>
              <a className="infos" href="#">
                Площадки
              </a>
            </li>
            <li>
              <a className="infos" href="#">
                Дома
              </a>
            </li>
            <li>
              <a className="infos" href="#">
                Перголы
              </a>
            </li>
            <li>
              <a className="infos" href="#">
                Бренды
              </a>
            </li>
          </ul>
        </div>
        <div className="uls">
          <div className="ils">
            <div className="section">
              <h3 className="heading">Для регионов</h3>
              <p className="contactInfo">(звонок бесплатный)</p>
              <p className="contactInfo">8 (800) 800-00-00</p>
            </div>

            <div className="section">
              <p className="contactInfo">Email: youremail@mailbox.ru</p>
            </div>

            <div className="section">
              <h3 className="heading">Мы в соц.сетях:</h3>
            </div>

            <div className="section">
              <h3 className="heading">Для Москвы и Московской области</h3>
              <p className="contactInfo">8 (495) 700-00-00</p>
            </div>
          </div>

          <div className="erors">
            <div className="errorReport">
              <p>Сообщить об ошибке на сайте</p>
            </div>

            <div className="companyInfo">
              <p>ООО "Фаза Групп"</p>
              <p>ИНН: 7751140879</p>
              <p>ОГРН: 1187746273461</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
