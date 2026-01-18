import { getOrdersByStudent } from "@/api/ordersApi";
import { studentDetail } from "@/api/studentApi";
import Loader from "@/components/Loader";
import type { Order } from "@/types/Order";
import type { Students } from "@/types/Student";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function StudentDetail() {
    const [student, setStudent] = useState<Students | null>(null);
    const [orders, setOrders] = useState<Order[]>([])
    const [loading, setLoading] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (!id) return;

        const fetchData = async () => {
            try {
                setLoading(true);

                const studentRes = await studentDetail(id);
                const ordersRes = await getOrdersByStudent(id);

                setStudent(studentRes);
                setOrders(ordersRes);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (loading) {
        return <Loader />;
    }

    if (!loading && orders.length === 0) {
        return <p className="text-gray-500">No purchases yet</p>;
    }

    const totalSpending =
        orders?.map(order => order.products?.reduce((sum, p) => sum + p.price * p.quantity, 0) ?? 0).reduce((a, b) => a + b, 0) ?? 0;

    return (
        <div className="min-h-screen p-6 flex justify-center items-start">
            <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-6">

                {/* Header */}
                <div className="flex items-center justify-between border-b pb-4 mb-6">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Student Details
                        </h2>
                        <p className="text-sm text-gray-500">
                            Complete profile & order information
                        </p>
                    </div>
                </div>

                {/* Student Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div>
                        <p className="text-sm text-gray-500">Student ID</p>
                        <p className="text-lg font-medium text-gray-800">#{student?.id}</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Name</p>
                        <p className="text-lg font-medium text-gray-800">{student?.name}</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Referral Code</p>
                        <p className="text-lg font-medium text-gray-800">{student?.referralCode}</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Total Spending</p>
                        <p className="text-lg font-medium text-green-800">₹ {totalSpending}</p>
                    </div>
                </div>

                {/* Orders Section */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Orders
                    </h3>

                    <div className="space-y-4">
                        {/* Order Card */}
                        {orders.map((order) => (
                            <div key={order.id} className="mb-6 space-y-3">

                                {/* Order Header */}
                                <div className="flex justify-between items-center border rounded-lg p-4">
                                    <div>
                                        <p className="font-medium text-gray-800">
                                            Order #{order.id}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Placed on {new Date(order.createdAt).toDateString()}
                                        </p>
                                    </div>

                                    <span className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full">
                                        Completed
                                    </span>
                                </div>

                                {/* Products inside order */}
                                <div className="pl-6 space-y-2">
                                    {order.products.map((product) => (
                                        <div
                                            key={`${order.id}-${product.productId}`}
                                            className="flex justify-between border rounded-md p-3"
                                        >
                                            <div>
                                                <p className="font-medium">{product.title}</p>
                                                <p className="text-sm text-gray-500">
                                                    Qty: {product.quantity}
                                                </p>
                                            </div>

                                            <p className="font-semibold">
                                                ₹{product.price * product.quantity}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
