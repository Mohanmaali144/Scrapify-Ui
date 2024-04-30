import axios from "axios";
import { useEffect, useState } from "react";
import Api from "../WebApi";

export default function ScrapList() {
  const [scrapList, setScrapList] = useState([]);

  useEffect(() => {
    loadScrapList();
  }, []);

  const loadScrapList = async () => {
    try {
      const response = await axios.get(Api.GetScrapList);
      setScrapList(response.data.ScrapProduct);
    } catch (error) {
      console.log('Error fetching scrap list:', error);
    }
  };

  const deleteItem = async (itemId) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete this scrap product?");
      if (!confirmDelete) return; 
      const deleteUrl = `${Api.deleteScrapItem}/${itemId}`;
      await axios.delete(deleteUrl);
      setScrapList(prevList => prevList.filter(item => item._id !== itemId));
    } catch (error) {
      console.error('Error deleting scrap item:', error);
    }
  };
  
  return (
    <>
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8 lg:max-w-full">
  <div className="pb-6">
  </div>
  <div className="overflow-y-hidden rounded-lg border">
    <div className="overflow-x-auto max-w-screen-xl mx-auto">
      <div className="slider">
        <table className="w-90">
          <thead>
            <tr className="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
              <th className="px-5 py-3">ID</th>
              <th className="px-5 py-3">Scrap Name</th>
              <th className="px-5 py-3">Scrap Price</th>
              <th className="px-5 py-3">Scrap Category</th>
              <th className="px-5 py-3">Scrap image</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">View More</th>
              <th className="px-5 py-3">Delete</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            {scrapList.map((scrapItem, index) => (
              <tr key={scrapItem._id}>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">{index + 1}</td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">{scrapItem.title}</td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">{scrapItem.price}</td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">{scrapItem.categoryName}</td>
                <td className="border-b border-gray-200 bg-white px-8 py-5 text-sm">
                  <img className="h-12 w-12 flex-shrink-0 rounded-full" src={scrapItem.thumbnail} alt={scrapItem.name} />
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">{scrapItem.status}</td>

                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <button className="text-blue-700 hover:underline focus:outline-none">View More</button>
                </td>
                
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <button onClick={() => deleteItem(scrapItem._id)} className="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-900">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
      <span className="text-xs text-gray-600 sm:text-sm"> Showing 1 to 5 of {scrapList.length} Entries </span>
      <div className="mt-2 inline-flex sm:mt-0">
        <button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</button>
        <button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</button>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
