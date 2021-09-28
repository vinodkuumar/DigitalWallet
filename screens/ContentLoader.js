import React from 'react';
import {View, Text, Dimensions, ScrollView, StyleSheet} from 'react-native';
import ContentLoader, {
  Rect,
  Circle,
  Ellipse,
} from 'react-content-loader/native';
import {normalize} from '../constants/utils';
import colors from '../assets/colors';

const {width} = Dimensions.get('window');

const ContentLoaders = props => {
  function ProfileContentLoader() {
    return (
      <View style={styles.profileContainer}>
        <ContentLoader
          speed={2}
          width={width}
          height={168}
          viewBox={'0 ' + ' 0 ' + width + ' 168'}
          backgroundColor="#ccc"
          foregroundColor={colors.grayShade7}>
          <Circle
            cx={normalize(30)}
            x={normalize(10)}
            cy={normalize(40)}
            r={normalize(20)}
          />
          <Rect
            x={normalize(70)}
            y={normalize(20)}
            width={normalize(35)}
            height={normalize(15)}
          />
          <Rect
            x={normalize(70)}
            y={normalize(40)}
            width={normalize(80)}
            height={normalize(20)}
          />
          <Rect
            x={normalize(240)}
            y={normalize(30)}
            width={normalize(120)}
            height={normalize(40)}
            rx={normalize(20)}
          />
          <Rect
            x={normalize(10)}
            y={normalize(90)}
            width={normalize(150)}
            height={normalize(25)}
          />
          <Rect
            x={normalize(10)}
            y={normalize(130)}
            width={normalize(100)}
            height={normalize(15)}
          />
        </ContentLoader>
      </View>
    );
  }
  function liveEventContentLoader() {
    return (
      <View style={styles.cardContentContainer}>
        <ContentLoader
          speed={2}
          width={width}
          height={normalize(250)}
          viewBox={'0 ' + ' 0 ' + width + ' 250'}
          backgroundColor="#f3f3f3"
          foregroundColor={colors.grayShade7}>
          <Rect
            x={normalize(10)}
            y={normalize(20)}
            width={normalize(160)}
            height={normalize(15)}
          />
          <Rect
            x={normalize(10)}
            y={normalize(45)}
            width={normalize(80)}
            height={normalize(15)}
          />
          <Rect
            x={normalize(80)}
            y={normalize(45)}
            width={normalize(60)}
            height={normalize(15)}
          />
          <Rect
            x={normalize(10)}
            y={normalize(75)}
            width={normalize(260)}
            height={normalize(25)}
          />
          <Rect
            x={normalize(10)}
            y={normalize(110)}
            width={normalize(160)}
            height={normalize(25)}
          />
          <Circle
            x={normalize(10)}
            cx={normalize(10)}
            cy={normalize(170)}
            r={normalize(15)}
          />
          <Circle
            x={normalize(20)}
            cx={normalize(20)}
            cy={normalize(170)}
            r={normalize(15)}
          />
          <Circle
            x={normalize(30)}
            cx={normalize(30)}
            cy={normalize(170)}
            r={normalize(15)}
          />
          <Rect
            x={normalize(90)}
            y={normalize(160)}
            width={normalize(80)}
            height={normalize(25)}
          />
          <Rect
            x={normalize(10)}
            y={normalize(190)}
            width={normalize(300)}
            height={normalize(3)}
          />
          <Rect
            x={normalize(10)}
            y={normalize(200)}
            width={normalize(30)}
            height={normalize(30)}
          />
          <Rect
            x={normalize(45)}
            y={normalize(205)}
            width={normalize(60)}
            height={normalize(20)}
          />
          <Rect
            x={normalize(110)}
            y={normalize(205)}
            width={normalize(20)}
            height={normalize(20)}
          />
          <Rect
            x={normalize(230)}
            y={normalize(200)}
            width={normalize(80)}
            height={normalize(30)}
            rx={normalize(10)}
          />
        </ContentLoader>
      </View>
    );
  }
  const dailyChallengesLoader = () => {
    return (
      <>
        <View style={styles.profileContainer}>
          <ContentLoader
            speed={2}
            width={width}
            height={normalize(60)}
            viewBox={'0' + ' 0 ' + width + ' ' + normalize(60)}
            backgroundColor="#f3f3f3"
            foregroundColor={colors.grayShade7}>
            <Rect
              x={normalize(16)}
              y={normalize(26)}
              width={normalize(80)}
              height={normalize(15)}
            />
            <Rect
              x={normalize(120)}
              y={normalize(15)}
              width={normalize(140)}
              height={normalize(30)}
              rx={normalize(25)}
            />
            <Rect
              x={normalize(280)}
              y={normalize(26)}
              width={normalize(80)}
              height={normalize(15)}
            />
          </ContentLoader>
        </View>
        <View style={{flex: 1, marginTop: normalize(20)}}>
          <ContentLoader
            speed={2}
            width={width}
            height={normalize(30)}
            viewBox={'0' + ' 0 ' + width + ' ' + normalize(30)}
            backgroundColor="#ccc"
            foregroundColor={colors.grayShade7}>
            <Rect
              x={normalize(10)}
              y={normalize(5)}
              width={normalize(120)}
              height={normalize(20)}
            />
          </ContentLoader>
        </View>
      </>
    );
  };
  const leaderBoardHeaderLoader = () => {
    return (
      <>
        <View style={{flex: 1, margin: normalize(10)}}>
          <ContentLoader
            speed={2}
            width={width}
            height={normalize(30)}
            viewBox={'0' + ' 0 ' + width + ' ' + normalize(30)}
            backgroundColor="#ccc"
            foregroundColor={colors.grayShade7}>
            <Rect
              x={normalize(10)}
              y={normalize(5)}
              width={normalize(120)}
              height={normalize(20)}
            />
            <Rect
              x={normalize(260)}
              y={normalize(5)}
              width={normalize(80)}
              height={normalize(15)}
            />
          </ContentLoader>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderRadius: normalize(16),
          }}>
          <ContentLoader
            speed={2}
            width={width}
            height={normalize(50)}
            viewBox={'0' + ' 0 ' + width + ' ' + normalize(50)}
            backgroundColor="#f3f3f3"
            foregroundColor={colors.grayShade7}>
            <Rect
              x={normalize(10)}
              y={normalize(15)}
              width={normalize(130)}
              height={normalize(30)}
              rx={normalize(25)}
            />
            <Rect
              x={normalize(180)}
              y={normalize(18)}
              width={normalize(90)}
              height={normalize(15)}
            />
            <Rect
              x={normalize(220)}
              y={normalize(18)}
              width={normalize(90)}
              height={normalize(15)}
            />
          </ContentLoader>
        </View>
        <View>
          <ContentLoader
            speed={2}
            width={width}
            height={normalize(30)}
            viewBox={'0' + ' 0 ' + width + ' ' + normalize(30)}
            backgroundColor="#ccc"
            foregroundColor={colors.grayShade7}>
            <Rect
              x={normalize(110)}
              y={normalize(10)}
              width={normalize(200)}
              height={normalize(20)}
            />
          </ContentLoader>
        </View>
      </>
    );
  };
  const leaderBoardContentLoader = () => {
    return (
      <>
        <View style={styles.leaderBoardContainer}>
          <ContentLoader
            speed={2}
            width={width}
            height={normalize(200)}
            viewBox={'0' + ' 0 ' + width + ' ' + normalize(200)}
            backgroundColor="#f3f3f3"
            foregroundColor={colors.grayShade7}>
            <Rect
              x={normalize(10)}
              y={normalize(10)}
              width={normalize(30)}
              height={normalize(10)}
            />
            <Rect
              x={normalize(80)}
              y={normalize(10)}
              width={normalize(30)}
              height={normalize(10)}
            />
            <Rect
              x={normalize(300)}
              y={normalize(10)}
              width={normalize(60)}
              height={normalize(10)}
            />
            {/* first line */}
            <Rect
              x={normalize(10)}
              y={normalize(50)}
              width={normalize(25)}
              height={normalize(15)}
            />
            <Circle x={normalize(90)} y={normalize(57)} r={normalize(15)} />
            <Rect
              x={normalize(120)}
              y={normalize(50)}
              width={normalize(90)}
              height={normalize(15)}
            />
            <Rect
              x={normalize(280)}
              y={normalize(45)}
              width={normalize(25)}
              height={normalize(25)}
            />
            <Rect
              x={normalize(310)}
              y={normalize(50)}
              width={normalize(45)}
              height={normalize(15)}
            />
            {/* second line */}
            <Rect
              x={normalize(10)}
              y={normalize(105)}
              width={normalize(25)}
              height={normalize(15)}
            />
            <Circle x={normalize(90)} y={normalize(112)} r={normalize(15)} />
            <Rect
              x={normalize(120)}
              y={normalize(105)}
              width={normalize(90)}
              height={normalize(15)}
            />
            <Rect
              x={normalize(280)}
              y={normalize(100)}
              width={normalize(25)}
              height={normalize(25)}
            />
            <Rect
              x={normalize(310)}
              y={normalize(105)}
              width={normalize(45)}
              height={normalize(15)}
            />
            {/* third line */}
            <Rect
              x={normalize(10)}
              y={normalize(155)}
              width={normalize(25)}
              height={normalize(15)}
            />
            <Circle x={normalize(90)} y={normalize(162)} r={normalize(15)} />
            <Rect
              x={normalize(120)}
              y={normalize(155)}
              width={normalize(90)}
              height={normalize(15)}
            />
            <Rect
              x={normalize(280)}
              y={normalize(150)}
              width={normalize(25)}
              height={normalize(25)}
            />
            <Rect
              x={normalize(310)}
              y={normalize(155)}
              width={normalize(45)}
              height={normalize(15)}
            />
          </ContentLoader>
        </View>
        <View style={{backgroundColor: '#ccc'}}>
          <ContentLoader
            speed={2}
            width={width}
            height={normalize(25)}
            viewBox={'0' + ' 0 ' + width + ' ' + normalize(25)}
            backgroundColor="#fff"
            foregroundColor="#f9f9f9">
            <Rect
              x={normalize(45)}
              y={normalize(8)}
              width={normalize(280)}
              height={normalize(10)}
            />
          </ContentLoader>
        </View>
        <View>
          <ContentLoader
            speed={2}
            width={width}
            height={normalize(45)}
            viewBox={'0' + ' 0 ' + width + ' ' + normalize(45)}
            backgroundColor="#ccc"
            foregroundColor={colors.grayShade7}>
            <Rect
              x={normalize(10)}
              y={normalize(15)}
              width={normalize(25)}
              height={normalize(15)}
            />
            <Circle x={normalize(90)} y={normalize(25)} r={normalize(15)} />
            <Rect
              x={normalize(120)}
              y={normalize(15)}
              width={normalize(70)}
              height={normalize(15)}
            />
            <Rect
              x={normalize(280)}
              y={normalize(10)}
              width={normalize(25)}
              height={normalize(25)}
            />
            <Rect
              x={normalize(310)}
              y={normalize(15)}
              width={normalize(45)}
              height={normalize(15)}
            />
          </ContentLoader>
        </View>
        <View style={{backgroundColor: 'white', borderRadius: normalize(26)}}>
          <ContentLoader
            speed={2}
            width={width}
            height={normalize(250)}
            viewBox={'0' + ' 0 ' + width + ' ' + normalize(250)}
            backgroundColor="#f3f3f3"
            foregroundColor="#f9f9f9">
            <Rect
              x={normalize(10)}
              y={normalize(20)}
              width={normalize(25)}
              height={normalize(15)}
            />
            <Circle x={normalize(90)} y={normalize(27)} r={normalize(15)} />
            <Rect
              x={normalize(120)}
              y={normalize(20)}
              width={normalize(90)}
              height={normalize(15)}
            />
            <Rect
              x={normalize(280)}
              y={normalize(15)}
              width={normalize(25)}
              height={normalize(25)}
            />
            <Rect
              x={normalize(310)}
              y={normalize(20)}
              width={normalize(45)}
              height={normalize(15)}
            />
            {/* second line */}
            <Rect
              x={normalize(10)}
              y={normalize(75)}
              width={normalize(25)}
              height={normalize(15)}
            />
            <Circle x={normalize(90)} y={normalize(82)} r={normalize(15)} />
            <Rect
              x={normalize(120)}
              y={normalize(75)}
              width={normalize(90)}
              height={normalize(15)}
            />
            <Rect
              x={normalize(280)}
              y={normalize(70)}
              width={normalize(25)}
              height={normalize(25)}
            />
            <Rect
              x={normalize(310)}
              y={normalize(75)}
              width={normalize(45)}
              height={normalize(15)}
            />
            {/* third line */}
            <Rect
              x={normalize(10)}
              y={normalize(125)}
              width={normalize(25)}
              height={normalize(15)}
            />
            <Circle x={normalize(90)} y={normalize(132)} r={normalize(15)} />
            <Rect
              x={normalize(120)}
              y={normalize(125)}
              width={normalize(90)}
              height={normalize(15)}
            />
            <Rect
              x={normalize(280)}
              y={normalize(120)}
              width={normalize(25)}
              height={normalize(25)}
            />
            <Rect
              x={normalize(310)}
              y={normalize(125)}
              width={normalize(45)}
              height={normalize(15)}
            />
            <Rect
              x={normalize(10)}
              y={normalize(175)}
              width={normalize(350)}
              height={normalize(60)}
              rx={normalize(5)}
            />
          </ContentLoader>
        </View>
      </>
    );
  };
  const gameModeSwiperContentLoader = () => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: normalize(16),
          marginTop: normalize(16),
        }}>
        <ContentLoader
          speed={2}
          width={width}
          height={normalize(250)}
          viewBox={'0' + ' 0 ' + width + ' ' + normalize(250)}
          backgroundColor="#f3f3f3"
          foregroundColor={colors.grayShade7}>
          <Rect
            x={normalize(10)}
            y={normalize(10)}
            width={normalize(200)}
            height={normalize(25)}
          />
          <Rect
            x={normalize(10)}
            y={normalize(60)}
            width={normalize(250)}
            height={normalize(160)}
            rx={normalize(5)}
          />
          <Rect
            x={normalize(280)}
            y={normalize(60)}
            width={normalize(250)}
            height={normalize(160)}
          />
        </ContentLoader>
      </View>
    );
  };
  const RewardsContentLoader = () => {
    return (
      <View style={{backgroundColor: 'white', borderRadius: normalize(26)}}>
        <ContentLoader
          speed={2}
          width={width}
          height={normalize(200)}
          viewBox={'0' + ' 0 ' + width + ' ' + normalize(200)}
          backgroundColor="#f3f3f3"
          foregroundColor={colors.grayShade7}>
          {/* rewards */}
          <Rect
            x={normalize(10)}
            y={normalize(10)}
            width={normalize(180)}
            height={normalize(160)}
            rx={normalize(5)}
          />
          <Rect
            x={normalize(20)}
            y={normalize(25)}
            width={normalize(35)}
            height={normalize(35)}
          />
          <Rect
            x={normalize(20)}
            y={normalize(95)}
            width={normalize(68)}
            height={normalize(15)}
          />
          <Rect
            x={normalize(20)}
            y={normalize(115)}
            width={normalize(45)}
            height={normalize(15)}
          />
          {/* questions */}
          <Rect
            x={normalize(200)}
            y={normalize(10)}
            width={normalize(180)}
            height={normalize(160)}
            rx={normalize(5)}
          />
          <Rect
            x={normalize(220)}
            y={normalize(25)}
            width={normalize(35)}
            height={normalize(35)}
          />
          <Rect
            x={normalize(220)}
            y={normalize(95)}
            width={normalize(68)}
            height={normalize(15)}
          />
          <Rect
            x={normalize(220)}
            y={normalize(115)}
            width={normalize(45)}
            height={normalize(15)}
          />
        </ContentLoader>
      </View>
    );
  };
  const helpContentLoader = () => {
    return (
      <View style={styles.helpContainer}>
        <ContentLoader
          speed={2}
          width={width}
          height={normalize(50)}
          viewBox={'0' + ' 0 ' + width + ' ' + normalize(50)}
          backgroundColor="#f3f3f3"
          foregroundColor="#f9f9f9">
          <Rect
            x={normalize(10)}
            y={normalize(10)}
            width={normalize(23)}
            height={normalize(23)}
          />
          <Rect
            x={normalize(50)}
            y={normalize(10)}
            width={normalize(200)}
            height={normalize(15)}
          />
          <Rect
            x={normalize(280)}
            y={normalize(10)}
            width={normalize(18)}
            height={normalize(18)}
          />
        </ContentLoader>
      </View>
    );
  };
  return (
    <ScrollView>
      {ProfileContentLoader()}
      {liveEventContentLoader()}
      {dailyChallengesLoader()}
      {liveEventContentLoader()}
      {leaderBoardHeaderLoader()}
      {leaderBoardContentLoader()}
      {gameModeSwiperContentLoader()}
      {RewardsContentLoader()}
      {helpContentLoader()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  cardContentContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: normalize(16),
    margin: normalize(20),
  },
  leaderBoardContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: normalize(20),
    borderRadius: normalize(26),
  },
  helpContainer: {
    margin: normalize(10),
    borderRadius: normalize(16),
    borderWidth: normalize(1),
    borderColor: 'white',
    backgroundColor: '#fff',
  },
});

export default ContentLoaders;
