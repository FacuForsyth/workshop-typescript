import {combineReducers} from 'redux';
import { User } from '../actions/actions';
import { usersReducer } from './users';

/* interface stateI {
  counter: number;
};

const initialState = {
  counter: 1,
 };

interface actionI {
  type: string;
}; */

/* export default function reducers(state: stateI = initialState, action: actionI) {
  return state;
}; */

export interface StoreState {
  users: User[];
}

export const reducers = combineReducers<StoreState>({
  //counter: () => 1,
  users: usersReducer,
});