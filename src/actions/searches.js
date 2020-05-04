import database from "../firebase/firebase";

// ADD_SEARCH
export const addSearch = (search) => ({
  type: "ADD_SEARCH",
  search,
});

// ADD_SEARCH Thunk
export const startAddSearch = (searchData = {}) => {
  return (dispatch) => {
    const { query } = searchData;
    const search = { query };
    database
      .ref("/searches")
      .push(search)
      .then((ref) => {
        dispatch(
          addSearch({
            id: ref.key,
            ...search,
          })
        );
      });
  };
};

// GET_SEARCHES
export const getSearches = (searches) => ({
  type: "GET_SEARCHES",
  searches,
});

export const startGetSearches = () => {
  return (dispatch) => {
    return database
      .ref("/searches")
      .once("value")
      .then((snapshot) => {
        const searches = [];
        snapshot.forEach((childSnapshot) => {
          searches.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(getSearches(searches));
      });
  };
};
