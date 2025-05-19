import axios from "axios"
import { useState } from "react";
import { useGetAllOrdersQuery } from "../../redux/features/orders/ordersApi";
import { Link } from "react-router-dom";

const ManageOrders = () => {
  const { data: orders = [] } = useGetAllOrdersQuery();
  const [orderItems, setOrderItems] = useState(null);
  const updateStatus = async(order,e)=>{
    try {
        const data = {
            status:e.target.value
        }
        const res = await axios.post(`http://localhost:5000/api/orders/${order._id}`,data)
        if(res){
            alert("Order status updated!")
        }
    } catch (error) {
        console.log(error)
        alert("Failed to update order status!")
    }
  }
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-10">Manage Orders</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left bg-white border border-gray-300 rounded-lg shadow-md">
          {/* Head */}
          <thead className="bg-gray-100 text-gray-800 uppercase text-sm font-semibold border-b border-gray-300">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Customer Name</th>
              <th className="px-4 py-2">Customer Phone</th>
              <th className="px-4 py-2">Total Price</th>
              <th className="px-4 py-2">Items</th>
              <th className="px-4 py-2">Order Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={order._id}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition-colors`}
              >
                <td className="px-4 py-2 border-b border-gray-300">
                  {index + 1}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {order.name}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {order.phone}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  ${order.totalPrice.toFixed(2)}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  <button
                    onClick={() => {
                      setOrderItems(order);
                    }}
                    className="bg-purple-500 text-white rounded-sm p-1"
                  >
                    View
                  </button>
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  <select className="hover:cursor-pointer" onChange={(e)=>updateStatus(order,e)} name="status" id="status">
                    <option value={order.status}>
                      {order.status === "delivered" ? "Completed" : order.status} 
                    </option>
                    {order.status}
                    <option value="pending">Pending</option>
                    <option value="cancelled">Cancelled</option>
                    <option value="on route">On Route</option>
                    <option value="delivered">Completed</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {orderItems && (
        <div className="my-10">
          <h1>Showing Items for Order No.{orderItems._id}</h1>

          <div className="flex  gap-10 my-10">
            {orderItems.productIds.map((product) => {
              return (
                <div
                  key={product._id}
                  className="flex justify-center flex-col gap-5"
                >
                  <img
                    src={product.coverImage}
                    alt=""
                    className="w-20 h-20 object-cover"
                  />
                  <div>
                    <Link
                      className="hover:text-purple-400"
                      to={`/books/${product._id}`}
                    >
                      {product.title}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageOrders;
