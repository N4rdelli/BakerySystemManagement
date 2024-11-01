import { useState } from "react";
import Header from "../../Components/Header/Header";
import api from "../../Services/api";
import { useNavigate } from "react-router-dom";

const CreateCustomer = () => {
  const [customer, setCustomer] = useState({
    // Definição do Estado customer
    CustomerName: "",
    CustomerCpfCnpj: "",
    CustomerEmail: "",
    CustomerPhone: "",
    CustomerStatus: true,
  });
  const navigate = useNavigate(); // Inicializa o hook useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({
      ...customer,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/Customers", customer);
    navigate("/customers"); // Redireciona para a lista de clientes após salvar
  };

  // Função para voltar para a página anterior
  const handleGoBack = () => {
    navigate(-1); // Volta para a página anterior
  };

  return (
    <div>
      <Header />
      <h1>Create Customer</h1>
      <button 
        onClick={handleGoBack} 
        style={{ padding: "10px 20px", marginBottom: "20px", cursor: "pointer" }}
      >
        Voltar
      </button>
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <h1>Customer</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>Nome:</label>
            <input
              type="text"
              name="CustomerName"
              value={customer.CustomerName}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px" }}
              required
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>CPF:</label>
            <input
              type="text"
              name="CustomerCpfCnpj"
              value={customer.CustomerCpfCnpj}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px" }}
              required
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Email:</label>
            <input
              type="email"
              name="CustomerEmail"
              value={customer.CustomerEmail}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px" }}
              required
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Telefone:</label>
            <input
              type="tel"
              name="CustomerPhone"
              value={customer.CustomerPhone}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px" }}
              required
            />
          </div>

          <button type="submit" style={{ padding: "10px 20px" }}>
            Salvar Cliente
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCustomer;
