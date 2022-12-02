import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer"
import Adm from "./pages/Adm"
import Administrador from "./pages/Administrador";
import Cadastro from "./pages/cadastro/Cadastro";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="adm" element={<Adm />} />
          <Route path="administrador" element={<Administrador />} />
          <Route path="cadastro" element={<Cadastro />} />

        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
