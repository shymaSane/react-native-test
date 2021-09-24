import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from '../styling/styles';
import UserOrientations from '../assets/UserOrientations';

const Signup = ({navigation}) => {
  const WIDTH = UserOrientations().width;
  const HEIGHT = UserOrientations().height;

  return (
    <View style={styles.signupContainer}>
      <View style={{width: WIDTH * 0.85}}>
        <ScrollView style={{flexGrow: 1}}>
          {/* logo section */}
          <View style={styles.signupS1Container}>
            <Image
              style={styles.signupLogo}
              source={require('../assets/images/logo-short.png')}
            />
            <Text style={styles.signupLogoText}>Where Stories Live</Text>
          </View>
          {/* sign up with fb & google section */}
          <View style={styles.signupS2Container}>
            <TouchableOpacity style={styles.facebookSignupButton}>
              <Image
                style={styles.signupFacebookLogo}
                source={require('../assets/images/facebook.png')}
              />
              <Text style={styles.SignupS2Text}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.googleSignupButton}>
              <Image
                style={styles.signupGoogleLogo}
                source={require('../assets/images/google.png')}
              />
              <Text style={styles.SignupS2Text}>Google</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.emptyViewContainer}>
            <View style={styles.emptyView}></View>
            <Text style={styles.emptyViewText}>or</Text>
            <View style={styles.emptyView}></View>
          </View>
          {/* signup form section/email, username, password, birthday */}
          <View style={styles.inputsContainer}>
            <View style={styles.inputContainer}>
              <Image
                style={styles.inputImage}
                source={require('../assets/images/email.png')}
              />
              <TextInput style={styles.inputStyle} placeholder="Email" />
            </View>
            <View style={styles.inputContainer}>
              <Image
                style={styles.inputImage}
                source={require('../assets/images/user.png')}
              />
              <TextInput style={styles.inputStyle} placeholder="Username" />
            </View>
            <View style={styles.inputContainer}>
              <Image
                style={styles.inputImage}
                source={require('../assets/images/lock.png')}
              />
              <TextInput style={styles.inputStyle} placeholder="Password" />
              <Image
                style={styles.inputImage}
                source={require('../assets/images/unlock.png')}
              />
            </View>
            <View style={styles.inputContainer1}>
              <Image
                style={styles.inputImage}
                source={require('../assets/images/birthday.png')}
              />
              <TextInput style={styles.inputStyle} placeholder="Birthday" />
            </View>
          </View>
          <View style={styles.signupS3Container}>
            <Text style={styles.signupS3Text}>
              By clicking below, you agree to Wattapads Terms Of Service {`&`}
              Privacy Policy.
            </Text>
            <TouchableOpacity style={styles.signupSubmitButton}>
              <Text style={styles.submitButtonText}>Start Reading</Text>
            </TouchableOpacity>
          </View>
          {/* footer section */}
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.accountReminder}>Have an account? Log in</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default Signup;
