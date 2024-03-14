import { axiosInstance } from "../CoreApi";

const handleLogin = async (body) => {
    try {
      const response = await axiosInstance.post("auth/login", {
        email: body.email,
        password: body.password,
      });
  
      return response.data;
    } catch (error) {
      throw error;
    }
};

export { handleLogin };