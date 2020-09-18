import axios from "axios";

export const truncStr = (string, limit) => {
  return string.length > limit
    ? string
        .trim()
        .substring(0, limit - 3)
        .trim() + "..."
    : string;
};

const resources = {};
const makeRequestCreator = () => {
  let cancel;

  return async (query) => {
    if (cancel) {
      //cancelling previous  request before another request
      cancel.cancel();
    }
    //create a new canceToken
    cancel = axios.CancelToken.source();
    try {
      if (resources[query]) {
        //Return request if exists
        return resources[query];
      }
      const res = await axios(query, { cancelToken: cancel.token });
      const result = res.data.results;
      //store response
      resources[query] = result;
      return result;
    } catch (error) {
      if (axios.isCancel(error)) {
        //Handle if request is cancelled
        console.log("Request is cancelled. ", error.message);
      } else {
        console.log("Something went wrong. ", error.message);
      }
    }
  };
};
export const search = makeRequestCreator();
