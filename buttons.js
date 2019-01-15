import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  button: {},
  text: {}
});

class Button extends Component {
  _onPress = () => {
    const { onPress } = this.props;
    if (typeof onPress === 'function') onPress();
  }
  render() {
    const { children, textStyle, ...other } = this.props;
    return (
      <TouchableOpacity
        style={styles.button}
        {...other}
        onPress={this._onPress}
      >
        {typeof children === 'string' ?
          <Text style={textStyle || styles.text}>{children}</Text>
          : children
        }
      </TouchableOpacity>
    );
  }
}

export default Button;
