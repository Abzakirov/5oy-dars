import Nav from "../navs/nav";
import "../../components/header/header.css";
import Nav_two from "../navs_two/navs_two";
import Links_contents from "../links_contents/links";
const Headers = () => {
  return (
    <div>
      <div className="bg_color">
        <Nav />
      </div>
      <div className="nav__contents">
        <Nav_two />
      </div>
      <div>
      <Links_contents />
      </div>
    </div>
  );
};

export default Headers;
