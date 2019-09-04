import React from 'react';
import s from './SidebarNewsItem.module.css'

export default function SidebarNewsItem(props: any) {
  return (
    <div className={s.sidebarItem}>
      <div className={s.content}>
        {props.item.content}
      </div>
      <a className={s.itemComments}>
        {props.item.comments.length}
      </a>
    </div>
  )
}
