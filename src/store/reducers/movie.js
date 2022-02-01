import * as actionTypes from "../actions";

const initialState = {
  list: [],
  loading: false,
  page: 0,
  pageSize: 10,
  query: "",
  keyword: { list: [], page: 0, pageSize: 10, query: "", loading: false },
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
export default sessionReducer;
