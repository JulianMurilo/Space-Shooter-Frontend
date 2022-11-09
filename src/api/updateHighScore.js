import axios from "axios";
import { API_URL } from "../constants";

/**
 * Make api request for all the users' scores
 * @returns
 */
export default function editHighScore(id, name, score) {
  const url = API_URL + "/update-score";
  return axios.put(url, {
    _id: id, name:name, score:score
  });
}