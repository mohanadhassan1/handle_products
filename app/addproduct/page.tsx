import React from "react";

export default function Product() {
  return (
    <>

    <div className="container mx-auto mt-10 px-4 h-screen">
      <form className="max-w-screen-xl mx-auto">
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
              className="block w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="w-full md:w-auto flex items-end">
            <button
              type="submit"
              className="w-full px-10 md:w-auto bg-indigo-600 text-white py-2 rounded-md transition duration-300 ease-in-out hover:bg-indigo-700"
            >
              Add
            </button>
          </div>
        </div>
      </form>


      <hr className="max-w-screen-xl mx-auto flex-1 border-b border-gray-400 mt-10" />

   
        

    </div>
    </>
  );
}
