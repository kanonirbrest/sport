import React from 'react'
import s from './Menu.module.css';
import {Link} from 'react-router-dom';

export default function Menu() {
  return (
    // defaultLink
    <menu className={s.menu + ' ' + 'defaultLink'}>
      <Link to='/addArticle'>add Article</Link>
      <Link to='/'>пункт меню</Link>
      <Link to='/'>пункт меню</Link>
      <Link to='/'>пункт меню</Link>
      <Link to='/'>пункт меню</Link>
      <Link to='/'>пункт меню</Link>
      <Link to='/'>пункт меню</Link>
      <Link to='/'>пункт меню</Link>
      <Link to='/'>пункт меню</Link>
      <Link to='/'>пункт меню</Link>
    </menu>
  )
}
