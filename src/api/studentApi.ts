const BASE_URL = "https://696b4411624d7ddccaa0a3bd.mockapi.io/students";

export const getStudents = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const createStudent = async (student: any) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student),
  });
  return res.json();
};
