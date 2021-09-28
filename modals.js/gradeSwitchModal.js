import {
  Modal,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {normalize} from '../constants/utils';
import React, {useState} from 'react';
import LargeGameModeButton from '../constants/LargeGameModeButton';
import {images, icons} from '../constants';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const GradeSwitchModal = props => {
  const [isVisible, setIsVisible] = useState(true);

  const onPressButton = () => {
    setIsVisible(false);
  };

  return (
    <Modal visible={isVisible} transparent animationType="fade">
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={styles.modal}>
          <TouchableOpacity onPress={onPressButton}>
            <MaterialIcons
              name="close"
              color="black"
              size={28}
              style={{
                marginRight: normalize(20),
                left: 325,
                position: 'absolute',
                marginTop: normalize(10),
              }}
            />
          </TouchableOpacity>

          <View>
            <Text style={styles.headingText}>Alert!</Text>
          </View>
          <View>
            <Text style={styles.textStyle}>
              Changing your Grade or target Exam
            </Text>
            <Text style={styles.textStyle}>
              will result in resetting all progress made
            </Text>
            <Text style={styles.textStyle}>inside game mode</Text>
          </View>
          <View style={styles.buttonContainer}>
            <LargeGameModeButton
              text={'Go back'}
              onPress={onPressButton}
              backgroundColor={'#fff'}
              color={'#ff6b24'}
              extraStyle={styles.buttonStyle}
            />

            <LargeGameModeButton
              text={'Proceed'}
              onPress={onPressButton}
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
  modal: {
    justifyContent: 'center',
    margin: normalize(20),
    backgroundColor: '#fff',
    borderRadius: normalize(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: normalize(4),
    elevation: normalize(3),
  },
  headingText: {
    fontSize: normalize(25),

    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#001620',
    marginTop: normalize(40),
  },
  textStyle: {
    fontSize: normalize(14),

    textAlign: 'center',
    color: '#001620',
    marginTop: normalize(3),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: normalize(8),
    paddingHorizontal: normalize(3),
    padding: normalize(8),
  },
  buttonStyle: {
    width: normalize(150),
    borderColor: 'orange',
    borderWidth: normalize(2),
    fontSize: normalize(22),
  },
});

export default GradeSwitchModal;
