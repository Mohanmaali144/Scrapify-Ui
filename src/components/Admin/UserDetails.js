export default function UserDetails(){
    return<>
       <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8 lg:max-w-full">
      <div className="pb-6">
        <div>
        <h1 className="font-bold text-3xl text-gray-700 mb-6 ">USER DETAILS</h1>
        </div>

      </div>
      <div className="overflow-y-hidden rounded-lg  border">
        <div className="overflow-x-auto max-w-screen-xl mx-auto">
          <table className="w-90">
            <thead>
              <tr className="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white">
              <th className="px-5 py-3">ID</th>
                  <th className="px-5 py-3">User Name</th>
                  <th className="px-5 py-3">Email</th>
                  <th className="px-2 py-3">Contact Number</th>
                  <th className="px-5 py-3">Pincode</th>
                  <th className="px-5 py-3"><span className="ml-10">Full Address</span></th>
                  <th className="px-2 py-3">View More</th>
                  <th className="px-5 py-3">Edit</th>
                  <th className="px-5 py-3">Delete</th>
              </tr>
            </thead>
            <tbody className="text-gray-500">
            <tr>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap">1</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-2 py-5 text-sm">
                  
                        <p className="whitespace-no-wrap flex items-center">Cheeku Sharma</p>
                     
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap flex items-center">ck@gmail.com</p>
                  </td>

                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap flex items-center">9890097730</p>
                  </td>

                  
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap flex items-center">452019</p>
                  </td>

                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p className="whitespace-no-wrap flex items-center">10/4 Sharma Enclave Near Bengali Square Indore</p>
                  </td>

                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <button className="text-blue-700 hover:underline focus:outline-none">View More</button>
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
        <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
          <span className="text-xs text-gray-600 sm:text-sm"> Showing 1 to 5 of 12 Entries </span>
          <div className="mt-2 inline-flex sm:mt-0">
            <button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Prev</button>
            <button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100">Next</button>
          </div>
        </div>
      </div>
    </div>
    
    </>
}