import React from 'react'

export default function SidebarNewsItem(props: any) {
  return (
    <div>
      <div className="content">
        {props.content}
      </div>
      <div className="commentsItem">
        {props.comments.length}
      </div>
    </div>
  )
}
