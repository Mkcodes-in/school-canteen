import { useSnack } from "@/hooks/useSnack";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function StudentCard() {
  const { students, studentsLoading } = useSnack();
  const navigate = useNavigate();

  if (studentsLoading) return (
    <div className="grid place-content-center h-screen">
      <h2>Loading...</h2>
    </div>
  )

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {students.map((student) => (
        <div
          key={student.id}
          className="group rounded-md bg-white p-6 border border-gray-200 shadow-sm hover:border-orange-600 transition duration-300"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-col">
              <p className="text-xs text-gray-400">ID: {student.id}</p>
              <h3 className="mt-2 text-lg font-semibold text-gray-900">
                {student.name}
              </h3>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="flex flex-col">
              <p className="text-xs text-gray-500">Referral Code</p>
              <span className="mt-1 text-sm font-medium text-gray-800 bg-gray-100 px-3 py-1 rounded-lg">
                {student.referralCode}
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
            <button
              onClick={() => navigate(`/students/${student.id}`)}
              className="flex items-center gap-2 text-md group-hover:text-orange-500 transition cursor-pointer">
              View details <ArrowRight size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
