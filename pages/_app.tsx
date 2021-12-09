import '../styles/globals.css'
import {AppProps} from "next/app";
import {wrapper} from "../redux";

interface Props  {
  
}

function MyApp({ Component, pageProps }:AppProps) {
  console.log("hey")
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp); 
 