import Cookies from "js-cookie";

export const SERVER_NAME = process.env.REACT_APP_BASE_URL_DEV;
const BASE_URL = SERVER_NAME + "/api";
const BASE_URL_USER_PONDOK = SERVER_NAME + "/api/user-pondok";
const BASE_URL_USER_CLIENT = SERVER_NAME + "/api/user-client";

let JWT = null;
if (Cookies.getJSON("USER") !== undefined) JWT = Cookies.getJSON("USER").token;

//INITIALIZE
export const JWT_HEADER = JWT;

//LOGIN & REGISTER API
export const LOGIN_API = `${BASE_URL_USER_PONDOK}/auth/login`;
export const REGISTER_API = `${BASE_URL_USER_PONDOK}/auth/register`;

export const GET_SELF = () => `${BASE_URL_USER_PONDOK}/user/current`;
export const CHANGE_PASSWORD = (userId) =>
  `${BASE_URL_USER_PONDOK}/user/change-password/${userId}`;
export const CHANGE_IMAGE = (userId) =>
  `${BASE_URL_USER_PONDOK}/user/change-image/${userId}`;
export const READ_IMAGE = (filename) =>
  `${BASE_URL_USER_PONDOK}/user/read-image/${filename}`;
export const EDIT_PROFILE = (userId) => `${BASE_URL_USER_PONDOK}/user/${userId}`;

//PATIENT API
export const GET_ALL_HEALTH_AGENCIES = (page_number) =>
    `${BASE_URL}/health-agency?page=${page_number}`;
export const GET_ALL_POLYMASTERS = (page_number) =>
    `${BASE_URL}/poly-master?page=${page_number}`;

export const GET_POLYMASTER_OF_POLYCLINIC = (id_polyclinic) =>
    `${BASE_URL}/poly-master/of-poly/${id_polyclinic}`;
export const GET_HA_OF_POLYCLINIC = (id_polymaster) =>
    `${BASE_URL}/health-agency/of-poly/${id_polymaster}`;
export const GET_POLYCLINIC_OF_HA = (id_health_agency) =>
    `${BASE_URL}/schedule/of-ha/${id_health_agency}`;
export const GET_ONE_HEALTH_AGENCY = (id_health_agency) =>
    `${BASE_URL}/health-agency/${id_health_agency}`;
export const GET_WAITING_LIST = () => `${BASE_URL}/waiting-list`;
export const GET_NEAREST_WAITING_LIST = () =>
    `${BASE_URL}/waiting-list/nearest`;
export const GET_TODAY_WAITING_LIST = () => `${BASE_URL}/waiting-list/today`;
export const GET_PAST_WAITING_LIST = () => `${BASE_URL}/waiting-list/past`;
export const GET_FUTURE_WAITING_LIST = () => `${BASE_URL}/waiting-list/future`;
export const GET_WAITING_LIST_BY_SCHEDULE = (schedule, date) =>
    `${BASE_URL}/waiting-list/current-regist/${schedule}/${date}`;
export const BOOK_WAITING_LIST = () => `${BASE_URL}/waiting-list`;
export const GET_RESIDENCE_NUMBER = () =>
    `${BASE_URL}/user/booked-residence-number`;
export const SEARCH_HEALTH_AGENCY_NAME = (page_number) =>
    `${BASE_URL}/health-agency/search-name?page=${page_number}`;
export const SEARCH_HEALTH_AGENCY_CONTAINS_POLY = (page_number) =>
    `${BASE_URL}/health-agency/search-poly-contains?page=${page_number}`;

// SUPER ADMIN API
export const GET_ADMIN_SANTRI = () =>
  `${BASE_URL_USER_PONDOK}/user/admin_santri`;
export const GET_ADMIN_MERCHANT = () =>
  `${BASE_URL_USER_PONDOK}/user/admin_merchant`;
export const GET_BENDAHARA = () =>
  `${BASE_URL_USER_PONDOK}/user/bendahara`;
export const GET_ADMIN_SANTRI_DETAIL = (id) =>
  `${BASE_URL_USER_PONDOK}/user/show/${id}`;
export const POST_NEW_ADMIN = () => `${BASE_URL_USER_PONDOK}/user`;
export const DELETE_NEW_ADMIN = (id) => `${BASE_URL_USER_PONDOK}/user/${id}`;

//ADMIN API