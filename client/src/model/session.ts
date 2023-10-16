import { reactive } from "vue";
import { type User, getUserByEmail } from "./users";

//this variable is only available here, or by calling getSession
const session = reactive({
  user: null as User | null,
})


export function getSession(){
  return session;
}

export function login(email: string, password: string): User | null {
  const user = getUserByEmail(email);
  if(user && user.password === password){
    session.user = user;
    return user;
  }
  return null;
}

export function logout(){
  session.user = null;
}