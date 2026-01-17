import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SnackCard from "./components/SnackCard";
import StudentCard from "./components/StudentCard";

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<SnackCard />} />
          <Route path="/students" element={<StudentCard />} />
        </Routes>
      </Layout>
    </>
  )
}
