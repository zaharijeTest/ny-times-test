import React, { Component } from 'react';
import { TopNavigation, TopNavigationAction } from 'react-native-ui-kitten';
import { Image } from 'react-native';

interface NavigationProps {
  title: string;
}

export class Navigation extends Component<NavigationProps, NavigationProps> {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title
    };
  }

  renderControlIcon() {
    return <Image source={{ uri: 'assets/splash.png' }} />;
  }

  renderLeftControl() {
    return <TopNavigationAction icon={this.renderControlIcon} />;
  }
  render() {
    return <TopNavigation title={this.state.title} leftControl={this.renderLeftControl()} />;
  }
}
