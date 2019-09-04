import React from 'react'
import s from './NewsItem.module.css';

//todo add NewsItem interface
export default function NewsItem(props: any) {
  
  const onItemClick = () => {
    props.onItemClick(props.article.id)
  }

  return (
    <div className={s['post' + (props.index + 1)]} onClick={onItemClick}>
      <div className={s.title}>{props.article.title}</div>
      <div className={s.content + ' '+ s.elipsis}>{props.article.content}</div>
    </div>
  )
}
