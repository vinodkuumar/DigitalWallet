import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {normalize} from '../constants/utils';

const XPCard = props => {
  const {points = '', status = '', practisePoints, coinSize} = props || {};

  if (status == COMPLETED) {
    const completedPoints = points == 0 ? 'No' : points;
    return (
      <View style={styles.container}>
        {/* <MaterialIcons name={'stars'} color={'rgba(255, 195, 43, 1)'} size={18} style={styles.iconStyle}/> */}
        <Coin coinSize={coinSize} />
        <Text style={styles.textStyle}>{`${completedPoints} XP earned`}</Text>
      </View>
    );
  } else if (status == UPCOMING || status == LIVE) {
    return (
      <View style={styles.container}>
        {/* <MaterialIcons name={'stars'} color={'rgba(255, 195, 43, 1)'} size={18} style={styles.iconStyle}/> */}
        <Coin coinSize={coinSize} />
        <Text style={styles.textStyle}>{`${points} XP`}</Text>
        <Text style={styles.infoIconStyle}>
          {String.fromCodePoint(parseInt('E90B', 16))}
        </Text>
      </View>
    );
  } else if (status == MISSED) {
    return (
      <View style={styles.container}>
        {/* <MaterialIcons name={'stars'} color={'rgba(255, 195, 43, 1)'} size={19} style={styles.iconStyle}/> */}
        <Coin coinSize={coinSize} />
        <Text
          style={[
            styles.textStyle,
            styles.crossedText,
          ]}>{`${points} XP `}</Text>
        <Text style={styles.textStyle}>{`${practisePoints} XP`}</Text>
        <Text style={styles.infoIconStyle}>
          {String.fromCodePoint(parseInt('E90B', 16))}
        </Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        {/* <MaterialIcons name={'stars'} color={'rgba(78, 27, 143, 1)'} size={18} style={styles.iconStyle}/> */}
        {/* <Text style={styles.xpIcon}>
                    {String.fromCodePoint(parseInt('E936', 16))}
                </Text> */}
        <Coin coinSize={coinSize} />
        <Text style={styles.textStyle}>{`${points} XP`}</Text>
      </View>
    );
  }
};

export default XPCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  // iconStyle:{
  //     marginRight: normalize(6)
  // },
  textStyle: {
    fontSize: normalize(14),
    fontFamily: font.poppins_bold,
    lineHeight: normalize(18),
    color: '#582895',
  },
  infoIconStyle: {
    marginLeft: normalize(5),
    fontFamily: font.voteIcons,
    fontSize: normalize(16),
    color: '#001620',
    opacity: 0.5,
  },
  crossedText: {
    color: 'rgba(0, 22, 32, 0.3)',
    textDecorationLine: 'line-through',
    marginRight: normalize(2),
  },
});
