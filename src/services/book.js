import * as axios from 'axios';
import { BOOK } from '../common/constants/api.constants';

export function CreateBook(book) {
    return axios.post(BOOK, book, { headers: { 'x-access-token': localStorage.getItem('token') } });
}

export function GetBooks() {
    return axios.get(BOOK, { headers: { 'x-access-token': localStorage.getItem('token') } });
}