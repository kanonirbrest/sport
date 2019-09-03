import React, { Component } from 'react'
import s from './MainContent.module.css';

export default class MainContent extends Component {
    render() {
        return (
            <main>
                <div className={s.postsWrapper}>
                    <div className={s.post1}>
                        <img src="" alt=""/>
                        <div className={s.title}>mytitle</div>
                        <div className={s.text}>description</div>
                    </div>
                    <div className={s.post2}>
                        <img src="" alt=""/>
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
                    </div>
                </div>
            </main>
        )
    }
}
