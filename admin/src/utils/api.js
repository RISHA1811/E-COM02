import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

// POST request using fetch
export const postData = async (url, formData) => {
  try {
    const response = await fetch(apiUrl + url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    // return parsed response
    return await response.json();
  } catch (error) {
    console.error("Error in postData:", error);
    throw error;
  }
};

// GET request using axios
export const fetchDataFromApi = async (url) => {
  try {

const params={
   headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },

}



    const { data } = await axios.get(apiUrl + url,params );
    return data;
  } catch (error) {
    console.error("Error in fetchDataFromApi:", error);
    throw error;
  }
};
