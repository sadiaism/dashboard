// "use client"
// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
// import Swal from "sweetalert2";
// import ProtectedRoute from "@/app/components/protected/page";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import React from "react";
// import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// interface CartItem {
//     name: string;
//     image: SanityImageSource;
// }


// interface Order {
//     _id:string;
//     firstName:string;
//     lastName:string;
//     phone:number;
//     email:string;
//     address:string;
//     zipCode:string;
//     city:string;
//     total:number;
//     discount:number;
//     orderDate:string;
//     status:string | null
//      cartItems: { productName: string; image: string }[];

// //     cartItems:{
// //         map(arg0: (item:any) => void): import("react").ReactNode | Iterable<import("react").ReactNode>;name :string; image:string
// // }

// }

// export default function AdminDashboard(){
     
//     const[orders, setOrders] = useState<Order[]>([])
//     const [selectedOrderId, setselectedOrderId] = useState<string | null >(null)
//     const[filter, setFilter] = useState("All")

//     useEffect(() => {
//         client.fetch(
//             `*[_type == "order"]{
//             _id,
//             firstName,
//             lastName,
//             phone,
//             email,
//             address,
//             city,
//             zipCode,
//             total,
//             discount,
//             orderDate,
//             status,
//             cartItems[] ->{
//             name,
//             image,
//             }

//             }`
//         )
//         .then((data) => setOrders(data))

//          .catch((error) =>console.log("error fetching products", error))
//     },[filter])

//     const filteredOrders = filter === "All" ? orders: orders.filter((order) => order.status === filter)

//     const toggleOrderDetails = (orderId : string) => {
//         setselectedOrderId((prev) => (prev === orderId ? null : orderId))
        


//         // const handleStatusChange = async (orderId : string, newStatus : string) => {
//         //     try{
//         //         await client
//         //         .patch(orderId)
//         //         .set({sttus: newStatus})
//         //         .commit()

//         //         setOrders((prevOrder) =>prevOrder.map((order) => order._id === orderId ? {
//         //             ...order,
//         //             status:newStatus,}
//         //          : order)
//         //         )

//         //         if(newStatus === "dispatch"){
//         //             Swal.fire("Order Dispatched", "Your order has been dispatched" , "success")

//         //         }else if (newStatus === "success"){
//         //             Swal.fire("success" , "Your order has been completed" , "success")
//         //         }
            
            
                
                
//         //   //  } 
//         //     catch(error){
//         //         Swal.fire("Error" , "Failed to change status" ,"error")
//         //     }
//         }
//     };


    

//         // function handleStatus(_id:string, value:string): void {
//         //  throw new Error("Function not implemented.");}


//         const handleStatus = async (orderId: string, newStatus: string) => {
//             try {
//                 await client
//                     .patch(orderId)
//                     .set({ status: newStatus }) // Corrected the typo in "status"
//                     .commit();
        
//                 setOrders((prevOrders) =>
//                     prevOrders.map((order) =>
//                         order._id === orderId
//                             ? { ...order, status: newStatus }
//                             : order
//                     )
//                 );
        
//                 if (newStatus === "dispatch") {
//                     Swal.fire("Order Dispatched", "Your order has been dispatched", "success");
//                 } else if (newStatus === "success") {
//                     Swal.fire("Success", "Your order has been completed", "success");
//                 }
//              } 
//               catch (error) {
//                 console.error("Error updating order status:", error);
//                  Swal.fire("Error", "Failed to change status", "error");
//              }
//         };
        


        
//     // 
//     const handleDelete = async (orderId: string) => {
//         const result = await Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!",
//         });
    
//         if (!result.isConfirmed) return;
    
//         try {
//             await client.delete(orderId);
//             setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
//             Swal.fire("Deleted", "Your order has been deleted", "success");
//         } catch (error) {
//             console.error("Error updating order status:", error);
//             Swal.fire("Error", "Failed to delete order", "error");
//         }
    
    

    

//         return(
//             <ProtectedRoute>
//                 <div className="flex flex-col h-screen bg-gray-100">
//                     <nav className="bg-red-600 text-white p-4 shadow-lg flex justify-between items-center">
//                         <h2 className="text-2xl font-bold">
//                             Admin Dashboard 
//                         </h2>
//                         <div className="flex space-x-4">
//                             {["All", "pending" ,"success","dispatch"].map((status) => (
//                                 <button key={status} className={`px-4 py-2 rounded-lg transition-all ${
//                                 filter === status ? "bg-white text-red-600 font-bold" : "text-white"
//                                 }`}
//                                 onClick={() => setFilter(status)}
//                                 >
//                                     {status.charAt(0).toUpperCase() + status.slice(1)}

//                                 </button>
//                             ))}

//                         </div>
//                            <div></div>
//                     </nav>

//                     <div className="p-6 overflow-auto">
//                         <h2 className="text-2xl font-bold text-center">
//                             Orders
//                         </h2>

//                         <div className="overflow-y-auto bg-white rounded-lg shadow-sm ">

//                             <table className="w-full text-left border-collapse">
//                                 <thead>
//                                     <tr className="bg-gray-200">
//                                         <th className="p-2">ID</th>
//                                         <th>Customer</th>
//                                         <th>Address</th>
//                                         <th>Date</th>
//                                         <th>Total</th>
//                                         <th>Status</th>
//                                         <th>Actions</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody className="divide-y divide-gray-200">
//                                     {filteredOrders.map((order) =>(
//                                         <React.Fragment key={order._id}>
//                                             <tr className="cursor-pointer hover:bg-red-100" onClick={() => toggleOrderDetails(order._id)}>
//                                                 <td className="p-2">{order._id}</td>
//                                                 <td>{order.firstName} {order.lastName}</td>
//                                                 <td>{order.address}</td>
//                                                 <td>{new Date(order.orderDate).toLocaleDateString()}</td>
//                                                 <td>${order.total}</td>

                                            
//                                             <td>
//                                             <select value={order.status ||  ""} onChange={(e) => handleStatus(order._id, e.target.value)}className="bg-gray-100 p-3 rounded">

//                                                 <option value="pending">Pending</option>
//                                                 <option value="success">Success</option>
//                                                 <option value="dispatch">Dispatched</option>

//                                             </select>
//                                             </td>
//                                             <td className="px-10 py-10">
//                                                 <button onClick={(e) => {
//                                                     e.stopPropagation();
//                                                     handleDelete(order._id)
//                                                 }} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition">
//                                                     Delete
//                                                 </button>

//                                             </td>
//                                             </tr>
//                                             {selectedOrderId === order._id && (
//                                                 <tr>
//                                                     <td colSpan={7} className="bg-gray-50 p-4">
//                                                         <h3 className="font-bold">
//                                                             Order Details
//                                                          </h3>
//                                                          <p>Phone: <strong>{order.phone}</strong></p>
//                                                          <p>Email: <strong>{order.email}</strong></p>
//                                                          <p>City:  <strong>{order.city}</strong></p>
//                                                          <ul>
//                                                             {order.cartItems.map((item:CartItem) => {
//                                                                 <li className="flex items-center gap-2" key={`${order._id}`}>
//                                                                     {item.name}
//                                                                     {item.image && (
//                                                                         <Image
//                                                                         src={urlFor(item.image).url()}
//                                                                         alt="image"
//                                                                         width={100}
//                                                                         height={100}/>
//                                                                     )}

//                                                                 </li>
//                                                             })}
//                                                          </ul>

//                                                     </td>
//                                                 </tr>
//                                             )}
//                                         </React.Fragment>
//                                     ))}

//                                 </tbody>
//                             </table>

//                         </div>

//                     </div>

//                 </div>
//             </ProtectedRoute>
//         )

    


//     }



"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import ProtectedRoute from "@/app/components/ProtectedRoute";

interface Order {
  _id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  total: number;
  discount: number;
  orderDate: string;
  status: string | null;
  cartItems: { productName: string; image: string }[];
}

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    client
      .fetch(
        `*[_type == "order"]{
          _id,
          firstName,
          lastName,
          phone,
          email,
          address,
          city,
          zipCode,
          total,
          discount,
          orderDate,
          status,
          cartItems[]->{
            productName,
            image
          }
        }`
      )
      .then((data) => setOrders(data))
      .catch((error) => console.error("Error fetching orders:", error));
  }, []);

  const filteredOrders =
    filter === "All" ? orders : orders.filter((order) => order.status === filter);

  const toggleOrderDetails = (orderId: string) => {
    setSelectedOrderId((prev) => (prev === orderId ? null : orderId));
  };

  const handleDelete = async (orderId: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      await client.delete(orderId);
      setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
      Swal.fire("Deleted!", "Your order has been deleted.", "success");
    } catch (error) {
      console.error("Error deleting order:", error);
      Swal.fire("Error!", "Something went wrong while deleting.", "error");
    }
  };

  const handleStatusChange = async (orderId: string, newStatus: string) => {
    try {
      await client
        .patch(orderId)
        .set({ status: newStatus })
        .commit();
      
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status: newStatus } : order
        )
      );

      if (newStatus === "dispatch") {
        Swal.fire("Dispatch", "The order is now dispatched.", "success");
      } else if (newStatus === "success") {
        Swal.fire("Success", "The order has been completed.", "success");
      }
    } catch (error) {
      console.error("Error updating order status:", error);
      Swal.fire("Error!", "Something went wrong while updating the status.", "error");
    }
  };

  return (
    <ProtectedRoute>
      <div className="flex flex-col h-screen bg-gray-100 p-[24px]">
        {/* Navbar */}
        <nav className="bg-red-600 text-white p-4 shadow-lg flex justify-between">
          <h2 className="text-2xl font-bold">Admin Dashboard</h2>
          <div className="flex space-x-4">
            {["All", "pending", "dispatch", "success"].map((status) => (
              <button
                key={status}
                className={`px-4 py-2 rounded-lg transition-all ${
                  filter === status ? "bg-white text-red-600 font-bold" : "text-white"
                }`}
                onClick={() => setFilter(status)}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </nav>

        {/* Orders Table */}
        <div className="p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Orders</h2>
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 text-sm lg:text-base">
              <thead className="bg-gray-50 text-red-600">
                <tr>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Address</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredOrders.map((order) => (
                  <React.Fragment key={order._id}>
                    <tr
                      className="cursor-pointer hover:bg-red-100 transition-all "
                      onClick={() => toggleOrderDetails(order._id)}
                    >
                      <td>{order._id}</td>
                      <td>{order.firstName} {order.lastName}</td>
                      <td>{order.address}</td>
                      <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                      <td>${order.total}</td>
                      <td>
                        <select
                          value={order.status || ""}
                          onChange={(e) => handleStatusChange(order._id, e.target.value)}
                          className="bg-gray-100 p-1 rounded"
                        >
                          <option value="pending">Pending</option>
                          <option value="dispatch">Dispatch</option>
                          <option value="success">Success</option>
                        </select>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(order._id);
                          }}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                    {selectedOrderId === order._id && (
                      <tr>
                        <td colSpan={7} className="bg-gray-50 p-4 transition-all animate-fadeIn">
                          <h3 className="font-bold">Order Details</h3>
                          <p><strong>Phone:</strong> {order.phone}</p>
                          <p><strong>Email:</strong> {order.email}</p>
                          <p><strong>City:</strong> {order.city}</p>
                          <ul>
                            {order.cartItems.map((item, index) => (
                              <li key={`${order._id}-${index}`} className="flex items-center gap-2">
                                {item.productName}
                                {item.image && (
                                  <Image src={urlFor(item.image).url()} width={40} height={40} alt={item.productName} />
                                )}
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}