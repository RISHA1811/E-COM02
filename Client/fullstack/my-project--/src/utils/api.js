export const postData = async (url, formData) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(localStorage.getItem("token") && {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        })
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    return data;
    
  } catch (error) {
    console.log("API Error:", error);
    throw error;
  }
};