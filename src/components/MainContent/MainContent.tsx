import React, {Component} from 'react'
import s from './MainContent.module.css';
import {articles} from './../../common/mock-data'
import NewsItem from '../NewsItem/NewsItem';

export default class MainContent extends Component {

  render() {
    let articleItems: any[] = articles.map((article, index) => <NewsItem index={index} article={article}/>)

    return (
      <main>
        <div className={s.postsWrapper}>
          {articleItems}
        </div>
      </main>
    )
  }
}
