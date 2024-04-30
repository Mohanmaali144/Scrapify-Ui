import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../redux-config/CategorySlice";
import { getProduct } from "../../redux-config/ProductSlice";
import { getScrapCategorySlice } from "../../redux-config/ScrapCategory";

export default function ProductDetails() {
  const { productList, isLoading, error } = useSelector((store) => store.product);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
    dispatch(getCategory());
    dispatch(getScrapCategorySlice());
  }, []);
  const renderProductRows = () => {
    return productList.map((productItem, index) => (
      <tr key={productItem._id}>
        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <p className="whitespace-no-wrap">{index + 1}</p>
        </td>

        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <div className="flex items-center">
            <div className="ml-3">
              <p className="whitespace-no-wrap">{productItem.productName}</p>
            </div>
          </div>
        </td>
        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <p className="whitespace-no-wrap flex items-center ml-3">{productItem.price}</p>        </td>

        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <p className="whitespace-no-wrap flex items-center ml-6">{productItem.quantity}</p>
        </td>
        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <p className="whitespace-no-wrap flex items-center ml-3">{productItem.category}</p>
        </td>
        <td className="border-b border-gray-200 bg-white px-8 py-5 text-sm">
          <img className="h-12 w-12 flex-shrink-0 rounded-full" src={productItem.thumbnail} alt="" />
        </td>

        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <button className="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-900">Delete</button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8 lg:max-w-full">
      <div className="pb-6">
        <div className="flex justify-evenly">
          <button
            className="rounded-full bg-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 mr-2"
          >
            View All
          </button>
          <button
            className="rounded-full bg-green-200 px-4 py-2 text-sm font-semibold text-green-900 mr-2"
          >
            Company Products
          </button>
          <button
            className="rounded-full bg-yellow-200 px-4 py-2 text-sm font-semibold text-yellow-900 mr-2"
          >
            User Products
          </button>
        </div>
      </div>
      <div className="overflow-y-hidden rounded-lg border">
        <div className="overflow-x-auto max-w-screen-xl mx-auto">
          <table className="w-90">
            <thead>
              <tr className="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                <th className="px-5 py-3">ID</th>
                <th className="px-5 py-3">Product Name</th>
                <th className="px-5 py-3">Product Price</th>
                <th className="px-5 py-3">Stock Quantity</th>
                <th className="px-5 py-3">Product Category</th>
                <th className="px-5 py-3">Product image</th>
                <th className="px-5 py-3">Delete</th>
              </tr>
            </thead>
            <tbody className="text-gray-500">
              {renderProductRows()}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
