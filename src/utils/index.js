import axios from "axios";
import { toast } from "react-toastify";

const notifyFetchSuccess = () => toast.success("Events data fetched successfully!");

const notifyFetchFailure = (err) => toast.error("Error while fetching events data: " + err || "Unknown error");

export function fetchLateDays(netid) {
  return axios.get(`/late-days/${netid}`)
    .then(({ data }) => {
      console.log(data);
      return data;
    })
    .catch(error => {
      throw error;
    });
}

export { notifyFetchSuccess, notifyFetchFailure };
