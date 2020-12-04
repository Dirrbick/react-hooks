import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

export const LoginContext = React.createContext();

function LoginProvider(props) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const login = async (input) => {
    const API = process.env.REACT_APP_API;

    try {
      const response = await axios({
        method: 'post',
        url: `${API}/signin`,
        auth: {
          username: input,username,
          password: input.password,
        }
      })

      const {token} = response.data;

      validateToken(token);
      
    }
    catch {
      console.warn('login failed');
    }
  };

  const validateToken = (token) => {
    try {
      let validToken = jwt.verify(token, process.env.REACT_APP_SECRET);

      setIsLoggedIn(true);
      setUser(validToken);
      const expires = new Date()
        expires.setDate(Date.now() + 7200000 )
      cookie.save('auth', token, expires);
    }
    catch(e) {
      setIsLoggedIn(false);
      setUser({});
      console.warn('token invalid')
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser({});
  };

  useEffect( () => {
    const token = cookie.load('auth') || null;
    validateToken(token);
  }, []);

  return (
    <LoginContext.Provider value={ {isLoggedIn, user, login, logout} }>
      {props.children}
    </LoginContext.Provider>
  )

};

export default LoginProvider;