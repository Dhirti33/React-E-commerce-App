import { useState, useEffect } from "react";

const useFetchProducts = () => {
    const [products, setProducts] = useState();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('./FUNCTIONS/DATA.json');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const jsonData = await response.json();
          setProducts(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
      
    return products;
  };

  export default useFetchProducts;