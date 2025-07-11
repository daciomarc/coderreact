import { useParams } from "react-router";
import ItemListContainer from "../components/ItemListContainer";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/config/firebase";
const Category = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    const productsQuery = query(
      collection(db, "products"),
      where("category", "==", id)
    );

    getDocs(productsQuery)
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      })
      .catch((e) => console.error(e));
  }, [id]);

  return <ItemListContainer products={products} />;
};

export default Category;
