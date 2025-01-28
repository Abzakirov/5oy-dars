import React from "react";

import "../forms/forms.css";
const FormsINt = () => {
  return (
    <div className="formsTitle">
      <h1 className="ttiles">
        Хотите быть в курсе выгодных предложений, акций и новинок?
      </h1>
      <form className="FormsInput">
        <input type="text" placeholder="Имя" className="name" />
        <input type="text" placeholder="Email" className="name" />
        <button className="podpis">Подписаться</button>
      </form>
    </div>
  );
};

export default FormsINt;
