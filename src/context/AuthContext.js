import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackitApi from '../api/trackit';
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signup':
      return { errorMessage: '', token: action.payload };
    default: 
      return state;
  }
};

const signup = dispatch => async ({ email, password }) => {
  try {
    console.log('god')
    const response = await trackitApi.post('/signup', { email, password });
    console.log('good')
    await AsyncStorage.setItem('token', response.data.token);
    console.log('goood')
    dispatch({ type: 'signup', payload: response.data.token });
    console.log('gooood')
    navigate('TrackList');
  } catch (err) {
    console.log('bad');
    dispatch({ type: 'add_error', payload: 'Something went wrong when signing up' })
  }
};


const signin = (dispatch) => {
  return ({ email, password }) => {

  };
};

const signout = (dispatch) => {
  return () => {

  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: '' }
);