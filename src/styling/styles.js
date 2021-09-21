import {StyleSheet} from 'react-native';

const colors = {
  darkOrange: '#fe5009',
  midOrange: '#fe6121',
  lightOrange: '#fe723a',
  lightPink: '#feede6',
  white: '#ffffff',
  lightGrey: '#cecece',
  grey: '#949494',
  blue: '#3b5998',
};
const signupSecondaryButton = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: 150,
  height: 40,
  borderWidth: 1,
  borderRadius: 5,
  marginTop: 20,
  marginBottom: 20,
  marginRight: 5,
  marginLeft: 5,
};

const styles = StyleSheet.create({
  //signup
  signupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupLogoContainer: {
    width: '80%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  signupLogo: {
    resizeMode: 'contain',
    margin: 10,
  },
  signupLogoText: {
    fontSize: 14,
    fontFamily: 'Montserrat-LightItalic',
    letterSpacing: 2,
    color: colors.lightGrey,
  },
  signupSecondaryContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  facebookSignupButton: {
    ...signupSecondaryButton,
    backgroundColor: colors.blue,
    height: 42,
    width: 152,
  },
  googleSignupButton: {
    ...signupSecondaryButton,
    backgroundColor: 'transparent',
    borderColor: colors.grey,
  },
  signupSecondaryFacebookLogo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  signupSecondaryGoogleLogo: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  SignupSecondayText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    marginLeft: 10,
    color: colors.white,
  },
});

export default styles;
