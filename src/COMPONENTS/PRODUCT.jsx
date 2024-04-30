import "../STYLES/PRODUCT.css";
import Data from "../FUNCTIONS/DATA.json";
import { useState, useContext } from "react";
import { ShopContext } from "../App";
import { Link } from "react-router-dom";

const Product = () => {
  const { products, addToCart } = useContext(ShopContext);

  // Page Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 9;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = products.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changePage = (id) => {
    setCurrentPage(id);
  };

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };
  //********************************************** */

  // Dropdown Menu
  const [searchSelected, setSearchSelected] = useState("Sort by popularity");

  const showDropdown = () => {
    const drop = document.querySelector(".searchItems");
    const arrow = document.querySelector(".dropArrow");

    arrow.classList.toggle("dropArrow-rotate");
    drop.classList.toggle("searchItems-drop");
  };

  const Selected = (text) => () => {
    setSearchSelected(text);
  };
  //************************************* */
  //Add to Cart

  return (
    <section className="Product">
      <div className="productTop">
        <ul className="numberOfList">
          <li className="pageCont">
            <a href="#" className="pageLink" onClick={prevPage}>
              Prev
            </a>
            {numbers.map((n, i) => (
              <li className="pageNum" key={i}>
                <Link
                  to={`#${n}`}
                  className={`pageNumLink ${currentPage === n ? "active" : ""}`}
                  onClick={() => changePage(n)}
                >
                  {n}
                </Link>
              </li>
            ))}
            <a href="#" className="pageLink" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
        <div className="productSearchBox">
          <div className="searchDropdown">
            <div className="searchSelected">{searchSelected}</div>
            <ul className="searchItems">
              <li onClick={Selected("Sort by popularity")}>
                Sort by popularity
              </li>
              <li onClick={Selected("Sort by average rating")}>
                Sort by average rating
              </li>
              <li onClick={Selected("Sort by latest")}>Sort by latest</li>
              <li onClick={Selected("Sort by price: low-high")}>
                Sort by price: low-high
              </li>
              <li onClick={Selected("Sort by price: high-low")}>
                Sort by price: high-low
              </li>
            </ul>
          </div>
          <div className="dropArrow" onClick={showDropdown}></div>
        </div>
      </div>
      <div className="productMain">
        {records.map((product, index) => (
          <div className="productContainer" key={index}>
            <img
              className="productImage"
              src={product.IMAGE}
              alt={product.NAME}
            />
            <div className="productName">{product.NAME}</div>
            <div className="productPrice">{product.PRICE}</div>
            <button
              className="addToCart"
              onClick={() => {
                addToCart(product);
              }}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
