enum MediaType {
  IMAGE = 'image'
}
enum MediaFormat {
  NORMAL = 'Normal'
}
export class Article {
  public title: string;
  public abstract: string;
  public adxKeywords: string[];
  public media: Array<{ url: string; caption: string }>;
  public views: number;
  public publishedDate: Date;

  static mapArticleToModel(args: any): Article {
    const article = new Article();
    article.abstract = args.abstract;
    article.adxKeywords = args.adx_keywords.split(';');
    article.media = args.media.map(item => {
      if (item.type === MediaType.IMAGE) {
        return item['media-metadata'].filter(media => media.format === MediaFormat.NORMAL)[0];
      }
    });
    article.views = args.views;
    article.title = args.title;
    article.publishedDate = new Date(args.published_date);
    return article;
  }
}
