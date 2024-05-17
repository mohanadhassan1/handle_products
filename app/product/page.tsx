"use client";

import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Document, Page, Text } from "@react-pdf/renderer";
import withAuth from "@/components/withAuth";
import dynamic from "next/dynamic";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod. PDFDownloadLink),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  },
);

interface ProductData {
  id: number;
  product: string;
  price: string;
  quantity: string;
}

const Product = () => {
  const [formData, setFormData] = useState<ProductData>({
    id: 0,
    product: "",
    price: "",
    quantity: "",
  });

  const [products, setProducts] = useState<ProductData[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductData | null>(
    null
  );

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof ProductData
  ) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const price = parseFloat(formData.price);
    const quantity = parseFloat(formData.quantity);
    if (price < 0 || quantity < 0) {
      toast.error("Price and quantity must be at least 0");
      return;
    }

    if (selectedProduct) {
      const updatedProducts = products.map((product) =>
        product.id === selectedProduct.id
          ? { ...formData, id: product.id }
          : product
      );
      setProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      setSelectedProduct(null);
      toast.success("Product updated successfully!");
    } else {
      const newProduct = { ...formData, id: Date.now() };
      const updatedProducts = [newProduct, ...products];
      setProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      toast.success("Product added successfully!");
    }
    setFormData({ id: 0, product: "", price: "", quantity: "" });
  };

  const handleDelete = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    toast("Product deleted", {
      icon: "👏",
    });
  };

  const handleEdit = (product: ProductData) => {
    setSelectedProduct(product);
    setFormData({ ...product });
  };

  return (
    <div className="container mx-auto px-4">
      <form onSubmit={handleSubmit} className="max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          {selectedProduct ? "Edit Product" : "Add Product"}
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1 mb-4 md:mb-0">
            <label
              htmlFor="product"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Product
            </label>
            <input
              id="product"
              name="product"
              type="text"
              autoComplete="product"
              placeholder="Enter your product"
              required
              value={formData.product}
              onChange={(e) => handleChange(e, "product")}
              className="block w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex-1 mb-4 md:mb-0">
            <label
              htmlFor="price"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              autoComplete="price"
              placeholder="Enter price"
              required
              value={formData.price}
              onChange={(e) => handleChange(e, "price")}
              className="block w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex-1 mb-4 md:mb-0">
            <label
              htmlFor="quantity"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Quantity
            </label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              autoComplete="quantity"
              placeholder="Enter quantity"
              required
              value={formData.quantity}
              onChange={(e) => handleChange(e, "quantity")}
              className="block w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="w-full md:w-auto flex items-end">
            <button
              type="submit"
              className="w-full px-10 md:w-auto bg-indigo-600 text-white py-2 rounded-md transition duration-300 ease-in-out hover:bg-indigo-700"
            >
              {selectedProduct ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </form>

      <hr className="max-w-screen-xl mx-auto flex-1 border-b border-gray-400 my-10" />

      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-4">Product List</h2>
          <PDFDownloadLink
              className="px-4 md:w-auto bg-transparent text-indigo-700 hover:text-white font-semibold shadow-md py-2 border border-blue-500 hover:border-transparent rounded-md transition duration-300 ease-in-out hover:bg-indigo-500"
              document={
              <Document>
                <Page>
                  <Text>Product List</Text>
                  {products.map((product) => (
                    <Text key={product.id}>
                      {product.product} - ${product.price} - {product.quantity}
                    </Text>
                  ))}
                </Page>
              </Document>
            }
            fileName="products.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download Products"
            }
          </PDFDownloadLink>
        </div>

        <div className="gap-4">
          <div className="flex flex-col justify-between md:flex-row md:space-x-4 flex-1 mb-4">
            <h3 className="text-lg font-semibold flex-1 mb-4 md:mb-0">Name</h3>
            <h3 className="text-lg font-semibold flex-1 mb-4 md:mb-0">Price</h3>
            <h3 className="text-lg font-semibold flex-1 mb-4 md:mb-0">
              Quantity
            </h3>
            <h3 className="text-lg font-semibold flex-1 mb-4 md:mb-0">
              Actions
            </h3>
          </div>

          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col mb-2 md:flex-row md:space-x-4"
            >
              <h3 className="text-gray-600 flex-1 mb-4 md:mb-0">
                {product.product}
              </h3>
              <p className="text-gray-600 flex-1 mb-4 md:mb-0">
                {product.price}
              </p>
              <p className="text-gray-600 flex-1 mb-4 md:mb-0">
                {product.quantity}
              </p>
              <div className="flex flex-1 gap-2 md:mb-0">
                <button
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded"
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 border border-red-700 rounded"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default withAuth(Product);
