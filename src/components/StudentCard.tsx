import { useSnack } from "@/hooks/useSnack";

export default function StudentCard() {
  const { students } = useSnack();

  return (
    <>
      {/* Student Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {students.map((student) => (
          <div
            key={student.id}
            className="rounded-2xl bg-white p-5 shadow-md hover:shadow-xl transition"
          >
            <p className="text-xs text-gray-400">ID: {student.id}</p>

            <h3 className="mt-1 text-lg font-semibold text-gray-800">
              {student.name}
            </h3>

            <p className="mt-3 text-sm text-gray-500">
              Total Spending
            </p>

            <p className="text-xl font-bold text-red-500">
              {/* ₹{student} */}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
