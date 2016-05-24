import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';

import BoxLoaders from './BoxLoaders';

class RNBoxLoaders extends Component {
  constructor(props){
    super(props);
    this.spinners = [];
    this.state = {
      type: 'Loader1',
      backgroundColor: '#e5e5e5',
      squareColor: '#000000'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <BoxLoaders style={styles.spinner} type={this.state.type} backgroundColor={this.state.backgroundColor} squareColor = {this.state.squareColor} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  spinner:{
    width: 100,
    height: 100,
    position: 'absolute',
  }
});

AppRegistry.registerComponent('BoxLoaders', () => RNBoxLoaders);