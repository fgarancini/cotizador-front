import { useFormik } from "formik";
import { ProductApi } from "../api/product.api";
import { useContext } from "react";
import { ProductContext } from "../Providers/ProductProvider";

const ProductForm = () => {
  const { addProduct } = useContext(ProductContext);

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      price: 0,
    },
    onSubmit: async (values, { resetForm }) => {
      const productApi = new ProductApi();
      const response = await productApi.createProduct(
        values.name,
        values.price
      );
      if (response?.status !== 200) {
        return false;
      }
      addProduct(response?.data)
      resetForm();
    },
  });

  return (
    <div>
      <section>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 outline-slate-800 rounded-md border-2 border-slate-700 p-5">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="p-1 rounded-sm focus:outline-none"
              placeholder="Product Name"
              onChange={handleChange}
              value={values.name}
            />
            <label>Product Label</label>
            <input
              type="number"
              name="price"
              id="price"
              className="p-1 rounded-sm focus:outline-none"
              placeholder="Product Price"
              onChange={handleChange}
              value={values.price}
            />
            <button
              className="p-2 rounded-full bg-slate-500 hover:bg-slate-400 active:bg-slate-600 outline-none"
              type="submit"
            >
              Save Product
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ProductForm;
