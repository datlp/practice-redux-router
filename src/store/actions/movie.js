export const SESSION_LOGIN = "SESSION_LOGIN";
export const SESSION_LOGOUT = "SESSION_LOGOUT";
export const KEYWORDS_FILTER = "KEYWORDS_FILTER";
export const UPDATE_RESPONSIVE = "UPDATE_RESPONSIVE";
export const SEARCH = "SEARCH";

export const logout = () => (dispatch) =>
  dispatch({
    type: SESSION_LOGOUT,
  });
export const updateReponsive = (size) => (dispatch) =>
  dispatch({
    type: UPDATE_RESPONSIVE,
    payload: size,
  });

export const keywordsFilter =
  (keywordIds = []) =>
  (dispatch) =>
    dispatch({
      type: KEYWORDS_FILTER,
      payload: keywordIds,
    });

export const search = (query) => (dispatch) =>
  dispatch({
    type: SEARCH,
    payload: query,
  });
