import axios from 'axios';

export const getList = (dispatch)=>{
  dispatch({
    type: "CHANGELIST",
    payload: ["文章1", "文章2", "文章3"]
  })
}