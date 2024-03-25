import axios from 'axios';

export const sendContactEmail = async (userData) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/email/contactMe',
      userData,
      {
        withCredentials: false,
      }
    );

    if (response.statusText === 'OK') {
      console.log('done here: success');
    }
    return response.data;
  } catch (error) {
    console.log('not done here: error');
  }
};
