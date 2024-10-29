import {z} from 'zod';

export interface UserProps {
    name: string;
    email: string;
    image: string;
}