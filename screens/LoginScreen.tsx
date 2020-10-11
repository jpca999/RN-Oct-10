import React from 'react';
import Form from '../forms/Form';

// const LoginScreen = ({ navigation }) => {
    const LoginScreen = () => {    
  return (
    <Form
      fields={{
        email: {
          label: 'Email',
          inputProps: {
            keyboardType: 'email-address',
          },
        },
        password: {
          label: 'Password',
          inputProps: {
            secureTextEntry: true,
          },
        },
      }}
    />
  );
};

export default LoginScreen;