import {StyleSheet} from 'react-native';
import colors from './colors';
import {normalize} from '../constants/utils';

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.dark,
      marginBottom: 12,
      elevation: 2,
      shadowOffset: { width: 1, height: 0 },
      shadowOpacity: 0.1,
      shadowColor: '#fff',
    },
    mainContainer: {
      marginTop: normalize(16),
      marginHorizontal: 16,
    },
    headerContentLoader: {
      marginBottom: 8,
    },
  });
  
  export default styles;