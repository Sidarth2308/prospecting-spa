/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {FETCH_API_URL} from '../../Data';
import Axios from 'axios';
import {QuestionsData, DispatchType, DataAction} from '../type';

const success = 200;

export function FetchDataSuccess(questionData: QuestionsData) {
  const action: DataAction = {
    type: 'FETCH_DATA_SUCCESS',
    questionData: questionData,
  };
  return action;
}

export function FetchData() {
  return (dispatch: DispatchType) => {
    Axios.get<QuestionsData>(FETCH_API_URL)
      .then((response) => {
        if (response.status === success) {
          dispatch(FetchDataSuccess(response.data));
        } else {
          console.log('Error fetching data');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
