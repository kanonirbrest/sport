import React from 'react';
import Menu from './../../../components/Menu/Menu';
import s from './Header.module.css';
import { NavLink, Link  } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className={s.headerContainer}>
                <Link to='/' style={{ textDecoration: 'none', color: 'black' }}> <h1>Газета.by</h1> </Link>
                <h2>Брестское Динамо в серии пенальти выигрывает кубок беларуси 2007!</h2>
            </div>
            <Menu/>
        </header>
    )
}
