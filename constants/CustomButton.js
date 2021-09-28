import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, BackHandler } from 'react-native';

class CustomButton extends PureComponent {
  static propTypes = {
    ...PropTypes.TouchableHighlight,
  };
  constructor(props) {
    super(props);
    this.state = { err: null };
  }
  render() {
    if (this.state.err) throw this.state.err
    return <TouchableOpacity underlayColor={'transparent'} {...this.props} onPress={this.onPress} disabled={this.props.disabled}/>;
  }
  onPress = () => {
    try {
      if (this.props.onPress) {
        this.props.onPress(this.props.data)
      }
    } catch (err) {
      BackHandler.addEventListener('hardwareBackPress', () => {
        BackHandler.exitApp();
        return true;
      });
      this.setState({ err })
      // this.setState(() => {
      //   throw err;
      // })
    }

  }
}
export default CustomButton;
