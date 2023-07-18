import { useEffect, useState, useContext } from 'react';
import { ProductApi } from "../api/product.api";
import { ProductContext } from '../Providers/ProductProvider';

export interface Product {
  id?: number;
  name: string;
  price: number;
  usd_price?: number;
}

const ProductList = () => {
  const { products } = useContext(ProductContext);
  const [productList, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      const productApi = new ProductApi();
      const response = await productApi.getProducts();
      const data = response?.data;
      setProducts(data);
    }
    getProducts();
  }, [products]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-3 p-3 border-2 rounded-md border-slate-500">
      {productList.map((product) => (
        <div
          key={product.id}
          className="mt-3 flex flex-col items-start p-3 border-2 rounded-md border-slate-600"
        >
          <label className="mb-1">Product: {product.name}</label>
          <label className="mb-1">
            Price: {Number(product.price).toFixed(2)}
          </label>
          <label className="text-green-700">
            USD Price: {product.usd_price}
          </label>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
