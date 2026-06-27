import api from "./api";

export const getAllBrands = async () => {
  try {
    const response = await api.get(`/brand/get-all`);
    return response.data;
  } catch (error) {
    console.error("Error fetching brands:", error);
    throw error;
  }
};

export const getAllCategories = async () => {
  try {
    const response = await api.get(`/feature/get-all-features`);
    return response.data;
  } catch (error) {
    console.error("Error fetching brands:", error);
    throw error;
  }
};