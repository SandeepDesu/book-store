import * as axios from 'axios';
import { USERS } from '../common/constants/api.constants';

export function Register(user) {
    return axios.post(USERS, user);
}

