import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Api from '../WebApi';

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [blockList, setBlockList] = useState([]);
  const [unBlockList, setUnBlockList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/user/getUser-list');
      if (Array.isArray(response.data.users)) {
        setUsers(response.data.users);
      } else {
        console.error('Invalid user data format:', response.data);
      }
    } catch (error) {
      console.error('Error fetching user list:', error);
    }
  };

  const handleToggleBlock = async (userId) => {
    try {
      const confirmBlock = window.confirm("Are you sure you want to block the user?");
      if (!confirmBlock) return;

      const blockUrl = `${Api.blockUser}/${userId}`;
      await axios.put(blockUrl);

      setUsers(prevUsers => prevUsers.map(user => {
        if (user._id === userId) {
          user.isBlock = true;
          setBlockList(prevList => [...prevList, user]); 
        }
        return user;
      }));

    } catch (error) {
      console.error('Error block user:', error);
    }
  };

  const handleToggleUnblock = async (userId) => {
    try {
      const confirmUnBlock = window.confirm("Are you sure you want to unblock the user?");
      if (!confirmUnBlock) return;

      const unBlockUrl = `${Api.unBlockUser}/${userId}`;
      await axios.put(unBlockUrl);

      setUsers(prevUsers => prevUsers.map(user => {
        if (user._id === userId) {
          user.isBlock = false;
          setUnBlockList(prevList => [...prevList, user]); 
        }
        return user;
      }));

    } catch (error) {
      console.error('Error unblock user:', error);
    }
  };

  return (
    <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8 lg:max-w-full">
      <div className="pb-6">
      </div>
      <div className="overflow-y-hidden rounded-lg border">
        <div className="overflow-x-auto max-w-screen-xl mx-auto">
          <table className="w-90">
            <thead>
              <tr className="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
                <th className="px-5 py-3">ID</th>
                <th className="px-5 py-3">User Name</th>
                <th className="px-5 py-3">Email</th>
                <th className="px-2 py-3">Contact Number</th>
                <th className="px-5 py-3">Block/Unblock</th>
              </tr>
            </thead>
            <tbody className="text-gray-500">
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr key={user._id}>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">{index + 1}</td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">{user.username}</td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">{user.email}</td>
                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">{user.contact}</td>

                    <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                      {user.isBlock ? (
                        <button
                          className="rounded-full px-3 py-1 text-xs font-semibold bg-red-500 text-white"
                          onClick={() => handleToggleUnblock(user._id)}
                        >
                          Unblock
                        </button>
                      ) : (
                        <button
                          className="rounded-full px-3 py-1 text-xs font-semibold bg-green-500 text-white"
                          onClick={() => handleToggleBlock(user._id)}
                        >
                          Block
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-5">
                    Loading...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
          <span className="text-xs text-gray-600 sm:text-sm">
            Showing 1 to {users.length} of {users.length} Entries
          </span>
          <div className="mt-2 inline-flex sm:mt-0">
            <button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
              Prev
            </button>
            <button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
