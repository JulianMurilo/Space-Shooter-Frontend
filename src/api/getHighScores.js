import axios from 'axios';
import { API_URL } from '../constants';

/**
 * Make api request for all the users' scores
 * @returns 
 */
export default function getHighScores(){
    const url =  API_URL + '/leaderboard';
    return axios.get(url);
}