import React, { Component } from 'react';
import {sidebarItems} from './../../common/mock-data';
import SidebarNewsItem from './../SidebarNewsItem/SidebarNewsItem';
export default class Sidebar extends Component {
    render() {
        let sidebarNewsItems = sidebarItems.map((item, index) => {
            return <SidebarNewsItem index={index} item={item} key={index}/>
        })

        return (
            <aside id='sidebar'>
                {sidebarNewsItems}
            </aside>
        )
    }
}
