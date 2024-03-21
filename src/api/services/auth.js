import { axiosInstance } from "../CoreApi";

const handleLogin = async (body) => {
    try {
      const response = await axiosInstance.post("user/login", {
        email: body.email,
        password: body.password,
      });
  
      return response.data;
    } catch (error) {
      throw error;
    }         
};

const handleRegister = async (body) => {
  try {
    const response = await axiosInstance.post("register", {
      email: body.email,
      password: body.password,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

const handleBiodata = async (body) => {
  try {
    const response = await axiosInstance.post("user/bio/fa39c281-e474-11ee-b8a9-581122e5fe7b", {
      name: body.name,
      uni_id: body.uni_id,
      district_id: body.district_id,
      minat_id: body.minat_id,
      skill_id: body.skill_id
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};


export { handleLogin, handleRegister, handleBiodata };