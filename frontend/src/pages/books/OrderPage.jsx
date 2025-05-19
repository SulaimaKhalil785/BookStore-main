import React from 'react'
import { useGetOrderByEmailQuery } from '../../redux/features/orders/ordersApi'
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {
    const { currentUser} = useAuth()
    const navigateTo = useNavigate()


    const { data: orders = [], isLoading, isError } = useGetOrderByEmailQuery(currentUser.email);
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error geting orders data</div>
    return (
        <div className='container mx-auto p-6'>
            <h2 className='text-2xl font-semibold mb-4'>Your Orders</h2>
            {
                orders.length === 0 ? (<div>No orders found!</div>) : (<div>
                    {
                        orders.map((order, index) => (
                            <div key={order._id} className="border-b mb-4 pb-4">
                                <p className='p-1 bg-secondary text-white w-10 rounded mb-1'># {index + 1}</p>
                                <h2 className="font-bold">Order ID: {order._id}</h2>
                                <p className="text-gray-600">Name: {order.name}</p>
                                <p className="text-gray-600">Email: {order.email}</p>
                                <p className="text-gray-600">Phone: {order.phone}</p>
                                <p className="text-gray-600">Total Price: ${order.totalPrice}</p>
                                <h3 className="font-semibold mt-2">Address:</h3>
                                <p> {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>
                                <h1 className='font-semibold mt-5 text-gray-600'>Status: <span className={`text-white uppercase rounded-lg ${order.status === 'delivered' ? "p-2 bg-green-500" : "bg-red-500 p-2 rounded-lg text-white"}`}> {order.status} </span></h1>
                                <h3 className="font-semibold mt-2">Books:</h3>
                                <ul>
                                    {order.productIds.map((book) => (
                                        
                                        <li key={book._id}>
                                           <div className="flex gap-8 items-center w-1/4 p-2 justify-between" onClick={()=> navigateTo(`/books/${book._id}`)}> <p className='hover:cursor-pointer w-1/2 hover:text-yellow-500'> {book.title} </p> <img className='h-48 object-cover w-max border border-yellow-500 ' src={book.coverImage ? book.coverImage : "https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png"} /> </div>
                                            </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }
                </div>)
            }
        </div>
    )
}

export default OrderPage