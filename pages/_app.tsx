import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  let [token, setToken] = useState(false);
  useEffect(() => {
      let token = localStorage.getItem('token');
      if (token == null || token == "") {
        if (!window.location.href.includes("loginPage")) {
          if (window.location.href.includes("signUpPage")) {
            token = true
          }else{
            window.location.href = "http://localhost:3000/loginPage"
            token = true
          }
        }else{
          token = true
        }
      }else{
        if (window.location.href.includes("loginPage")) {
          window.location.href = "http://localhost:3000/productListPage"
          token = true
        }else{
          token = true
        }
        token = true
      }
      setToken(token);
  }, [token]);
  if (token) {
    return (
      <Component {...pageProps} />
    )
  }
}

export default MyApp
