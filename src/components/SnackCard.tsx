import { SNACKS } from "@/data/mockData";

export default function SnackCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {SNACKS.map((snack) => (
        <div
          key={snack.id}
          className="group rounded-md bg-white shadow-md overflow-hidden hover:shadow-2xl transition duration-300"
        >
          {/* Image */}
          <div className="relative h-40 overflow-hidden">
            <img
              src={snack.image}
              alt={snack.name}
              className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Price badge */}
            <span className="absolute top-3 right-3 rounded-full bg-green-600 px-3 py-1 text-sm font-semibold text-white shadow">
              ₹{snack.price}
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-3 p-5">
            <h3 className="text-lg font-bold text-gray-800">
              {snack.name}
            </h3>

            <button className="mt-2 flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-orange-500 to-yellow-500 py-2.5 text-white font-semibold shadow-md hover:from-orange-600 hover:to-yellow-600 transition cursor-pointer">
              Order Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
