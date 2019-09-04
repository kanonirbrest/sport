import React from 'react';
import Menu from './../../../components/Menu/Menu';

export default function Header() {
    return (
        <header>
            <div className="headerContainer">
                <h1>Газета.by</h1>
                <h2>Брестское Динамо в серии пенальти выигрывает кубок беларуси 2007!</h2>
            </div>
            <Menu/>
        </header>
    )
}
