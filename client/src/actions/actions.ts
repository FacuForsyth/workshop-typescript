import axios, { AxiosRequestConfig } from "axios";
import { Dispatch } from "redux";   //estructura de tipo
import { ActionTypes } from "./types";


export interface User {
  id: number;
  name: string;
  lastName: string;
};

export interface FetchUserAction {
  type: ActionTypes.fetchUsers;
  payload: User[];
}

export interface AxiosResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: AxiosRequestConfig;
  request?: any;
 }

const url = 'https://localhost:3001/user';

export const fetchUsers = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Array<User>>(url);
    dispatch<FetchUserAction>({
      type: ActionTypes.fetchUsers,
      payload: response.data,
    });
  };
};