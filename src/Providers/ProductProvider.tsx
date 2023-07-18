import { createContext, useState } from "react";
import { Product } from "../components/ProductList";

interface ProductContextProps {
  products: Product[];
  addProduct: (newProduct: Product) => void;
}

export const ProductContext = createContext<ProductContextProps>({
  products: [],
  addProduct: () => {},
});

export const ProductProvider: React.FC = ({ children  }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (newProduct: Product) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};