import { SNACKS } from "@/data/mockData";
import { useState } from "react";
import OrderForm from "./OrderForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { SnacksProps } from "@/types/Snack";

export default function SnackCard() {
  const [open, setOpen] = useState(false);
  const [selectedSnack, setSelectedSnack] = useState<SnacksProps | null>(null);

  return (
    <>
      {/* snacks layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {SNACKS.map((snack) => (
          <div
            key={snack.id}
            className="rounded-md bg-white shadow-md overflow-hidden"
          >
            <img
              src={snack.image}
              alt={snack.name}
              className="h-40 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-bold">{snack.name}</h3>
              <p className="text-green-600 font-semibold">
                ₹{snack.price}
              </p>
            </div>

            <button
              onClick={() => {
                setSelectedSnack(snack);
                setOpen(true);
              }}
              className="w-full bg-orange-500 py-2 text-white"
            >
              Order Now
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent aria-describedby={undefined}>
          <DialogHeader>
            <DialogTitle>Order Now</DialogTitle>
          </DialogHeader>

          {selectedSnack && (
            <OrderForm
              snackName={selectedSnack.name}
              price={selectedSnack.price}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
