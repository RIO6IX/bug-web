const API_URL = "https://yourapi.com/bug-bounty"; // Replace with actual API URL

const bugBountyService = {
  getPrograms: async () => {
    try {
      const response = await fetch(`${API_URL}/programs`);
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to fetch programs");
      return data;
    } catch (error) {
      throw error;
    }
  },

  submitReport: async (token, reportData) => {
    try {
      const response = await fetch(`${API_URL}/reports`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(reportData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Report submission failed");

      return data;
    } catch (error) {
      throw error;
    }
  },

  getUserReports: async (token) => {
    try {
      const response = await fetch(`${API_URL}/my-reports`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to fetch user reports");

      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default bugBountyService;
