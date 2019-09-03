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
          {/* <div className={s.post1}>
            <img src="" alt="" />
            <div className={s.title}>mytitle</div>
            <div className={s.text}>description</div>
          </div>
          <div className={s.post2}>
            <img src="" alt="" />
            <div className={s.title}>mytitle</div>
            <div className={s.text}>description</div>
          </div>
          <div className={s.post3}>
            <div className={s.title}>mytitle</div>
            <div className={s.text}>description</div>
          </div>
          <div className={s.post4}>
            <div className={s.title}>mytitle</div>
            <div className={s.text}>description</div>
          </div>
          <div className={s.post5}>
            <div className={s.title}>mytitle</div>
            <div className={s.text}>description</div>
          </div>
          <div className={s.post6}>
            <div className={s.title}>mytitle</div>
            <div className={s.text}>description</div>
          </div>
          <div className={s.post7}>
            <div className={s.title}>mytitle</div>
            <div className={s.text}>description</div>
          </div>
          <div className={s.post8}>
            <div className={s.title}>mytitle</div>
            <div className={s.text}>description</div>
          </div> */}
        </div>
      </main>
    )
  }
}
