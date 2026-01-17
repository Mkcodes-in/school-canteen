import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useSnack } from "@/hooks/useSnack";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import React, { useEffect, type SetStateAction } from "react";

type FormValues = {
    name: string;
};

type FormProps = {
    open: boolean;
    setOpen: React.Dispatch<SetStateAction<boolean>>;
}

export default function StudentForm({open, setOpen}: FormProps) {
    const { fetchStudents, addStudent } = useSnack();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>();

    useEffect(() => {
        fetchStudents();
    }, []);

    const onSubmit = async (data: FormValues) => {
        await addStudent(data);
        reset();
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
                    + Add New Student
                </Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New Student</DialogTitle>
                    <DialogDescription>
                        Enter student details and click save.
                    </DialogDescription>
                </DialogHeader>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <label className="text-sm font-medium">Student Name</label>
                        <Input
                            {...register("name", { required: "Name is required" })}
                            placeholder="Enter name"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm">{errors.name.message}</p>
                        )}
                    </div>

                    <DialogFooter>
                        <Button type="submit" className="bg-orange-600 rounded text-white">
                            Save
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
