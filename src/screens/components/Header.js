import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from '../../styling/styles';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      {/* Drop menu */}
      <View style={styles.headerS1Container}>
        <TouchableOpacity>
          <Image
            style={styles.headerMenuIcon}
            source={require('../../assets/images/menu.png')}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Home</Text>
      </View>
      {/* filter and profile */}
      <View style={styles.headerS2Container}>
        <TouchableOpacity>
          <Image
            style={styles.headerPreferencesIcon}
            source={require('../../assets/images/preferences.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerIconContainer}>
          <Image
            style={styles.headerUserIcon}
            source={require('../../assets/images/camel.jpg')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
