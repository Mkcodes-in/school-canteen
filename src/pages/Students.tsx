import StudentCard from "@/components/StudentCard";
import { AppContext } from "@/context/AppContext";
import { useContext, useEffect } from "react";

export default function Students() {
    const student = useContext(AppContext);
    
    useEffect(() => {
        student?.fetchStudents();
    }, []);

    return (
        <div className="px-6 py-10">
            {/* Header */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        Students
                    </h1>
                    <p className="mt-1 text-gray-500">
                        Manage student accounts and view spending
                    </p>
                </div>

                {/* Add Student Button */}
                <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded font-medium cursor-pointer">
                    + Add New Student
                </button>
            </div>

            {/* Student Cards */}
            <StudentCard />
        </div>
    )
}
