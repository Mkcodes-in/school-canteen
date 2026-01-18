import StudentCard from "@/components/StudentCard";
import { useState } from "react";
import StudentForm from "@/components/StudentForm";

export default function Students() {
    const [open, setOpen] = useState(false);
    
    return (
        <div className="px-6 py-10">
            {/* Header */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Students</h1>
                    <p className="mt-1 text-gray-500">
                        Manage student accounts and view spending
                    </p>
                </div>

                {/* Add Student Button */}
                <StudentForm
                    open={open}
                    setOpen={setOpen}
                />
            </div>

            {/* Student Cards */}
            <StudentCard />
        </div>
    );
}
