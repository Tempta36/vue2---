/**
 * Created by 12973 on 2018/8/8.
 */
import * as types from './mutation-types.js'

export const confirmAuthor = ({commit},str)=>{
  commit(types.CONFIRM_AUTHOR,str)
};

export const anotherAuthors = ({commit}) =>{
  commit(types.ANOTHER_AUTHORS)
};

export const signUpUser = ({commit},payload) =>{
  commit(types.SIGN_UP_USER,payload);
};

export const getUserInfo = ({commit,state},str) => {
  commit(types.GET_USER_INFO,str);
  console.log(state.Users.user);
};
