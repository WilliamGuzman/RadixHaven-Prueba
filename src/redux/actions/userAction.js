import axios from "axios";
import md5 from 'md5'; 
import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  SET_IMAGE_USER,
  GET_DATA_USER,
} from "../types";

//GET ALL USERS
export function getUsersAction() {
  return async (dispatch) => {
    dispatch(getUsers());

    try {
      const response = await axios.post(
        "https://radix-haven-backend-demo.herokuapp.com/api/v1/user/all-user"
      );
      //console.log(response.data.result);
      dispatch(getUsersSuccess(response.data.result));
    } catch (error) {
      console.log(error);
      dispatch(getUsersError());
    }
  };
}

//GET USERS
const getUsers = () => ({
  type: GET_USER,
});

//GET USERS SUCCESS
const getUsersSuccess = (users) => ({
  type: GET_USER_SUCCESS,
  payload: users,
});

//GET USERS ERROR
const getUsersError = () => ({
  type: GET_USER_ERROR,
});

//GET DATA SINGLE USER

export function getDataSilgleUserAction(user) {
  return async (dispatch) => {
    try {
      const data = {
        first_name: "",
        last_name: "",
        nickname: "",
        phone: "",
        email: "",
        city: "",
        country: "",
        job: "",
        state: "",
        photo:""
      };

      //Hasheamos el email para consultar el gravatar
      const emailHash = md5(user.email);



      //Preparamos los endpoints para las consultas
      const urlCity = `https://radix-haven-backend-demo.herokuapp.com/api/v1/catalogs/city/${user.city}`;
      const urlCountry = `https://radix-haven-backend-demo.herokuapp.com/api/v1/catalogs/country/${user.country}`;
      const urlJob = `https://radix-haven-backend-demo.herokuapp.com/api/v1/catalogs/jobtitle/${user.id_job}`;
      const urlState = `https://radix-haven-backend-demo.herokuapp.com/api/v1/catalogs/state/${user.state}`;

      //Resolvemos las peticiones a la vez para reducir el tiempo de espera entre consulta y consulta
      const [city, country, job, state] = await Promise.all([
        axios(urlCity),
        axios(urlCountry),
        axios(urlJob),
        axios(urlState),
      ]);

      //Añadimos la información al objeto data para enviarla al state
      data.first_name = user.first_name;
      data.last_name = user.last_name;
      data.phone = user.phone;
      data.email = user.email;
      data.city = city.data.result.name;
      data.country = country.data.result.name;
      data.job = job.data.result.name;
      data.state = state.data.result.name;
      data.photo = emailHash;

      dispatch(getDataSingleUser(data));

    } catch (error) {
      console.log(error);
    }
  };
}

const getDataSingleUser = data => ({
  type: GET_DATA_USER,
  payload: data
});

//GET AVATAR USER
//amiya06q_c623a@juzab.com
//Email hasheado: 205e460b479e2e5b48aec07710c08d50
export function getUserFavico() {
  return (dispatch) => {
    dispatch(setImageUser("205e460b479e2e5b48aec07710c08d50"));
  };
}

const setImageUser = (emailHash) => ({
  type: SET_IMAGE_USER,
  payload: emailHash,
});
