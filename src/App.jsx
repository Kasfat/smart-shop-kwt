import "./App.css";
import Layout from "./components/Layouts/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import About from "./pages/About";
import Faqs from "./pages/Faqs";

function App() {
  return (
    <>
      <Layout>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/faqs" element={<Faqs />} />
          </Routes>
      </Layout>
    </>
  );
}

export default App;
