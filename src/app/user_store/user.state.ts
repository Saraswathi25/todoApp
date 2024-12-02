
export interface User{
    id:string;
    name:string;
    email:string;
    image:string
}

export interface UserState{
    user:User |null;
    error: string | null;
    loading: boolean;
}

export const initialState :UserState={
    user :null,
      error: null,
  loading: false,
}