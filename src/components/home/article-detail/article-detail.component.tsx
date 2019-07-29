import React, { Component } from 'react';
import { Article } from '../../../models/article/article.model';
import { Layout, Text } from 'react-native-ui-kitten';
import { Button } from 'react-native-ui-kitten/ui/button/button.component';
import { View, StyleSheet } from 'react-native';

interface ArticleDetailProp {
  article: Article;
  onPress: () => void;
}
export class ArticleDetail extends Component<ArticleDetailProp, any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <View>
          <Text>{this.props.article.abstract}</Text>
          <View style={this.styles.detailsWrapper}>
            <Text style={this.styles.detail}>{`Date published: ${this.props.article.publishedDate.toLocaleDateString()}`}</Text>
            <Text style={this.styles.detail}>{`Views: ${this.props.article.views}`}</Text>
          </View>
        </View>
        <Button onPress={this.props.onPress}>Back</Button>
      </Layout>
    );
  }
  pickKeywords() {
    const keywords = this.props.article.adxKeywords.slice(0, 3);
    return keywords;
  }

  styles = StyleSheet.create({
    detailsWrapper: {
      display: 'flex'
    },
    detail: {
      fontWeight: 'bold'
    }
  });
}
