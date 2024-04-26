import { useState } from "react";

export default function ProductDetails() {
    const [defaultTaskStatus, setDefaultTaskStatus] = useState("viewAll");

    return <>
      <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8 lg:max-w-full">
        <div className="pb-6">
         
          <h1 className="font-bold text-3xl text-gray-700 mb-6 ">PRODUCT DETAILS</h1>
          <div className="flex justify-evenly">
                    <button disabled={defaultTaskStatus === "viewAll"} onClick={() => setDefaultTaskStatus("viewAll")} className="rounded-full bg-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 mr-2">View All </button>
                    <button disabled={defaultTaskStatus === "companyProducts"} onClick={() => setDefaultTaskStatus("companyProduct")} className="rounded-full bg-green-200 px-4 py-2 text-sm font-semibold text-green-900 mr-2">Company Products </button>
                    <button disabled={defaultTaskStatus === "userProducts"} onClick={() => setDefaultTaskStatus("userProduct")} className="rounded-full bg-yellow-200 px-4 py-2 text-sm font-semibold text-yellow-900 mr-2">User Products </button>
                </div>
         
  
        </div>
        <div className="overflow-y-hidden rounded-lg  border">
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
                  <th className="px-5 py-3">Edit</th>
                  <th className="px-5 py-3">Delete</th>
                </tr>
              </thead>
              <tbody className="text-gray-500">
                <tr>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">1</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="whitespace-no-wrap">Wall Clock</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap flex items-center ml-3">1000</p>
                  </td>

                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap flex items-center ml-6">10</p>
                  </td>

                  
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap flex items-center ml-3">Home Decor</p>
                  </td>

                  <td className="border-b border-gray-200 bg-white px-8 py-5 text-sm">
                    <img className="h-12 w-12 flex-shrink-0 rounded-full" src="https://assets.ajio.com/medias/sys_master/root/20230523/znP0/646cee7042f9e729d7a7effd/-473Wx593H-466187115-multi-MODEL.jpg" alt="" />
                  </td>
  
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <button className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">Edit</button>
                  </td>

                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <button className="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-900">Delete</button>
                  </td>
                </tr>


                <tr>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">2</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="whitespace-no-wrap">Wall Clock</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap flex items-center ml-3">1000</p>
                  </td>

                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap flex items-center ml-6">10</p>
                  </td>

                  
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap flex items-center ml-3">Home Decor</p>
                  </td>

                  <td className="border-b border-gray-200 bg-white px-8 py-5 text-sm">
                    <img className="h-12 w-12 flex-shrink-0 rounded-full" src="https://assets.ajio.com/medias/sys_master/root/20230523/znP0/646cee7042f9e729d7a7effd/-473Wx593H-466187115-multi-MODEL.jpg" alt="" />
                  </td>
  
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <button className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">Edit</button>
                  </td>

                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <button className="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-900">Delete</button>
                  </td>
                </tr>

                <tr>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">3</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="whitespace-no-wrap">Wall Clock</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap flex items-center ml-3">1000</p>
                  </td>

                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap flex items-center ml-6">10</p>
                  </td>

                  
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap flex items-center ml-3">Home Decor</p>
                  </td>

                  <td className="border-b border-gray-200 bg-white px-8 py-5 text-sm">
                    <img className="h-12 w-12 flex-shrink-0 rounded-full" src="https://assets.ajio.com/medias/sys_master/root/20230523/znP0/646cee7042f9e729d7a7effd/-473Wx593H-466187115-multi-MODEL.jpg" alt="" />
                  </td>
  
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <button className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">Edit</button>
                  </td>

                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <button className="rounded-full bg-yellow-200 px-3 py-1 text-xs font-semibold text-yellow-900">Delete</button>
                  </td>
                </tr>
                
              </tbody>
            </table>
  
          </div>
          
        </div>
      </div>
  
    </>
  }