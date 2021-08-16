import React from 'react';
import { Text, Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';

import theme from '../theme';

const styles=StyleSheet.create({
  signInForm:{
    backgroundColor:'white',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  },
  textInput:{
    marginTop:10,
    marginLeft:10,
    fontSize:15,
    borderWidth: 1,
    borderRadius:4
  },
  signInText:{
    margin:10,
    fontSize:15,
    color:'white',
  },
  signInButton:{
    backgroundColor:theme.colors.languageTagBackground,
    flexDirection:'row',
    margin:10,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must be greater or equal to 3')
    .required('username is required'),
  password: yup
    .string()
    .min(3, 'Password must be greater or equal to 3')
    .required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.signInForm}>
      <FormikTextInput style={styles.textInput} name="username" placeholder="Username" />
      <FormikTextInput style={styles.textInput} name="password" placeholder="Password" secureTextEntry />      
      <Pressable onPress={onSubmit}>
        <View style={styles.signInButton}>
          <Text style={styles.signInText}>Sign in</Text>
        </View>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
