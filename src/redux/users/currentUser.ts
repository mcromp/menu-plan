import { User, UserJSON } from "./users";

export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const CLEAR_CURRENT_USER = "CLEAR_CURRENT_USER";

export const setCurrentUser = (user: UserJSON) => ({
 type: SET_CURRENT_USER,
 payload: user,
});
export const clearCurrentUser = () => ({
 type: CLEAR_CURRENT_USER,
});

export interface SetCurrentUser {
 type: typeof SET_CURRENT_USER;
 payload: UserJSON;
}

export interface ClearCurrentUser {
 type: typeof CLEAR_CURRENT_USER;
}

type currentUserActions = SetCurrentUser | ClearCurrentUser;

const currentUserReducer = (
 currentUser: User | null = null,
 action: currentUserActions
) => {
 switch (action.type) {
  case SET_CURRENT_USER:
   const { _id, favList, username } = action.payload;
   const user = {
    id: _id,
    favList,
    username,
   };
   return user;
  case CLEAR_CURRENT_USER:
   return "";
  default:
   return currentUser;
 }
};

export default currentUserReducer;