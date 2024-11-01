import { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import { useNavigate } from "react-router-dom";
import api from "../Services/api";

const CustomersIndex = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchCustomers = async () => {
    const response = await api.get("/Customers");
    setCustomers(response.data);

    setLoading(false);
  };

  const handleCreateNew = () => {
    navigate("/customers/createcustomer");
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div>
      <Header />
      <div className="px-5">
        <div className="d-flex flex-row justify-content-between">
          <h1>Customers</h1>
          <button onClick={handleCreateNew} style={{padding: "10px 20px", margin: "20px 0",cursor: "pointer",}}>
            Adicionar Novo Cliente
          </button>
        </div>
        <hr />

        {loading ? (
          <p>Carregando...</p> // Exibe uma mensagem de carregamento
        ) : (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "20px",
            }}
          >
            <thead>
              <tr>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Nome
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  CPF/CNPJ
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Email
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Telefone
                </th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.customerId}>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {customer.customerName}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {customer.customerCpfCnpj}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {customer.customerEmail}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {customer.customerPhone}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {customer.customerStatus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CustomersIndex;
