import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useSnack } from "@/hooks/useSnack";
import type React from "react";
import type { SetStateAction } from "react";
import type { SnacksProps } from "../types/Snack";

const formSchema = z.object({
  studentId: z.string().min(1, "Student is required"),
  quantity: z
    .number()
    .min(1, "Quantity must be greater than 0"),
});

type productProps = {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  selectedSnack: SnacksProps;
}

export default function StudentForm({ selectedSnack, setOpen }: productProps) {
  const { students, addOrder} = useSnack();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentId: "",
      quantity: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!selectedSnack) return;

    const orderPlace = {
      studentId: values.studentId,

      products: [
        {
          productId: String(selectedSnack.id),
          title: selectedSnack.name,
          price: selectedSnack.price,
          quantity: values.quantity 
        },
      ],
      totalAmount: selectedSnack.price * values.quantity,
    };

    const res = await addOrder(orderPlace);
    console.log(res);
    setOpen(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        {/* header */}
        <div>
          <h1>Select product : <span>{selectedSnack.name}</span></h1>
          <div>₹ {selectedSnack.price}</div>
        </div>

        {/* Student */}
        <FormField
          control={form.control}
          name="studentId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl className="w-full">
                  <SelectTrigger>
                    <SelectValue placeholder="Select Student" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {students.map((itm) => (
                    <SelectItem key={itm.id} value={String(itm.id)}>{itm.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Quantity */}
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantity</FormLabel>
              <Select
                onValueChange={(val) => field.onChange(Number(val))}
              >
                <FormControl className="w-full">
                  <SelectTrigger>
                    <SelectValue placeholder="Select Quantity" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <SelectItem key={n} value={String(n)}>
                      {n}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
