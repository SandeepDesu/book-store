import * as axios from 'axios';
import { AUTH } from '../common/constants/api.constants';

export function Auth(user) {
    return axios.post(AUTH, user);
}