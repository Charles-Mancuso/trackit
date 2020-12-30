import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm 
        headerText="Sign Up for Trackit"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Spacer>
          <Text style={styles.link}>Already have an account? Sign in instead</Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  )
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  },
  link: {
    color: 'blue'
  }
});

export default SignupScreen;