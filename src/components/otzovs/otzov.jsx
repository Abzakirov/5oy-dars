import otzovData from "./otzov.js";

const OtzovDate = ({ product }) => {
  return (
    <div className="Otzov_card">
      <div className="rates_ifon">
        <div className="imgRate">
          <h2 className="names">{product.name}</h2>
          <p className="date">{product.date}</p>
        </div>
        <div className="imgRate">
          <img src={product.imgs} alt="" />
          <p className="ratigs">{product.rating}</p>
        </div>
      </div>
      <div className="summarys">
        <p className="summary">{product.summary}</p>
        <p className="riding">{product.riding}</p>
      </div>
    </div>
  );
};

const OtzovLists = () => {
  return (
    <div className="OtzovDates">
      {otzovData.map((product, idx) => (
        <OtzovDate key={idx} product={product} />
      ))}
    </div>
  );
};

export default OtzovLists;
