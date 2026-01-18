import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Snacks from "./pages/Snacks";
import Students from "./pages/Students";
import StudentDetail from "./pages/StudentDetail";
import Orders from "./pages/Orders";

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Snacks />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<StudentDetail />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Layout>
    </>
  )
}
