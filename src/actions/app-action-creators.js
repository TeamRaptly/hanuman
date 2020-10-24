import axios from 'axios';

export const changeLanguage = (payload) => async (dispatch) => {
  try {
    const response = await axios.post('/set-language', {
      language: payload
    });
    if (response.status === 200) {
      dispatch({
        type: 'UPDATE_APP_STATE',
        payload
      });
      window.location.reload();
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Error changing language>>>>', err);
  }
};
