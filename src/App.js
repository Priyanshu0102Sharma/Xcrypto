import { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../src/app.css";
import CoinDetails from "./components/CoinDetails";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import LoginForm from "./components/Login";
import RegisterForm from "./components/Register";
function App() {
  return (
<>
<Router>
  <Header />
  <Suspense fallback = {<div>Loading...</div>}>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/coins" element={<Coins />} />
    <Route path="/exchanges" element={<Exchanges />} />
    <Route path="/coin/:id" element={<CoinDetails />} />
    <Route path="/login" element={<LoginForm/>} />
    <Route path = "/register" element={<RegisterForm/>} />
  </Routes>
</Suspense>
<ToastContainer />
  <Footer />
</Router>

</>
  );
}

export default App;
