import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Snacks from "./pages/Snacks";
import Students from "./pages/Students";

export default function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Snacks />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </Layout>
    </>
  )
}
