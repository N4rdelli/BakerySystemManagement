import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Sales from "./Pages/Sales";
import CustomersIndex from "./Pages/CustomersIndex";
import Products from "./Pages/Products";
import CreateCustomer from "./Pages/Customers/CreateCustomer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sales" element={<Sales/>} />
          <Route path="/customers" element={<CustomersIndex/>} />
          <Route path="/customers/createcustomer" element={<CreateCustomer/>} />


          <Route path="/products" element={<Products/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
