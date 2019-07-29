import React, { Component } from 'react';
import { Layout, Button, Text } from 'react-native-ui-kitten';
import { ArticleList } from './article-list/article-list.component';
import { NyTimesService, NySections, NyPeriods } from '../../services/ny-times.service';
import { Article } from '../../models/article/article.model';

export class Home extends Component<any, any> {
  private nyService: NyTimesService;

  constructor(props) {
    super(props);
    this.nyService = new NyTimesService();
    this.state = {
      articles: []
    };
  }

  async componentDidMount() {
    try {
      const result = await this.nyService.fetchData(NySections.ALL, NyPeriods.MONTH);
      const articles: Article[] = [];
      result.results.forEach(item => articles.push(Article.mapArticleToModel(item)));
      this.setState({ articles });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <Layout>
        <ArticleList dataSource={this.state.articles} />
      </Layout>
    );
  }
}
