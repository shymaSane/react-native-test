import {StyleSheet} from 'react-native';

const COLORS = {
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
  flex:1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  height: 40,
  borderWidth: 1,
  borderRadius: 5,
  marginTop: 20,
  marginBottom: 20,
};

const styles = StyleSheet.create({
  //signup
  signupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  signupS1Container: {
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
    color: COLORS.lightGrey,
  },
  signupS2Container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebookSignupButton: {
    ...signupSecondaryButton,
    backgroundColor: COLORS.blue,
    height: 42,
    marginRight: 5
  },
  googleSignupButton: {
    ...signupSecondaryButton,
    backgroundColor: 'transparent',
    borderColor: COLORS.grey,
    marginLeft: 5
  },
  signupFacebookLogo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  signupGoogleLogo: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  SignupS2Text: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    marginLeft: 10,
    color: COLORS.white,
  },
  emptyViewContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyView: {
    flex:1,
    backgroundColor: COLORS.grey,
    height: 1,
  },
  emptyViewText: {
    color: COLORS.grey,
    paddingLeft: 5,
    paddingRight: 5,
  },
});

export default styles;
