import SnackCard from "@/components/SnackCard";

export default function Snacks() {
    return (
        <div className="px-6 py-10">
            {/* Header */}
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-800">
                    Available Snacks
                </h1>
                <p className="mt-2 text-gray-500">
                    Browse and order delicious snacks from our canteen
                </p>
            </div>

            {/* Snack Cards */}
            <SnackCard />
        </div>
    )
}
