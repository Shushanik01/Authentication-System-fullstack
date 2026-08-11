import api from "../api/api";

import type { RegisterFormValues } from "../register";

export async function registerUser(data:RegisterFormValues){
    const newClient = await api.post('', data);
    return newClient
}