import "./App.css";
import Banners from "./components/banners/banner";
import Category from "./components/category/category";
import Headers from "./components/header/headers";
import ProductList from "./components/cardData/cardData";
import CardFilter from "./components/cardData/cardFilter";
import OtzovLists from "./components/otzovs/otzov.jsx";
import ObzorLists from "./components/obzor/obzor.jsx";
import FormsINt from "./components/forms/forms.jsx";
import Footer from "./components/footer/footer.jsx";

function App() {
  return (
    <div className="App">
      <div>
        <Headers />
      </div>
      <div className="container">
        <Banners />
      </div>
      <div className="container">
        <Category />
      </div>
      <div className="container">
        <CardFilter />
        <ProductList />
        <ProductList />
      </div>
      <div className="container">
        <h1 className="nash">Отзывы наших клиентов</h1>
        <div className="lstsCard">
          <OtzovLists />
        </div>
        <div className="btns">
          <button className="ochish">Открыть все отзывы</button>
        </div>
      </div>
      <div className="container">
        <h1 className="nash">Статьи, новости и обзоры</h1>
        <ObzorLists />
      </div>
      <div className="container">
        <div className="bgs">
          <FormsINt />
        </div>
      </div>
      <div className="footerbg">
        <div className="container">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
