import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../styling/styles';

const Signup = ({navigation}) => {
  return (
    <View style={styles.signupContainer}>
      {/* logo section */}
      <View style={styles.signupLogoContainer}>
        <Image
          style={styles.signupLogo}
          source={require('../assets/images/logo-short.png')}
        />
        <Text style={styles.signupLogoText}>Where Stories Live</Text>
      </View>
      {/* sign up with fb & google section */}
      <View style={styles.signupSecondaryContainer}>
        <TouchableOpacity style={styles.facebookSignupButton}>
          <Image
            style={styles.signupSecondaryFacebookLogo}
            source={require('../assets/images/facebook.png')}
          />
          <Text style={styles.SignupSecondayText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleSignupButton}>
          <Image
            style={styles.signupSecondaryGoogleLogo}
            source={require('../assets/images/google.png')}
          />
          <Text style={styles.SignupSecondayText}>Google</Text>
        </TouchableOpacity>
      </View>
      {/* signup form section */}
      {/* footer section */}
    </View>
  );
};

export default Signup;
