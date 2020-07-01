import React from 'react';

import './homepage.styles.scss';

const HomePage = () =>(
    <div className = 'homepage'>
        <h1> Welcome to my Homepage</h1>
        <div className = 'directory-menu'>
            <div className = 'menu-item' >
                <div className = 'content'>
                    <h1 className ='title'> HAT</h1>
                    <span className = 'subtitle'>SHOP NOW</span>
                </div>
            </div>


        <div className = 'menu-item' >
                <div className = 'content'>
                    <h1 className ='title'>JACKETS</h1>
                    <span className = 'subtitle'>SHOP NOW</span>
                </div>
            </div>

            <div className = 'menu-item' >
                <div className = 'content'>
                    <h1 className ='title'>WOMEN'S</h1>
                    <span className = 'subtitle'>SHOP NOW</span>
                </div>
            </div>

            <div className = 'menu-item' >
                <div className = 'content'>
                    <h1 className ='title'> MEN'S</h1>
                    <span className = 'subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
)
export default HomePage;