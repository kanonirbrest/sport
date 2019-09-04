import React, {Component} from 'react'
import s from './MainContent.module.css';
import {articles} from './../../common/mock-data'
import NewsItem from '../NewsItem/NewsItem';
import { withRouter } from 'react-router-dom';


class MainContent extends Component {


  render() {
    const onItemClick = (id: number) => {
      //todo refactor
      const { history } = this.props as any;
      history.push(`/post/${id}`);
    }

    let articleItems: any[] = articles.map((article, index) => <NewsItem key={index} index={index} article={article} onItemClick={onItemClick}/>)

    return (
      <main>
        <div className={s.postsWrapper}>
          {articleItems}
        </div>
      </main>
    )
  }
}

export default withRouter<any, any>(MainContent);