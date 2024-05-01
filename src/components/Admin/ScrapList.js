import axios from "axios";
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import Api from "../WebApi";

export default function ScrapList() {
  const [scrapList, setScrapList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadScrapList();
  }, []);

  const loadScrapList = async () => {
    try {
      const response = await axios.get(Api.GetScrapList);
      setScrapList(response.data.ScrapProduct);
      setLoading(false);
    } catch (error) {
      console.log('Error fetching scrap list:', error);
      setLoading(false);
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
  console.log(scrapList);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && scrapList && scrapList.length === 0 && <p>No scrap lead available right now.</p>}
      {!loading && scrapList && scrapList.length > 0 && (
        <div className="overflow-x-auto">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Scrap name</Table.HeadCell>
              <Table.HeadCell>UserContact</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>Status</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {scrapList.map(item => (
                <Table.Row key={item._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {item.title}
                  </Table.Cell>
                  <Table.Cell>{item.seller.contact}</Table.Cell>
                  <Table.Cell>{item.categoryName}</Table.Cell>
                  <Table.Cell>{item.price}</Table.Cell>
                  <Table.Cell>{item.status}</Table.Cell>
                  <Table.Cell>
                    <button className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                      View Details
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      )}
    </>
  );
}
