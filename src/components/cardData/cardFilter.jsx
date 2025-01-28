import React from "react";

import "./carFilter.css";

function CardFilter() {
  return (
    <div>
      <div className="Hittovar">
        <h1 className="hit">Хиты продаж</h1>
        <p className="tovars">Все товары</p>
      </div>
      <div className="hoverslar">
        <h1 className="hovers">Беседки</h1>
        <h1 className="hovers">Бани</h1>
        <h1 className="hovers">Площадки</h1>
        <h1 className="hovers">Дома</h1>
        <h1 className="hovers">Перголы</h1>
        <h1 className="hovers">Бренды</h1>
      </div>
    </div>
  );
}

export default CardFilter;
