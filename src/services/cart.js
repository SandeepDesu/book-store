import * as axios from 'axios';
import { CART } from '../common/constants/api.constants';

export function CreateCart(cart) {
    return axios.post(CART, cart, { headers: { 'x-access-token': localStorage.getItem('token') } });
}

export function GetCart(user_id) {
    return axios.get(`${CART}/${user_id}`, { headers: { 'x-access-token': localStorage.getItem('token') } });
}

export function UpdateCart(cart) {
    return axios.put(`${CART}/${cart._id}`, cart, { headers: { 'x-access-token': localStorage.getItem('token') } });
}