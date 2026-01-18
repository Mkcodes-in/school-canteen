export default function Loader() {
  return (
    <div className="space-y-6 animate-pulse">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="border rounded-lg p-4 space-y-4"
        >
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <div className="h-4 w-32 bg-gray-200 rounded" />
              <div className="h-3 w-40 bg-gray-200 rounded" />
            </div>
            <div className="h-6 w-20 bg-gray-200 rounded-full" />
          </div>

          {/* Products */}
          <div className="space-y-2">
            {Array.from({ length: 2 }).map((_, j) => (
              <div
                key={j}
                className="flex justify-between items-center border rounded-md p-2"
              >
                <div className="space-y-2">
                  <div className="h-3 w-28 bg-gray-200 rounded" />
                  <div className="h-3 w-20 bg-gray-200 rounded" />
                </div>
                <div className="h-4 w-12 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
