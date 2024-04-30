import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../STYLES/HOME.css";
// import COOK from "../IMAGES/cook-removebg-preview.png"
const Home = () => {
  return (
    <section className="Home">
      <div className="home_info">
        <br />
        <p className="pI">
          Shopping online has gotten easier over the years with Clean Cooking
          Market. Our platform makes shopping easy and interesting with amazing
          deals, jaw-dropping reduction in the prices of the items as well as
          special discount offers which occurs from time to time. Irrespective
          of your class, we provide you with products that align with your
          budget.
        </p>
      </div>
      <div className="review">
        {/* <p>Download App</p> */}
        <div className="store svg"></div>
        <div className="store image"></div>
      </div>
      <div className="home_image">
        <h1>CLEAN COOK STOVE MARKET</h1>
        {/* <br /> */}
        <h3>CONVENIENT ACCESS TO CLEAN COOKING AND LIGHTING SOLUTIONS</h3>

        {/* <br /> */}
        <p>
          Explore your favorite cookstove, lightning solutions and more in our
          catalog of top stove collections.
        </p>
      </div>
      <div className="home_top">
        <p>Time to time discount &#x1F44D;</p>
      </div>
      <div className="home_center">
        <Link to="/product">Shop now</Link>
      </div>
    </section>
  );
};

export default Home;
