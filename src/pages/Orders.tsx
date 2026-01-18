import { useSnack } from "@/hooks/useSnack"
import { useEffect } from "react";

export default function Orders() {
    const { orders, ordersLoading, fetchOrders } = useSnack();
    console.log(orders)

    useEffect(() => {
        (async () => {
            try {
                await fetchOrders();
            } catch (error) {
                console.log(error)
            }
        })()
    }, []);

    if (ordersLoading) return (
        <div>
            loading...
        </div>
    )

    if (orders.length === 0) {
        return <p className="text-gray-500">No purchases yet</p>;
    }

    return (
        <div className="space-y-6">
            {orders.map(order => (
                <div
                    key={order.id}
                    className="border rounded-lg p-4 space-y-3"
                >
                    {/* Order Header */}
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-medium">
                                Order #{order.id}
                            </p>
                            <p className="text-sm text-gray-500">
                                Student ID: {order.studentId}
                            </p>
                            <p className="text-sm text-gray-500">
                                {new Date(order.createdAt).toDateString()}
                            </p>
                        </div>

                        <span className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full">
                            Completed
                        </span>
                    </div>

                    {/* Products */}
                    <div className="space-y-2">
                        {order.products?.map(product => (
                            <div
                                key={`${order.id}-${product.productId}`}
                                className="flex justify-between border rounded-md p-2 text-sm"
                            >
                                <div>
                                    <p className="font-medium">{product.title}</p>
                                    <p className="text-gray-500">
                                        Qty: {product.quantity}
                                    </p>
                                </div>

                                <p className="font-semibold">
                                    ₹{product.price * product.quantity}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Total */}
                    <div className="text-right font-semibold">
                        Total: ₹{order.totalAmount}
                    </div>
                </div>
            ))}
        </div>
    );
}
