// images
import "../../components/banners/banner.css";
import banner from "../../assets/img/Banner.png";
import icon_pen from "../../assets/img/icon_pen.png";
import icon_foam from "../../assets/img/icon_foam.png";
import icon_settings from "../../assets/img/icon_settings.png";
import icon_user from "../../assets/img/icon_user.png";
import icon_like from "../../assets/img/icon_like.png";


const Banners = () => {
  return (
    <div >
      <div >
        <img className="banner" src={banner} alt="" />
      </div>
      <div className="banner_info">
        <div className="banners_info"><img src={icon_pen} alt="" className="ban_icon" /><h2 className="bannner_title">Изготовливаем конструкции <br />
        по вашему дизайн-проекту</h2></div>
        <div className="banners_info"><img src={icon_foam} alt="" className="ban_icon" /><h2 className="bannner_title">Изготовили более 2 400 <br /> деревянных конструкций</h2></div>
        <div className="banners_info"><img src={icon_settings} alt="" className="ban_icon" /><h2 className="bannner_title">Собственное производство  <br />
        площадью 6 000 м2</h2></div>
        <div className="banners_info"><img src={icon_user} alt="" className="ban_icon" /><h2 className="bannner_title">Производим изделия из <br /> дерева с 1998 года</h2></div>
        <div className="banners_info"><img src={icon_like} alt="" className="ban_icon" /><h2 className="bannner_title">Гарантия от 3х лет<br />
        на все конструкции</h2></div>
      </div>
    </div>
  );
};

export default Banners