import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
//import { customAxios } from "../../share/customAxios";
import axios from "axios";

// 액션 타입을 정의해줍니다.
const SET_SEA_DATA = "SET_SEA_DATA";

// 액션 생성 함수를 만듭니다.

// 초기 State를 정의합니다.
const initialState = {
  seaData: "바다데이터",
};

// 미들웨어
// const getPatientApi = () => {
//   return function (dispatch, getState, { history }) {
//     customAxios
//       .get("/api/patient/list")
//       .then((res) => {})
//       .catch((err) => {});
//   };
// };

// 리듀서 함수를 정의합니다.
export default handleActions(
  {
    [SET_SEA_DATA]: (state, action) =>
      produce(state, (draft) => {
        console.log("리스트 변경 : ", action.payload);
        draft.seaData = action.payload;
      }),
  },
  initialState
);

const actionCreators = {};

export { actionCreators };
