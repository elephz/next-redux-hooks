import React, { ReactElement } from "react";
import Layout from "../components/layout";
import { useDispatch,useSelector } from "react-redux";  //Selector ใช้ในการเข้าถึงตัวแปร state gobal ของ reducer
import action from "../redux/actions";


interface Props {}

export default function Login({}: Props): ReactElement {
  const dispatch = useDispatch();
  const authenReducer = useSelector(({authenReducer}) => authenReducer)
  return (
    <Layout>
      <h1>Login</h1>
      <button
        onClick={() => {
          dispatch(action.login({ username: "admin", password: "1234" }));
        }}
      >
        Login
      </button>
      <span>{authenReducer.token ? authenReducer.token : "" }</span> 
      <span>{authenReducer.token ? authenReducer.user.username : "" }</span>
    </Layout>
  );
}
