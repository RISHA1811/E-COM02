import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const postData = async (url, formData) => {
  try {
    const response = await fetch(apiUrl + url, {
      method : 'POST',
      headers : {
        'Authorization' : `Bearer ${localStorage.getItem("accesstoken")}`,
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(formData)
    });


if(response.ok) {
  const data = await response.json();
  return data;
} else {
  const errorData = await response.json();
  return errorData;
}

  } catch (error) {
    console.error("Error",error);
  }
}

// get request now 
export const fetchDataFromApi = async (url) => {
  try {
    const {data} = await axios.get(apiUrl + url, {
        'Authorization' : `Bearer ${localStorage.getItem("accesstoken")}`,
        'Content-Type' : 'application/json',
      })
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}



// put request now 

export const editData = async (url, updatedData) => {
  const params={
    headers:{
      'Authorization' : `Bearer ${localStorage.getItem("accesstoken")}`,
        'Content-Type' : 'multipart/form-data',
    },
  }
const {res} = await axios.put(apiUrl + url, updatedData, params)
return res;


}