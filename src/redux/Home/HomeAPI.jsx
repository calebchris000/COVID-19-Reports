import axios from 'axios';
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataError,
} from './HomeSlice';

const api = 'https://coronavirus.m.pipedream.net/';
const getData = () => async (dispatch) => {
  dispatch(fetchDataRequest());
  axios.get(api)
    .then((response) => {
      dispatch(fetchDataSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchDataError(error));
    });
};

export default getData;
