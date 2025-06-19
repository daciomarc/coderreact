import { useEffect, useState } from "react";
import { getAllProducts } from "../services/products.service";
import ItemListContainer from "../components/ItemListContainer";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return loading ? <>Cargando...</> : <ItemListContainer products={products} />;
};

export default Home;
