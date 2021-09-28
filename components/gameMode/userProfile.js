import {
  ScrollView,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {normalize} from '../../constants/utils';
import React, {useCallback, useEffect, useState} from 'react';
import {GAME_MODE_PROFILE_BG, USER_DEFAULT} from '../../assets/images';
import Color from '../../assets/colors';
import font from '../../assets/font';
import ProfileSummarySection from './ProfileSummarySection';

const {width} = Dimensions.get('window');

const userProfile = () => {
  return (
    <ScrollView>
      <View>
        <ImageBackground
          source={GAME_MODE_PROFILE_BG}
          style={styles.topBackground}>
          <View style={styles.profileContainer}>
            <View style={styles.innerTopBox}>
              <TouchableOpacity>
                <Image
                  source={USER_DEFAULT}
                  resizeMode="cover"
                  style={styles.avatarStyle}
                />
                <Text style={styles.editIcon}>&#xe903;</Text>
              </TouchableOpacity>
              <ProfileSummarySection />
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topBackground: {
    backgroundColor: 'orange',
    paddingBottom: normalize(32),
    width: width,
    paddingTop: normalize(25),
  },
  innerTopBox: {
    width: '92%',
    backgroundColor: 'white',
    borderRadius: normalize(8),
  },
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  profileContainer: {
    marginTop: normalize(75),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarStyle: {
    width: normalize(86),
    height: normalize(86),
    borderRadius: normalize(100),
    alignSelf: 'center',
    marginTop: normalize(-43),
  },
  editIcon: {
    backgroundColor : Color.bgWhite,
    marginRight : normalize(-60),
    marginTop: normalize(-20),
    padding: normalize(4),
    alignSelf: 'center',
    fontFamily: font.icon_new,
    fontSize: normalize(12),
    borderRadius : normalize(25),
    borderColor : Color.grayLightBorder,
    borderWidth : 0.8,
    color: Color.orangeIcon,
},
});

export default userProfile;
