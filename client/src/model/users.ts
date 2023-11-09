import { api } from "./session";

export interface User {
  id?: number,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  role: "admin" | "user",
  token?: string
}

export function getUsers(): Promise< User[]> {
  return api("users"); 
}

export async function getUserByEmail(email: string): Promise<User | undefined> {
  const users = await getUsers();
  return users.find( x => x.email === email );
}

/*export function getUsers(): User[] {
    return data.users.map( x => ({ ...x, role: x.id <= 5 ? 'admin' : 'user' }) )
}

export function getUserByEmail(email: string): User | undefined {
    return getUsers().find(x => x.email === email )
}*/