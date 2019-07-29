import React, { Component } from 'react';
import { Article } from '../../../models/article/article.model';
import { List, ListItem } from 'react-native-ui-kitten';
import { ListRenderItemInfo } from 'react-native';
import { ArticleDetail } from '../article-detail/article-detail.component';

interface ArticleListProps {
  dataSource: Article[];
}

interface ArticleListState {
  selectedItemIndex?: number;
  isDetail: Boolean;
}

export class ArticleList extends Component<ArticleListProps, ArticleListState> {
  constructor(props) {
    super(props);
    this.state = {
      isDetail: false
    };
  }

  onItemPress = (index, event) => {
    this.setState({ isDetail: true, selectedItemIndex: index });
    this.forceUpdate();
  };

  renderItem = (info: ListRenderItemInfo<Article>) => {
    return <ListItem title={info.item.title} onPress={this.onItemPress} />;
  };

  onBack = () => {
    this.setState({ isDetail: false });
  };

  render() {
    if (this.state.isDetail) {
      return (
        <ArticleDetail
          onPress={this.onBack}
          article={this.props.dataSource.filter((item, index) => index === this.state.selectedItemIndex)[0]}
        />
      );
    } else {
      return <List data={this.props.dataSource} renderItem={this.renderItem} />;
    }
  }
}
