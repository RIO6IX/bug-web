const API_URL = "https://yourapi.com/payments"; // Replace with actual API URL

const paymentService = {
  initiatePayment: async (token, paymentDetails) => {
    try {
      const response = await fetch(`${API_URL}/pay`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(paymentDetails),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Payment failed");

      return data;
    } catch (error) {
      throw error;
    }
  },

  getTransactionHistory: async (token) => {
    try {
      const response = await fetch(`${API_URL}/transactions`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to fetch transactions");

      return data;
    } catch (error) {
      throw error;
    }
  },

  withdrawFunds: async (token, amount) => {
    try {
      const response = await fetch(`${API_URL}/withdraw`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ amount }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Withdrawal failed");

      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default paymentService;
