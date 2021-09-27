import {StyleSheet} from 'react-native';

const COLORS = {
  darkOrange: '#fe5009',
  midOrange: '#fe6121',
  lightOrange: '#fe723a',
  lightPink: '#feede6',
  white: '#ffffff',
  lightGrey: '#cecece',
  darkGrey: '#3d3d3d',
  grey: '#949494',
  blue: '#3b5998',
  black: '#000000',
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
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30,
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
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  inputContainer: {
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
    fontSize: 12,
  },
  signupS3Container: {
    justifyContent: 'center',
  },
  signupS3Text: {
    textAlign: 'center',
    marginBottom: 15,
    fontFamily: 'Montserrat-Medium',
    color: COLORS.white,
    fontSize: 12,
  },
  signupSubmitButton: {
    flex: 1,
    ...signupButton,
    backgroundColor: COLORS.darkOrange,
  },
  submitButtonText: {
    color: COLORS.black,
    fontFamily: 'Montserrat-SemiBold',
  },
  accountReminder: {
    textAlign: 'center',
    color: COLORS.darkOrange,
    fontFamily: 'Montserrat-SemiBold',
  },
  //Header Style
  headerContainer: {
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-between',
    alignContent: 'center',
    borderBottomColor: COLORS.darkGrey,
    borderBottomWidth: 0.5,
    padding: 10,
  },
  headerS1Container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerS2Container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  headerPreferencesIcon: {
    width: 20,
    height: 25,
    resizeMode: 'contain',
    marginRight: 20,
  },
  headerUserIcon: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  headerIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.grey,
  },
  headerMenuIcon: {
    width: 25,
    height: 30,
  },
  headerText: {
    fontFamily: 'Montserrat-Medium',
    color: COLORS.lightGrey,
    marginLeft: 20,
    letterSpacing: 1,
    fontSize: 20,
  },
});

export default styles;
