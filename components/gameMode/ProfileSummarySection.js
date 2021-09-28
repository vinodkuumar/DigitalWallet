import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {normalize} from '../../constants/utils';
import font from '../../assets/font';

const ProfileSummarySection = () => {
  return (
    <View>
      <View style={styles.topBoxSection}>
        <View style={styles.topLeftBox}>
          <Text style={styles.boxTextTop}>50</Text>
          <Text style={styles.boxTextBottom}>xp earned</Text>
        </View>
        <View style={styles.verticalLine}></View>
        <View>
          <Text style={styles.boxTextTop}>4</Text>
          <Text style={styles.boxTextBottom}>challenges won</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    topBoxSection: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    topLeftBox: {
        flex: 0.40,
        marginBottom: 20
    },
    boxTextTop: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: font.poppins_bold
    },
    boxTextBottom: {
        textAlign: 'center',
        fontSize: 12,
        fontFamily: font.poppins_medium
    },
    verticalLine: {
        height: '80%',
        width: 0.8,
        backgroundColor: '#ebebeb',
        alignSelf: 'center'
    },
    horizontalLine: {
        alignSelf: 'center',
        width: '80%',
        height: 0.8,
        backgroundColor: '#ebebeb'
    }
})

export default ProfileSummarySection;