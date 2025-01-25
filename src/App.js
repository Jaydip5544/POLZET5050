import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Blogs from "./pages/Blogs";
import SignUpPersonalDetails from "./pages/SignUpPersonalDetails";
import Forgot from "./pages/Forgot";
import './App.css';
import SignUp from "./pages/signup";


import login from "./pages/login";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="SignUp" element={<SignUp />} />
        
        <Route path="login" element={<login />} />

          <Route path="Blogs" element={<Blogs />} />
          <Route path="SignUpPersonalDetails" element={<SignUpPersonalDetails />} />
          <Route path="*" element={<Forgot />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);