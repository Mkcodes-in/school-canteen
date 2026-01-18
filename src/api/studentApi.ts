import type { Students } from "@/types/Student";

const BASE_URL = "https://696b4411624d7ddccaa0a3bd.mockapi.io/students";

export const getStudents = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const studentDetail = async (id: string) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  const data = await res.json();
  return data;
};

export const createStudent = async (student: Partial<Omit<Students, "id">>) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });

  if (!res.ok) {
    throw new Error("Failed to create student");
  }

  return res.json();
};