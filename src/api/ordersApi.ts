const ORDER_URL = "https://696b4411624d7ddccaa0a3bd.mockapi.io/orders";

export const getOrders = async () => {
  const res = await fetch(ORDER_URL);
  return res.json();
};

export const createOrder = async (order: any) => {
  const res = await fetch(`${ORDER_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });
  return res.json();
};

export const getOrdersByStudent = async (id: string) => {
  const res = await fetch(`${ORDER_URL}?studentId=${id}`);

  if (!res.ok) {
    throw new Error("Orders fetch failed");
  }

  return res.json();
};
