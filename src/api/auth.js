import axios, { Axios } from "axios";

const API = "http://localhost8080/almacenadora/v1/auth";

export const registerRequest = (user) => axios.post(`${API}/register`, user);