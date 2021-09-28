import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {normalize} from '../constants/utils';
import LargeGameModeButton from '../constants/LargeGameModeButton';

const {width} = Dimensions.get('window');

const TimerPopup = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <Modal visible={isVisible} transparent animationType="fade">
      <View style={styles.container}>
        <View style={styles.modal}>
          <View style={{marginTop: normalize(40)}}>
            <Text style={styles.headingText}>Time's up</Text>
          </View>
          <View style={{marginTop: normalize(10)}}>
            <Text style={styles.textStyle}>
              But you can still complete this
            </Text>
            <View
              style={{flexDirection: 'row', marginHorizontal: normalize(15)}}>
              <Text style={styles.textStyle}>challenge and earn </Text>
              <Text style={styles.xpTextStyle}>2 XP</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <LargeGameModeButton
              text={"Ok, I'll Continue"}
              backgroundColor={'#ff6b24'}
              color={'#fff'}
              extraStyle={styles.buttonStyle}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000AA',
    
  },
  modal: {
    borderRadius: normalize(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: normalize(4),
    elevation: normalize(3),
    width: width - 32,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: normalize(16),
  },
  headingText: {
    fontSize: normalize(20),
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#001620',
  },
  textStyle: {
    fontSize: normalize(16),
    textAlign: 'center',
    color: '#001620',
  },
  xpTextStyle: {
    color: '#582895',
    fontWeight: 'bold',
    fontSize: normalize(16),
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(8),
    paddingHorizontal: normalize(16),
    marginTop: normalize(16)
  },
  buttonStyle: {
    width: normalize(150),
    height: normalize(60),
    borderWidth: normalize(0.5),
    borderColor: '#fff',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    width: width - 62,
    fontWeight: 'bold',
  },
});
export default TimerPopup;
