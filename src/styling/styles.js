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
const signupButton = {
  flex: 1,
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
    alignItems: 'center',
    justifyContent:'center'
    
  },
  signupS1Container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  signupLogo: {
    resizeMode: 'contain',
    marginBottom: 30,
    width: 200,
    height: 40,
  },
  signupLogoText: {
    fontSize: 12,
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
    ...signupButton,
    backgroundColor: COLORS.blue,
    height: 42,
    marginRight: 5,
  },
  googleSignupButton: {
    ...signupButton,
    backgroundColor: 'transparent',
    borderColor: COLORS.grey,
    marginLeft: 5,
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
    alignItems: 'center',
  },
  emptyView: {
    flex: 1,
    backgroundColor: COLORS.grey,
    height: 1,
  },
  emptyViewText: {
    color: COLORS.grey,
    paddingLeft: 5,
    paddingRight: 5,
  },
  inputsContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomColor: COLORS.grey,
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  inputContainer1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',

    marginLeft: 10,
    marginRight: 10,
  },
  inputImage: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  inputStyle: {
    flex: 1,
    fontFamily: 'Montserrat-Medium',
    color: COLORS.white,
  },
  signupS3Container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupS3Text: {
    textAlign: 'center',
    marginBottom: 15,
    fontFamily: 'Montserrat-Medium',
    color: COLORS.white,
    fontSize: 12,
  },
  signupSubmitButton: {},
});

export default styles;
